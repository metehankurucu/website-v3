import { motion } from "motion/react"

export function FibercheckMockup() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[var(--muted)] p-5 md:p-8">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] px-4 py-3">
          <p className="font-[var(--font-display)] text-[12px] font-bold text-[var(--foreground)]">FiberCheck</p>
          <p className="font-[var(--font-display)] text-[8px] text-[var(--muted-foreground)]">Analysis Result</p>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-[var(--font-display)] text-[12px] font-bold text-[var(--foreground)]">Cotton-Lycra Blend</p>
              <p className="font-[var(--font-mono)] text-[8px] text-[var(--muted-foreground)]">96% Cotton, 4% Lycra</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)]">
              <span className="font-[var(--font-mono)] text-[10px] font-bold text-[var(--color-accent)]">9.4</span>
            </div>
          </div>

          {/* Composition */}
          <div className="mt-4">
            <p className="font-[var(--font-display)] text-[9px] font-medium text-[var(--foreground)]">Composition</p>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--muted)]">
              <div className="h-full w-[96%] rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="mt-0.5 flex justify-between font-[var(--font-mono)] text-[7px] text-[var(--muted-foreground)]">
              <span>96% Natural</span><span>4% Synthetic</span>
            </div>
          </div>

          {/* Scores */}
          <div className="mt-4 space-y-2.5">
            {[
              { label: "Health Score", value: 92 },
              { label: "Sustainability", value: 78 },
              { label: "Toxicity Risk", value: 8 },
            ].map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between">
                  <span className="font-[var(--font-display)] text-[8px] text-[var(--muted-foreground)]">{s.label}</span>
                  <span className="font-[var(--font-mono)] text-[8px] font-medium text-[var(--foreground)]">{s.value}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--muted)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--foreground)]"
                    style={{ opacity: s.label === "Toxicity Risk" ? 0.3 : 0.7 }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
