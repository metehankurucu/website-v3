import { useState } from "react"

const metrics = [
  { label: "Pageviews", value: "24.8K", change: "+12%" },
  { label: "Events", value: "8.3K", change: "+7%" },
  { label: "Users", value: "1.2K", change: "+23%" },
]

const chartPath = "M0,80 C30,75 60,60 90,65 C120,70 150,30 180,35 C210,40 240,20 270,15 C300,10 330,25 360,18"
const chartFill = "M0,80 C30,75 60,60 90,65 C120,70 150,30 180,35 C210,40 240,20 270,15 C300,10 330,25 360,18 L360,100 L0,100 Z"

export function LitemetricsMockup() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="flex h-full min-h-[200px] flex-col bg-[var(--muted)] p-5 md:p-8">
      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3"
          >
            <p className="font-[var(--font-display)] text-[10px] text-[var(--muted-foreground)]">
              {m.label}
            </p>
            <p className="mt-1 font-[var(--font-display)] text-lg font-bold text-[var(--foreground)]">
              {m.value}
            </p>
            <p className="font-[var(--font-mono)] text-[10px] text-[#5a9a6a]">
              {m.change}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div
        className="mt-4 flex-1 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex items-center justify-between">
          <p className="font-[var(--font-display)] text-xs text-[var(--muted-foreground)]">
            Pageviews (30d)
          </p>
          <p className="font-[var(--font-mono)] text-[10px] text-[var(--muted-foreground)]">
            Apr 2026
          </p>
        </div>
        <svg viewBox="0 0 360 100" className="mt-3 w-full" preserveAspectRatio="none">
          <path
            d={chartFill}
            fill="var(--color-accent)"
            opacity={0.08}
          />
          <path
            d={chartPath}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {hovered !== null && (
            <circle cx="270" cy="15" r="4" fill="var(--color-accent)" />
          )}
        </svg>
      </div>
    </div>
  )
}
