import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { experience } from "#/data/experience"

export function Timeline() {
  return (
    <div className="space-y-0">
      {experience.map((item, index) => (
        <motion.div
          key={`${item.company}-${item.period}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 border-t border-[var(--border)] py-8 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-8 lg:grid-cols-[240px_1fr]"
        >
          {/* Left: date */}
          <div className="font-[var(--font-mono)] text-sm text-[var(--muted-foreground)]">
            {item.period}
          </div>

          {/* Right: content */}
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-[var(--font-display)] text-lg font-bold">
                {item.role}
              </h3>
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/co inline-flex items-center gap-0.5 font-[var(--font-display)] text-base text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--foreground)]"
                >
                  {item.company}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/co:opacity-100" />
                </a>
              ) : (
                <span className="font-[var(--font-display)] text-base text-[var(--muted-foreground)]">
                  {item.company}
                </span>
              )}
            </div>

            <p className="mt-2 text-base text-[var(--muted-foreground)]">
              {item.description}
            </p>

            {item.highlights.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-[var(--border-strong)] px-2.5 py-0.5 font-[var(--font-mono)] text-[11px] text-[var(--muted-foreground)]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
