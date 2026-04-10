import { Link } from "@tanstack/react-router"
import { FadeIn } from "#/components/motion/fade-in"
import { Button } from "#/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="container pb-20 md:pb-28">
      <FadeIn>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-8 py-14 text-center md:px-16 md:py-16">
          <p className="kicker">Ready to start?</p>
          <h2 className="mx-auto mt-4 max-w-3xl display-xl">
            Let's build something together.
          </h2>
          <div className="mt-8">
            <Link to="/contact" className="no-underline">
              <Button variant="primary" className="gap-2">
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
