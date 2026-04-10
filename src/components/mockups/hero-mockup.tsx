import { useRef, useState } from "react";

// t = token helper
const k = (text: string) => ({ text, c: "keyword" });
const s = (text: string) => ({ text, c: "string" });
const t = (text: string) => ({ text, c: "type" });
const p = (text: string) => ({ text, c: "prop" });
const f = (text: string) => ({ text, c: "fn" });
const _ = (text: string) => ({ text, c: "" });
const m = (text: string) => ({ text, c: "muted" });

const tabs = [
  {
    name: "metehan.ts",
    lines: [
      {
        indent: 0,
        tokens: [
          k("import"),
          _(" { "),
          t("createFileRoute"),
          _(" } "),
          k("from"),
          _(" "),
          s('"@tanstack/react-router"'),
        ],
      },
      {
        indent: 0,
        tokens: [
          k("import"),
          _(" { "),
          t("QueryClient"),
          _(" } "),
          k("from"),
          _(" "),
          s('"@tanstack/react-query"'),
        ],
      },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [k("interface"), _(" "), t("Engineer"), _(" {")] },
      { indent: 1, tokens: [p("name"), _(": "), t("string")] },
      { indent: 1, tokens: [p("role"), _(": "), t("string")] },
      { indent: 1, tokens: [p("stack"), _(": "), t("string"), _("[]")] },
      {
        indent: 1,
        tokens: [
          p("ship"),
          _(": ("),
          _("idea: "),
          t("string"),
          _(") => "),
          t("Promise"),
          _("<"),
          t("Product"),
          _(">"),
        ],
      },
      { indent: 0, tokens: [_("}")] },
      { indent: 0, tokens: [] },
      {
        indent: 0,
        tokens: [k("const"), _(" metehan: "), t("Engineer"), _(" = {")],
      },
      {
        indent: 1,
        tokens: [p("name"), _(": "), s('"Metehan Kurucu"'), _(",")],
      },
      {
        indent: 1,
        tokens: [
          p("role"),
          _(": "),
          s('"Product-focused Software Engineer"'),
          _(","),
        ],
      },
      {
        indent: 1,
        tokens: [
          p("stack"),
          _(": ["),
          s('"TypeScript"'),
          _(", "),
          s('"React"'),
          _(", "),
          s('"Node.js"'),
          _(", "),
          s('"AI/LLMs"'),
          _("],"),
        ],
      },
      { indent: 0, tokens: [] },
      { indent: 1, tokens: [k("async"), _(" "), f("ship"), _("(idea) {")] },
      {
        indent: 2,
        tokens: [k("const"), _(" product = "), k("await"), _(" design(idea)")],
      },
      { indent: 2, tokens: [k("await"), _(" deploy(product)")] },
      { indent: 2, tokens: [k("return"), _(" product "), m("// 30+ shipped")] },
      { indent: 1, tokens: [_("}")] },
      { indent: 0, tokens: [_("}")] },
    ],
  },
  {
    name: "experience.ts",
    lines: [
      { indent: 0, tokens: [k("type"), _(" "), t("Role"), _(" = {")] },
      { indent: 1, tokens: [p("company"), _(": "), t("string")] },
      { indent: 1, tokens: [p("title"), _(": "), t("string")] },
      { indent: 1, tokens: [p("period"), _(": "), t("string")] },
      { indent: 1, tokens: [p("impact"), _("?: "), t("string")] },
      { indent: 0, tokens: [_("}")] },
      { indent: 0, tokens: [] },
      {
        indent: 0,
        tokens: [
          k("export"),
          _(" "),
          k("const"),
          _(" career: "),
          t("Role"),
          _("[] = ["),
        ],
      },
      { indent: 1, tokens: [_("{")] },
      { indent: 2, tokens: [p("company"), _(": "), s('"Promake.ai"'), _(",")] },
      {
        indent: 2,
        tokens: [p("title"), _(": "), s('"Frontend Developer"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("period"), _(": "), s('"Oct 2025 - Present"'), _(",")],
      },
      { indent: 1, tokens: [_("},")] },
      { indent: 1, tokens: [_("{")] },
      { indent: 2, tokens: [p("company"), _(": "), s('"Codixus"'), _(",")] },
      { indent: 2, tokens: [p("title"), _(": "), s('"Founder"'), _(",")] },
      {
        indent: 2,
        tokens: [p("period"), _(": "), s('"Dec 2024 - Present"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("impact"), _(": "), s('"6 consumer AI products"'), _(",")],
      },
      { indent: 1, tokens: [_("},")] },
      { indent: 1, tokens: [_("{")] },
      {
        indent: 2,
        tokens: [p("company"), _(": "), s('"Cizgi Studio"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("title"), _(": "), s('"Founding Engineer"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("period"), _(": "), s('"Oct 2022 - Jun 2025"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("impact"), _(": "), s('"2M+ downloads"'), _(",")],
      },
      { indent: 1, tokens: [_("},")] },
      { indent: 1, tokens: [_("...")] },
      { indent: 0, tokens: [_("]")] },
    ],
  },
  {
    name: "products.ts",
    lines: [
      {
        indent: 0,
        tokens: [
          k("import"),
          _(" { "),
          f("createProduct"),
          _(" } "),
          k("from"),
          _(" "),
          s('"@codixus/sdk"'),
        ],
      },
      { indent: 0, tokens: [] },
      {
        indent: 0,
        tokens: [k("export"), _(" "), k("const"), _(" products = [")],
      },
      { indent: 1, tokens: [f("createProduct"), _("({")] },
      { indent: 2, tokens: [p("name"), _(": "), s('"Flast"'), _(",")] },
      {
        indent: 2,
        tokens: [p("tagline"), _(": "), s('"Your AI companion"'), _(",")],
      },
      {
        indent: 2,
        tokens: [p("url"), _(": "), s('"https://flast.ai"'), _(",")],
      },
      {
        indent: 2,
        tokens: [
          p("features"),
          _(": ["),
          s('"chat"'),
          _(", "),
          s('"search"'),
          _(", "),
          s('"images"'),
          _(", "),
          s('"todos"'),
          _("],"),
        ],
      },
      { indent: 1, tokens: [_("}),")] },
      { indent: 1, tokens: [f("createProduct"), _("({")] },
      { indent: 2, tokens: [p("name"), _(": "), s('"Curtain AI"'), _(",")] },
      {
        indent: 2,
        tokens: [
          p("tagline"),
          _(": "),
          s('"Design your home with AI"'),
          _(","),
        ],
      },
      {
        indent: 2,
        tokens: [p("url"), _(": "), s('"https://curtainai.app"'), _(",")],
      },
      { indent: 1, tokens: [_("}),")] },
      {
        indent: 1,
        tokens: [
          f("createProduct"),
          _("({ name: "),
          s('"FiberCheck"'),
          _(", ... }),"),
        ],
      },
      {
        indent: 1,
        tokens: [
          f("createProduct"),
          _("({ name: "),
          s('"Impostor Who?"'),
          _(", ... }),"),
        ],
      },
      { indent: 1, tokens: [_("...")] },
      { indent: 0, tokens: [_("]")] },
    ],
  },
];

const stats = [
  { label: "Experience", value: "5+ yrs" },
  { label: "Shipped apps", value: "30+" },
  { label: "Downloads", value: "2.5M+" },
  { label: "OSS repos", value: "10+" },
];

function tokenColor(c: string) {
  switch (c) {
    case "keyword":
      return "text-[var(--color-accent)]";
    case "string":
      return "text-[#5a9a6a]";
    case "type":
      return "text-[var(--foreground)] font-semibold";
    case "fn":
      return "text-[var(--foreground)]";
    case "prop":
      return "text-[var(--foreground)]";
    default:
      return "text-[var(--muted-foreground)]";
  }
}

export function HeroMockup() {
  const [openTabs, setOpenTabs] = useState([0, 1, 2]);
  const [activeTab, setActiveTab] = useState(0);
  const [editorContent, setEditorContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const closeTab = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (openTabs.length <= 1) return;
    const newOpen = openTabs.filter((t) => t !== idx);
    setOpenTabs(newOpen);
    if (activeTab === idx) {
      setActiveTab(newOpen[0]);
    }
  };

  const activeContent =
    activeTab >= 0 && openTabs.includes(activeTab) ? tabs[activeTab] : null;

  return (
    <div
      className="flex h-[420px] flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] md:h-[480px] md:flex-row"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Sidebar */}
      <div className="hidden w-48 shrink-0 flex-col border-r border-[var(--border)] md:flex">
        <div className="border-b border-[var(--border)] px-4 py-3">
          <p className="font-[var(--font-display)] text-[11px] font-bold text-[var(--foreground)]">
            metehan.dev
          </p>
        </div>

        <div className="flex-1 p-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => {
                if (!openTabs.includes(i)) setOpenTabs([...openTabs, i]);
                setActiveTab(i);
              }}
              className={`mb-0.5 flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-left font-[var(--font-mono)] text-[11px] transition-colors ${
                i === activeTab
                  ? "bg-[var(--muted)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <span className="text-[var(--color-accent)]">ts</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="border-t border-[var(--border)] p-3">
          <p className="mb-2 font-[var(--font-mono)] text-[8px] uppercase tracking-wider text-[var(--muted-foreground)]">
            Overview
          </p>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between py-0.5"
            >
              <span className="font-[var(--font-mono)] text-[9px] text-[var(--muted-foreground)]">
                {s.label}
              </span>
              <span className="font-[var(--font-mono)] text-[9px] font-medium text-[var(--foreground)]">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex flex-1 flex-col cursor-text">
        {/* Tabs */}
        <div className="flex border-b border-[var(--border)]">
          {openTabs.map((idx) => (
            <button
              key={tabs[idx].name}
              onClick={() => setActiveTab(idx)}
              className={`group/tab flex items-center gap-2 px-4 py-2.5 font-[var(--font-mono)] text-[11px] transition-colors ${
                idx === activeTab
                  ? "border-b border-[var(--color-accent)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {tabs[idx].name}
              <span
                onClick={(e) => closeTab(idx, e)}
                className="ml-0.5 rounded p-0.5 text-[9px] opacity-0 transition-opacity hover:bg-[var(--muted)] group-hover/tab:opacity-100"
              >
                &times;
              </span>
            </button>
          ))}
        </div>

        {/* Code or Empty */}
        <div className="relative flex-1 overflow-hidden">
          {activeContent ? (
            <div
              key={activeTab}
              className="absolute inset-0 overflow-y-auto p-4 md:p-5"
            >
              <div className="font-[var(--font-mono)] text-[11px] leading-[2] md:text-xs">
                {activeContent.lines.map((line, i) => (
                  <div key={i} className="flex whitespace-pre">
                    <span className="mr-4 inline-block w-4 shrink-0 select-none text-right text-[var(--muted-foreground)] opacity-30">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tokenColor(tok.c)}>
                          {tok.text}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
                <div className="flex whitespace-pre">
                  <span className="mr-4 inline-block w-4 shrink-0 select-none text-right text-[var(--muted-foreground)] opacity-30">
                    {activeContent.lines.length + 1}
                  </span>
                  <span className="text-[var(--muted-foreground)]">
                    {editorContent}
                  </span>
                  <span className="ml-px inline-block h-[14px] w-[7px] animate-pulse bg-[var(--foreground)] opacity-60" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)]">
                <svg
                  className="h-5 w-5 text-[var(--muted-foreground)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <p className="font-[var(--font-display)] text-sm text-[var(--muted-foreground)]">
                No file open
              </p>
              <p className="font-[var(--font-mono)] text-[10px] text-[var(--muted-foreground)]">
                Select a file from the sidebar
              </p>
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-1.5">
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-mono)] text-[9px] text-[var(--muted-foreground)]">
              TypeScript
            </span>
            <span className="font-[var(--font-mono)] text-[9px] text-[var(--muted-foreground)]">
              UTF-8
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-mono)] text-[9px] text-[var(--muted-foreground)]">
              Ln {tabs[activeTab].lines.length + 1}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#5a9a6a]" />
          </div>
        </div>
      </div>

      {/* Hidden input for typing */}
      <input
        ref={inputRef}
        type="text"
        value={editorContent}
        onChange={(e) => setEditorContent(e.target.value)}
        className="fixed -left-[9999px] opacity-0"
        aria-label="Editor input"
      />
    </div>
  );
}
