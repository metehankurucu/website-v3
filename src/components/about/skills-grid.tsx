import { motion } from "motion/react"
import { skillCategories } from "#/data/skills"

export function SkillsGrid() {
  return (
    <div className="space-y-0">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="grid grid-cols-1 gap-2 border-t border-[var(--border)] py-5 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-8 lg:grid-cols-[240px_1fr]"
        >
          <span className="font-[var(--font-display)] text-sm font-medium text-[var(--muted-foreground)]">
            {category.label}
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="font-[var(--font-display)] text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
