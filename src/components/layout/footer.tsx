import { Link } from "@tanstack/react-router"
import { SITE, SOCIAL } from "#/lib/constants"

const footerLinks = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/", internal: true },
      { label: "Work", href: "/work", internal: true },
      { label: "About", href: "/about", internal: true },
      { label: "Contact", href: "/contact", internal: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: SOCIAL.github },
      { label: "LinkedIn", href: SOCIAL.linkedin },
      { label: "Email", href: `mailto:${SITE.email}` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--surface-3)]">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <p className="font-[var(--font-display)] text-base font-bold">
              {SITE.name}
            </p>
            <p className="mt-1 font-[var(--font-display)] text-sm text-[var(--muted-foreground)]">
              {SITE.title}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-[var(--font-display)] text-xs font-medium text-[var(--muted-foreground)]">
                {group.title}
              </p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="font-[var(--font-display)] text-sm text-[var(--foreground)] no-underline transition-colors hover:text-[var(--muted-foreground)]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="font-[var(--font-display)] text-sm text-[var(--foreground)] no-underline transition-colors hover:text-[var(--muted-foreground)]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-6">
          <p className="font-[var(--font-display)] text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
