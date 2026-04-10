import { Github, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import type { Project } from "#/data/projects"
import { projectMockups, projectImages } from "#/components/mockups"

interface ProjectCardProps {
  project: Project
  index: number
}

function getCategoryLabel(project: Project): string {
  if (project.parentBrand) return "App"
  if (project.categories.includes("featured")) return "Featured"
  if (project.categories.includes("apps")) return "App"
  if (project.categories.includes("open-source")) return "Open Source"
  if (project.categories.includes("freelance")) return "Freelance"
  return "Project"
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryLink = project.links.live || project.links.github
  const hasLinks =
    project.links.github || project.links.npm || project.links.live
  const Mockup = projectMockups[project.slug]
  const imageSrc = projectImages[project.slug]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]"
    >
      {/* Visual: mockup component OR real image */}
      {Mockup ? (
        <div className="h-[240px] shrink-0 overflow-hidden border-b border-[var(--border)] md:h-[280px]">
          <Mockup />
        </div>
      ) : imageSrc ? (
        <a
          href={primaryLink || undefined}
          target={primaryLink ? "_blank" : undefined}
          rel={primaryLink ? "noopener noreferrer" : undefined}
          className="block h-[240px] shrink-0 overflow-hidden bg-black md:h-[280px]"
        >
          <img
            src={imageSrc}
            alt={project.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </a>
      ) : null}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="font-[var(--font-display)] text-[11px] text-[var(--muted-foreground)]">
            {project.subtitle || getCategoryLabel(project)}
          </span>
          {hasLinks && (
            <div className="flex items-center gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.links.npm && (
                <a
                  href={project.links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-mono)] text-[11px] text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--foreground)]"
                >
                  npm
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  aria-label="Visit site"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <h3 className="display-sm mt-4">
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 no-underline transition-colors hover:text-[var(--color-accent)]"
            >
              {project.title}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover/link:opacity-100" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {project.parentBrand && (
          <p className="mt-1 font-[var(--font-display)] text-xs text-[var(--muted-foreground)]">
            by Codixus
          </p>
        )}

        <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--muted-foreground)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border-strong)] px-2.5 py-0.5 font-[var(--font-mono)] text-[11px] text-[var(--muted-foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
