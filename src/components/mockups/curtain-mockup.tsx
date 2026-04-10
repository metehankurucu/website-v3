import { useState } from "react"

const styles = [
  { name: "Modern", active: true },
  { name: "Classic", active: false },
  { name: "Bohemian", active: false },
  { name: "Minimal", active: false },
]

const patterns = [
  { name: "Solid", lines: 0 },
  { name: "Striped", lines: 3 },
  { name: "Geometric", lines: 6 },
  { name: "Floral", lines: 0 },
  { name: "Textured", lines: 4 },
  { name: "Damask", lines: 0 },
]

export function CurtainMockup() {
  const [selectedStyle, setSelectedStyle] = useState(0)
  const [selectedPattern, setSelectedPattern] = useState(0)

  return (
    <div className="flex h-full flex-col items-center justify-center bg-[var(--muted)] p-5 md:p-8">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] px-4 py-3">
          <p className="font-[var(--font-display)] text-[12px] font-bold text-[var(--foreground)]">Curtain AI</p>
          <p className="font-[var(--font-display)] text-[8px] text-[var(--muted-foreground)]">AI Home Designer</p>
        </div>

        <div className="px-4 py-4">
          {/* Style selector */}
          <p className="font-[var(--font-display)] text-[9px] font-medium text-[var(--foreground)]">Style</p>
          <div className="mt-2 flex gap-1.5">
            {styles.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setSelectedStyle(i)}
                className={`rounded-full px-2.5 py-1 font-[var(--font-display)] text-[8px] transition-colors ${
                  i === selectedStyle
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--border-strong)]"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Pattern grid */}
          <p className="mt-4 font-[var(--font-display)] text-[9px] font-medium text-[var(--foreground)]">Pattern</p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {patterns.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelectedPattern(i)}
                className={`flex flex-col items-center gap-1 rounded-lg p-2 transition-colors ${
                  i === selectedPattern
                    ? "border border-[var(--color-accent)] bg-[var(--muted)]"
                    : "border border-[var(--border)] hover:border-[var(--border-strong)]"
                }`}
              >
                <svg viewBox="0 0 32 24" className="w-full">
                  <rect x="1" y="1" width="30" height="22" rx="2" fill="none" stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"} strokeWidth="0.8" />
                  {p.lines > 0 && Array.from({ length: p.lines }).map((_, li) => (
                    <line
                      key={li}
                      x1={4 + li * (24 / p.lines)}
                      y1="3"
                      x2={4 + li * (24 / p.lines)}
                      y2="21"
                      stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"}
                      strokeWidth="0.4"
                      opacity="0.5"
                    />
                  ))}
                  {p.name === "Floral" && (
                    <>
                      <circle cx="10" cy="9" r="2" fill="none" stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"} strokeWidth="0.4" opacity="0.5" />
                      <circle cx="22" cy="15" r="2" fill="none" stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"} strokeWidth="0.4" opacity="0.5" />
                    </>
                  )}
                  {p.name === "Damask" && (
                    <>
                      <path d="M10,6 Q16,2 22,6 Q16,10 10,6" fill="none" stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"} strokeWidth="0.4" opacity="0.5" />
                      <path d="M10,16 Q16,12 22,16 Q16,20 10,16" fill="none" stroke={i === selectedPattern ? "var(--color-accent)" : "var(--border-strong)"} strokeWidth="0.4" opacity="0.5" />
                    </>
                  )}
                </svg>
                <span className={`font-[var(--font-display)] text-[7px] ${i === selectedPattern ? "text-[var(--color-accent)]" : "text-[var(--muted-foreground)]"}`}>
                  {p.name}
                </span>
              </button>
            ))}
          </div>

          {/* Room type */}
          <p className="mt-4 font-[var(--font-display)] text-[9px] font-medium text-[var(--foreground)]">Room</p>
          <div className="mt-2 flex gap-1.5">
            {["Living", "Bedroom", "Kitchen", "Office"].map((r, i) => (
              <span
                key={r}
                className={`rounded-full px-2 py-0.5 font-[var(--font-display)] text-[8px] ${
                  i === 0
                    ? "bg-[var(--muted)] font-medium text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                }`}
              >
                {r}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://curtainai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-lg bg-[var(--foreground)] py-2 text-center font-[var(--font-display)] text-[10px] font-medium text-[var(--background)] no-underline"
          >
            Generate Design
          </a>
        </div>
      </div>
    </div>
  )
}
