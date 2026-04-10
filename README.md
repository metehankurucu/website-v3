# metehan.dev

Personal portfolio site built with TanStack Start, React 19, and Tailwind CSS v4.

## Stack

- **Framework:** TanStack Start (file-based routing, SSR, static prerendering)
- **UI:** React 19, Tailwind CSS v4, Motion (Framer Motion)
- **Fonts:** Inter, JetBrains Mono, Source Serif 4
- **Icons:** Lucide React
- **Analytics:** Litemetrics
- **Contact:** Formspark
- **Deploy:** Netlify (static)
- **Package Manager:** Bun

## Development

```sh
bun install
bun run dev
```

Runs on `http://localhost:3000`.

## Build

```sh
bun run build
```

Static output goes to `.output/public`. Pages are prerendered at build time.

## Project Structure

```
src/
  components/   # UI components (layout, home, work, about, contact, mockups)
  data/         # Static data (projects, experience, skills)
  routes/       # File-based routes (/, /work, /about, /contact)
  lib/          # Utilities, constants, SEO helpers
  hooks/        # Custom hooks (theme)
  styles.css    # Global styles
```

## Deploy

Configured for Netlify via `netlify.toml`. Push to main to deploy.