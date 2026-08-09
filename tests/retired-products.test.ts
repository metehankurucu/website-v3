import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "vitest";
import { codixusProducts, projects } from "../src/data/projects";

// Flast was removed from sale on the App Store and Play Store on 2026-08-09,
// so this site can no longer show it as shipped work. flast.ai itself stays
// live and is out of scope.
//
// The same pass renamed Impostor Who? to Bluffin, which the product had already
// been renamed to on codixus.com while this site kept the old name.
//
// The registry check at the bottom is the one that matters most. Mockups are
// looked up by slug through a plain string-keyed record, so a slug that no
// longer matches its registry key does not fail the build or the type check.
// The card just renders with no mockup, which is easy to miss in review.

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "src");

const RETIRED = [
  { label: "Flast", pattern: /\bflast\b/i },
  { label: "flast.ai", pattern: /flast\.ai/i },
];

const RENAMED = [
  { label: "Impostor Who?", pattern: /impostor\s*who/i },
  { label: "impostorwho.com", pattern: /impostorwho\.com/i },
];

function sourceFiles(): string[] {
  const files: string[] = [];
  const walk = (dir: string): void => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (/\.(ts|tsx)$/.test(entry)) files.push(full);
    }
  };
  walk(SRC_DIR);
  return files;
}

function hits(pattern: RegExp): string[] {
  const found: string[] = [];
  for (const file of sourceFiles()) {
    const body = readFileSync(file, "utf8");
    for (const [i, line] of body.split("\n").entries()) {
      if (pattern.test(line)) {
        found.push(`${file.slice(ROOT.length + 1)}:${i + 1}`);
      }
    }
  }
  return found;
}

describe("retired and renamed products", () => {
  test("the source sweep actually found files", () => {
    // Guards against a walk that returns nothing and makes every check pass.
    const files = sourceFiles();
    expect(files.length).toBeGreaterThan(20);
    expect(files.some((f) => f.endsWith("data/projects.ts"))).toBe(true);
  });

  for (const { label, pattern } of RETIRED) {
    test(`no source file mentions ${label}`, () => {
      expect(hits(pattern)).toEqual([]);
    });
  }

  for (const { label, pattern } of RENAMED) {
    test(`no source file still says ${label}`, () => {
      expect(hits(pattern)).toEqual([]);
    });
  }
});

describe("mockup registry stays in step with project slugs", () => {
  /**
   * Keys are pulled out of the module source rather than imported, because
   * importing the registry pulls in every mockup component and its JSX.
   */
  function registryKeys(): string[] {
    const source = readFileSync(
      join(SRC_DIR, "components", "mockups", "index.tsx"),
      "utf8",
    );
    const block = source.match(
      /projectMockups:\s*Record<string,\s*ComponentType>\s*=\s*\{([\s\S]*?)\n\}/,
    );
    if (block === null) throw new Error("could not locate projectMockups");
    const keys: string[] = [];
    for (const line of block[1].split("\n")) {
      const match = line.match(/^\s*"?([a-z0-9-]+)"?\s*:/i);
      if (match !== null) keys.push(match[1]);
    }
    return keys;
  }

  test("every registry key matches a real project slug", () => {
    const slugs = new Set([
      ...codixusProducts.map((p) => p.slug),
      ...projects.map((p) => p.slug),
      "codixus",
    ]);
    const orphans = registryKeys().filter((key) => !slugs.has(key));
    expect(orphans).toEqual([]);
  });

  test("the key parser found the registry it claims to read", () => {
    expect(registryKeys().length).toBeGreaterThan(3);
  });
});
