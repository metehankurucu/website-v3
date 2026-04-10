import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "#/components/motion/fade-in";
import { motion } from "motion/react";
import { codixusBrand, codixusProducts } from "#/data/projects";
import type { Project } from "#/data/projects";
import { projectMockups, projectImages } from "#/components/mockups";

const flast = codixusProducts.find((p) => p.slug === "flast")!;
const featured = [codixusBrand, flast];

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const primaryLink = project.links.live || project.links.github;
  const Mockup = projectMockups[project.slug];
  const imageSrc = projectImages[project.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]"
    >
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

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="kicker">
            {project.slug === "codixus"
              ? "Brand"
              : project.parentBrand
                ? "App"
                : "Open Source"}
          </span>
          {project.metrics && (
            <span className="font-[var(--font-mono)] text-xs text-[var(--muted-foreground)]">
              {project.metrics}
            </span>
          )}
        </div>

        <h3 className="display-md mt-4">
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 no-underline transition-colors hover:text-[var(--color-accent)]"
            >
              {project.title}
              <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover/link:opacity-100" />
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--muted-foreground)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border-strong)] px-2.5 py-0.5 font-[var(--font-mono)] text-[11px] text-[var(--muted-foreground)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-full border border-[var(--border-strong)] px-2.5 py-0.5 font-[var(--font-mono)] text-[11px] text-[var(--muted-foreground)]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section>
      <div className="container section-spacing">
        <FadeIn>
          <div className="flex items-end justify-between">
            <h2 className="display-lg">What I've Built</h2>
            <Link
              to="/work"
              className="hidden items-center gap-2 font-[var(--font-display)] text-sm font-medium text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--foreground)] md:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <FadeIn className="mt-10 text-center md:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-[var(--font-display)] text-sm font-medium text-[var(--muted-foreground)] no-underline"
          >
            View all work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        {/* About & Contact */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <FadeIn>
            <Link
              to="/about"
              className="group flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 no-underline transition-colors hover:border-[var(--border-strong)] md:p-8"
            >
              <div>
                <p className="kicker">About</p>
                <p className="mt-2 display-sm">
                  Background, experience, and skills
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              to="/contact"
              className="group flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 no-underline transition-colors hover:border-[var(--border-strong)] md:p-8"
            >
              <div>
                <p className="kicker">Contact</p>
                <p className="mt-2 display-sm">
                  Get in touch, let's work together
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
