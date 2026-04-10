import { useState, useEffect } from "react"
import { Link, useLocation } from "@tanstack/react-router"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "#/components/theme/theme-toggle"
import { NAV_LINKS } from "#/lib/constants"
import { cn } from "#/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-[var(--font-display)] text-base font-bold tracking-tight text-[var(--foreground)] no-underline"
        >
          MK
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-[var(--font-display)] text-sm no-underline transition-colors",
                location.pathname === link.href
                  ? "font-medium text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="rounded-full bg-[var(--foreground)] px-4 py-1.5 font-[var(--font-display)] text-xs font-medium text-[var(--background)] no-underline transition-opacity hover:opacity-85"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 font-[var(--font-display)] text-sm no-underline transition-colors",
                    location.pathname === link.href
                      ? "font-medium text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)]",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-[var(--border)] px-3 pt-3">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
