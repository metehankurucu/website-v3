export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "PHP"],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Expo",
      "Tailwind",
      "TanStack Start",
      "React Router",
    ],
  },
  {
    label: "Tooling",
    skills: ["Bun", "Vite", "Turborepo", "ESLint", "Prettier"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
  },
  {
    label: "AI & LLMs",
    skills: [
      "LLMs",
      "Agentic Workflows",
      "Vercel AI SDK",
      "Prompt Engineering",
      "RAG",
      "MCP",
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      "AWS",
      "DigitalOcean",
      "Cloudflare",
      "Railway",
      "Docker",
      "Redis",
      "MongoDB",
      "RabbitMQ",
    ],
  },
  {
    label: "Platforms",
    skills: [
      "Figma",
      "Claude Code",
      "Cursor",
      "Codex",
      "Stitch",
      "OpenRouter",
      "Fal",
      "Resend",
      "RevenueCat",
      "Lemonsqueezy",
      "Stripe",
      "Notion",
    ],
  },
];
