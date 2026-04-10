import { Link } from "@tanstack/react-router"
import { FadeIn } from "#/components/motion/fade-in"
import { Button } from "#/components/ui/button"
import { HeroMockup } from "#/components/mockups"
import { Github, Linkedin } from "lucide-react"
import { SOCIAL } from "#/lib/constants"

export function Hero() {
  return (
    <section className="container pt-20 pb-16 md:pt-28 md:pb-20">
      <FadeIn delay={0.1}>
        <h1 className="display-xl">Building products that ship.</h1>
        <p className="display-xl mt-2 text-[var(--muted-foreground)]">
          Product-focused software engineer.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/work" className="no-underline">
            <Button variant="primary" className="w-full sm:w-auto">View My Work</Button>
          </Link>
          <Link to="/contact" className="no-underline">
            <Button variant="secondary" className="w-full sm:w-auto gap-2 bg-white dark:bg-[var(--muted)]">
              Get in Touch
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Hero visual */}
      <FadeIn delay={0.3}>
        <div className="mt-14">
          <HeroMockup />
        </div>
      </FadeIn>
    </section>
  )
}
