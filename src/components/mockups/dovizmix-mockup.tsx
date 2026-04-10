import { useState } from "react"

const rates = [
  { pair: "USD/TRY", rate: "38.42", change: "+0.32%", up: true },
  { pair: "EUR/TRY", rate: "41.18", change: "+0.15%", up: true },
  { pair: "GBP/TRY", rate: "48.73", change: "-0.08%", up: false },
  { pair: "CHF/TRY", rate: "44.56", change: "+0.21%", up: true },
  { pair: "JPY/TRY", rate: "0.254", change: "-0.05%", up: false },
]

export function DovizmixMockup() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="flex h-full flex-col bg-[var(--muted)] p-5 md:p-8">
      <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] px-4 py-3">
          <p className="font-[var(--font-display)] text-[11px] font-bold text-[var(--foreground)]">Dovizmix</p>
          <div className="mt-1.5 flex gap-4">
            {["Döviz", "Kripto", "Altın", "Borsa"].map((t, i) => (
              <span key={t} className={`font-[var(--font-display)] text-[9px] ${i === 0 ? "font-medium text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}>{t}</span>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="border-b border-[var(--border)] px-4 py-3">
          <svg viewBox="0 0 300 50" className="w-full">
            <path d="M0,35 C30,32 60,28 90,25 C120,22 150,28 180,20 C210,15 240,18 270,12 C290,9 300,10 300,10" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M0,35 C30,32 60,28 90,25 C120,22 150,28 180,20 C210,15 240,18 270,12 C290,9 300,10 300,10 L300,50 L0,50 Z" fill="var(--color-accent)" opacity="0.06" />
          </svg>
        </div>

        {/* Rates */}
        <div>
          {rates.map((r, i) => (
            <div
              key={r.pair}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5 transition-colors last:border-b-0 ${hovered === i ? "bg-[var(--muted)]" : ""}`}
            >
              <span className="font-[var(--font-display)] text-[11px] font-medium text-[var(--foreground)]">{r.pair}</span>
              <div className="flex items-center gap-2">
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--foreground)]">{r.rate}</span>
                <span className={`font-[var(--font-mono)] text-[9px] ${r.up ? "text-[var(--color-accent)]" : "text-[var(--muted-foreground)]"}`}>{r.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
