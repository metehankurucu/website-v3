function FlastLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 532 555"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M69.1982 0H530.58C531.429 0 531.892 0.991701 531.346 1.64248L440.797 109.644C440.607 109.87 440.327 110.001 440.031 110.001H168.391C167.945 110.001 167.553 110.297 167.43 110.726L150.192 171.039C150.01 171.678 150.49 172.314 151.154 172.314H384.875C385.733 172.314 386.193 173.323 385.63 173.97L253.035 326.44C252.472 327.087 252.931 328.096 253.789 328.096H339.657C340.606 328.096 341.021 329.295 340.274 329.882L54.1211 554.738C53.3207 555.367 52.2019 554.537 52.5715 553.588L159.474 279.227C159.729 278.572 159.246 277.864 158.542 277.864H1.00046C0.350975 277.864 -0.126185 277.255 0.0296859 276.624L68.2274 0.76001C68.3377 0.313603 68.7383 0 69.1982 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FlastMockup() {
  return (
    <div className="flex h-full flex-col bg-[var(--muted)] p-5 md:p-8">
      {/* Nav */}
      <div className="flex items-center justify-between rounded-t-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <FlastLogo className="h-3 w-3 text-[var(--foreground)]" />
          <span className="font-[var(--font-display)] text-[11px] font-bold text-[var(--foreground)]">
            Flast
          </span>
          <span className="font-[var(--font-display)] text-[9px] text-[var(--muted-foreground)]">
            AI Companion
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "Playground", href: "https://flast.ai/playground" },
            { label: "Product", href: "https://flast.ai/product" },
            { label: "Pricing", href: "https://flast.ai/pricing" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-[var(--font-display)] text-[9px] text-[var(--muted-foreground)] no-underline hover:text-[var(--foreground)] md:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://flast.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--foreground)] px-2.5 py-0.5 font-[var(--font-display)] text-[8px] font-medium text-[var(--background)] no-underline"
          >
            Try Flast
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-1 flex-col items-center justify-center rounded-b-lg border border-t-0 border-[var(--border)] bg-[var(--card)] px-4 py-8 text-center">
        <FlastLogo className="h-7 w-7 text-[var(--foreground)]" />
        <h2 className="mt-4 font-[var(--font-display)] text-[18px] font-bold leading-tight text-[var(--foreground)] md:text-[22px]">
          Your AI companion
          <br />
          that makes you better
        </h2>
        <p className="mx-auto mt-3 max-w-[280px] text-[9px] leading-relaxed text-[var(--muted-foreground)]">
          Get honest feedback, not validation. Flast guides you toward your
          goals.
        </p>
        <a
          href="https://flast.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-[var(--foreground)] px-4 py-1.5 font-[var(--font-display)] text-[9px] font-medium text-[var(--background)] no-underline"
        >
          Start Free
        </a>
      </div>
    </div>
  );
}
