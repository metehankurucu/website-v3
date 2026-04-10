import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "#/components/motion/fade-in";
import { ProjectCard } from "#/components/work/project-card";
import {
  codixusBrand,
  codixusProducts,
  getProjectsByCategory,
} from "#/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "#/lib/utils";
import { createPageHead } from "#/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    createPageHead({
      path: "/work",
      title: "Work - Metehan Kurucu",
      description: "Products, apps, and open source tools by Metehan Kurucu.",
    }),
  component: WorkPage,
});

const tabs = [
  { id: "featured" as const, label: "Featured" },
  { id: "apps" as const, label: "Apps" },
  { id: "open-source" as const, label: "Open Source" },
  { id: "freelance" as const, label: "Freelance" },
];

function WorkPage() {
  const [activeTab, setActiveTab] = useState<
    "featured" | "apps" | "open-source" | "freelance"
  >("featured");

  const filteredProjects = getProjectsByCategory(activeTab);

  return (
    <div className="container pt-20 pb-16 md:pt-28 md:pb-20">
      <FadeIn>
        <h1 className="display-xl">Selected Work</h1>
        <p className="display-xl mt-2 text-[var(--muted-foreground)]">
          Products, apps, and open source tools.
        </p>
      </FadeIn>

      {/* Category tabs */}
      <FadeIn delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-4 py-1.5 font-[var(--font-display)] text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "border border-[var(--border-strong)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Content */}
      <div className="mt-10">
        {activeTab === "featured" ? (
          <FeaturedView />
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturedView() {
  const featuredStandalone = getProjectsByCategory("featured");

  return (
    <div className="space-y-5">
      {/* Codixus brand card with products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]"
      >
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between">
            <span className="kicker">Brand</span>
            <span className="font-[var(--font-mono)] text-xs text-[var(--muted-foreground)]">
              {codixusBrand.metrics}
            </span>
          </div>

          <h2 className="display-md mt-4">
            <a
              href={codixusBrand.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 no-underline transition-colors hover:text-[var(--color-accent)]"
            >
              {codixusBrand.title}
              <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover/link:opacity-100" />
            </a>
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)]">
            {codixusBrand.description}
          </p>

          {/* Products grid */}
          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <p className="font-[var(--font-display)] text-xs font-medium text-[var(--muted-foreground)]">
              Products
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {codixusProducts.map((product, i) => (
                <motion.a
                  key={product.slug}
                  href={product.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  className="group/product rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 no-underline transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-[var(--font-display)] text-sm font-bold text-[var(--foreground)]">
                      {product.title}
                    </h4>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--muted-foreground)] opacity-0 transition-opacity group-hover/product:opacity-100" />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted-foreground)]">
                    {product.description}
                  </p>
                </motion.a>
              ))}
            </div>
            <div className="mt-5">
              <a
                href="https://codixus.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="group/all inline-flex items-center gap-1.5 font-[var(--font-display)] text-sm font-medium text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--foreground)]"
              >
                View all products
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/all:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other featured projects (Litemetrics, revcat) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featuredStandalone.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
