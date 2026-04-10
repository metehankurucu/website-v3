import { writeFileSync } from "fs"

const SITE_URL = "https://metehan.dev"
const today = new Date().toISOString().split("T")[0]

const pages = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/work", changefreq: "weekly", priority: "0.8" },
  { loc: "/about", changefreq: "monthly", priority: "0.7" },
  { loc: "/contact", changefreq: "monthly", priority: "0.6" },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

writeFileSync("public/sitemap.xml", xml)
console.log(`Sitemap generated with ${pages.length} URLs`)
