import { useState } from "react"

interface Slice {
  eyebrow: string
  line1: string
  pill: string
  accent: string
  pattern: "dots" | "waves" | "stripes"
}

const slices: Slice[] = [
  { eyebrow: "Hook", line1: "Move with", pill: "confidence.", accent: "#0FA958", pattern: "dots" },
  { eyebrow: "Shift", line1: "Right now,", pill: "right here.", accent: "#F59E0B", pattern: "waves" },
  { eyebrow: "Payoff", line1: "Start", pill: "tomorrow.", accent: "#3D3BFF", pattern: "stripes" },
]

export function ReactShotMockup() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex h-full flex-col justify-between bg-[var(--muted)] p-5 md:p-8">
      {/* Slice row */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {slices.map((s, i) => (
          <button
            key={s.eyebrow}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`flex flex-col items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-2.5 text-center transition-opacity md:p-3 ${
              active === i ? "opacity-100" : "opacity-70"
            }`}
          >
            <p className="font-[var(--font-display)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
              {s.eyebrow}
            </p>
            <p className="font-[var(--font-display)] text-[11px] font-bold leading-tight text-[var(--foreground)] md:text-xs">
              {s.line1}
            </p>
            <span
              className="rounded-md px-2 py-[3px] font-[var(--font-display)] text-[10px] font-bold text-white md:text-[11px]"
              style={{ backgroundColor: `${s.accent}CC` }}
            >
              {s.pill}
            </span>

            {/* iPhone silhouette with pattern tint */}
            <PhoneSilhouette pattern={patternFor(s)} />
          </button>
        ))}
      </div>

      {/* CLI strip */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 md:mt-4 md:py-2.5">
        <span className="font-[var(--font-mono)] text-[10px] text-[#5a9a6a]">$</span>
        <span className="font-[var(--font-mono)] text-[10px] text-[var(--foreground)] md:text-[11px]">
          bunx react-shot export hero --all --store
        </span>
      </div>
    </div>
  )
}

function patternFor(s: Slice): string {
  const c = `${s.accent}22`
  if (s.pattern === "dots") {
    return `radial-gradient(circle at 50% 50%, ${c} 1px, transparent 1.5px)`
  }
  if (s.pattern === "waves") {
    return `repeating-linear-gradient(45deg, ${c} 0 1px, transparent 1px 6px)`
  }
  return `repeating-linear-gradient(135deg, ${c} 0 1px, transparent 1px 8px)`
}

function PhoneSilhouette({ pattern }: { pattern: string }) {
  return (
    <div className="relative mt-1 w-[68%]" style={{ aspectRatio: "9 / 18" }}>
      {/* Body */}
      <div className="absolute inset-0 rounded-[10px] bg-[#0A0A0A] p-[3px] shadow-[0_6px_14px_rgba(0,0,0,0.18)]">
        {/* Screen */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[7px] bg-[#121214]"
          style={{ backgroundImage: pattern, backgroundSize: "10px 10px" }}
        >
          {/* Dynamic-island hint */}
          <span className="absolute left-1/2 top-[4px] h-[4px] w-[22%] -translate-x-1/2 rounded-full bg-[#000]" />
        </div>
      </div>
      {/* Side buttons */}
      <span className="absolute left-[-1px] top-[22%] h-[10%] w-[2px] rounded-l bg-[#1a1a1a]" />
      <span className="absolute right-[-1px] top-[28%] h-[16%] w-[2px] rounded-r bg-[#1a1a1a]" />
    </div>
  )
}
