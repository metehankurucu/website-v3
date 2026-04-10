import { SITE } from "./constants";

export function createPageHead(opts: {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}) {
  const url = SITE.url + opts.path;
  const image = opts.ogImage || SITE.url + "/images/og-default.png";

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
