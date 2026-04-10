import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "#/components/motion/fade-in";
import { ContactForm } from "#/components/contact/contact-form";
import { createPageHead } from "#/lib/seo";
import { SITE } from "#/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => {
    const head = createPageHead({
      path: "/contact",
      title: "Contact - Metehan Kurucu",
      description:
        "Get in touch for projects, collaborations, or opportunities.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Metehan Kurucu",
            url: SITE.url + "/contact",
            mainEntity: {
              "@type": "Person",
              name: "Metehan Kurucu",
              email: SITE.email,
            },
          }),
        },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container pt-20 pb-16 md:pt-28 md:pb-20">
      <FadeIn>
        <h1 className="display-xl">Get in touch</h1>
        <p className="display-xl mt-2 text-[var(--muted-foreground)]">
          Let's work together.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-20">
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  );
}
