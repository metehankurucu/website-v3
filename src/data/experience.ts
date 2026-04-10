export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  type: "work" | "education";
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Promake.ai",
    companyUrl: "https://promake.ai",
    period: "Oct 2025 - Present",
    description:
      "Frontend development for an AI company builder platform. Working on a high-quality AI interface and modern UX patterns.",
    highlights: ["React", "Tailwind", "Vite", "Bun"],
    type: "work",
  },
  {
    role: "Founder",
    company: "Codixus",
    companyUrl: "https://codixus.com",
    period: "Dec 2024 - Present",
    description:
      "Building and operating consumer AI applications. Full ownership: product, design, growth, infrastructure, analytics, and monetization.",
    highlights: [
      "AI-powered consumer apps",
      "LLMs & Agentic workflows",
      "AWS, Cloudflare, Railway",
    ],
    type: "work",
  },
  {
    role: "Founding Software Engineer",
    company: "Cizgi Studio",
    companyUrl: "https://cizgi.studio",
    period: "Oct 2022 - Jun 2025",
    description:
      "Full-stack development across mobile, web, backend, and infrastructure for a social storytelling platform.",
    highlights: ["2M+ downloads", "150K MAU", "React Native, Node.js, MongoDB"],
    type: "work",
  },
  {
    role: "Software Developer",
    company: "Freelance",
    period: "Jan 2021 - Jan 2023",
    description:
      "Shipped 10+ mobile and web apps. End-to-end ownership from scoping to release.",
    highlights: [
      "10+ shipped apps",
      "React Native, Next.js",
      "Full project lifecycle",
    ],
    type: "work",
  },
  {
    role: "Software Development Intern",
    company: "Jotform",
    companyUrl: "https://jotform.com",
    period: "Aug 2022 - Sep 2022",
    description: "Built a web application for reviewing risky forms.",
    highlights: ["React", "PHP", "MySQL"],
    type: "work",
  },
  {
    role: "Software Development Intern",
    company: "P.I.Works",
    companyUrl: "https://piworks.net",
    period: "Jul 2021 - Oct 2021",
    description: "Built a KPI Editor tool with Angular.",
    highlights: ["Angular", ".NET", "Docker"],
    type: "work",
  },
];

export const education: Experience[] = [
  {
    role: "Software Engineering",
    company: "Uskudar University",
    period: "2018 - 2024",
    description: "Bachelor's degree in Software Engineering, Istanbul.",
    highlights: [],
    type: "education",
  },
  {
    role: "High School",
    company: "Ordu Fen Lisesi",
    period: "2013 - 2017",
    description: "Science high school, Ordu.",
    highlights: [],
    type: "education",
  },
];
