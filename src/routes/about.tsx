import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "#/components/motion/fade-in";
import { Timeline } from "#/components/about/timeline";
import { SkillsGrid } from "#/components/about/skills-grid";
import { motion } from "motion/react";
import { education } from "#/data/experience";
import { createPageHead } from "#/lib/seo";
import { SITE, SOCIAL } from "#/lib/constants";

function EducationList() {
  return (
    <div className="space-y-0">
      {education.map((item, index) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="grid grid-cols-1 gap-2 border-t border-[var(--border)] py-8 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-8 lg:grid-cols-[240px_1fr]"
        >
          <div className="font-[var(--font-mono)] text-sm text-[var(--muted-foreground)]">
            {item.period}
          </div>
          <div>
            <h3 className="font-[var(--font-display)] text-lg font-bold">
              {item.company}
            </h3>
            <p className="mt-1 text-base text-[var(--muted-foreground)]">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/about")({
  head: () => {
    const head = createPageHead({
      path: "/about",
      title: "About - Metehan Kurucu",
      description:
        "Software engineer with 2M+ downloads and 30+ shipped apps. Founder of Codixus, previously founding engineer at Cizgi Studio.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Metehan Kurucu",
              jobTitle: "Product-focused Software Engineer",
              url: SITE.url,
              email: SITE.email,
              sameAs: [SOCIAL.github, SOCIAL.linkedin],
              worksFor: {
                "@type": "Organization",
                name: "Codixus",
              },
            },
          }),
        },
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Bio */}
      <section className="container pt-20 pb-16 md:pt-28 md:pb-20">
        <FadeIn>
          <h1 className="display-xl">About me</h1>
          <p className="display-xl mt-2 text-[var(--muted-foreground)]">
            Product-focused engineer from Istanbul.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 text-lg leading-relaxed text-[var(--muted-foreground)]">
            I build things that ship. As founding engineer at Cizgi Studio, I
            helped build a social platform that reached 2M+ downloads. Now I'm
            building consumer AI apps at Codixus. I care about clean code, great
            UX, and solving real problems.
          </p>
        </FadeIn>
      </section>

      {/* Experience */}
      <section>
        <div className="container section-spacing">
          <FadeIn>
            <h2 className="display-lg">Experience</h2>
          </FadeIn>
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="container section-spacing">
          <FadeIn>
            <h2 className="display-lg">Education</h2>
          </FadeIn>
          <div className="mt-10">
            <EducationList />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="container section-spacing">
          <FadeIn>
            <h2 className="display-lg">Skills & Tools</h2>
          </FadeIn>
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </div>
      </section>
    </>
  );
}
