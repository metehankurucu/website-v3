import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "#/components/home/hero";
import { FeaturedWork } from "#/components/home/featured-work";
import { CTASection } from "#/components/home/cta-section";
import { createPageHead } from "#/lib/seo";
import { SITE } from "#/lib/constants";

export const Route = createFileRoute("/")({
  head: () => {
    const head = createPageHead({
      path: "/",
      title: "Metehan Kurucu - Product-focused Software Engineer",
      description:
        "Founder of Codixus. Product-focused software engineer with 2M+ downloads and 30+ shipped apps.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.url,
          }),
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <CTASection />
    </>
  );
}
