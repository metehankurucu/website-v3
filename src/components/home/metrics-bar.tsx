import { FadeIn } from "#/components/motion/fade-in"

const metrics = [
  { value: "2M+", label: "Downloads" },
  { value: "10K", label: "Monthly Active Users" },
  { value: "30+", label: "Shipped Apps" },
]

export function MetricsBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-3)]">
      <div className="container py-10">
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-[var(--font-display)] text-3xl font-bold tracking-tight tabular-nums text-[var(--foreground)] md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 font-[var(--font-display)] text-sm text-[var(--muted-foreground)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
