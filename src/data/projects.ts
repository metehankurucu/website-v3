export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  categories: ("featured" | "apps" | "open-source" | "freelance")[];
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    npm?: string;
  };
  metrics?: string;
  image?: string;
  parentBrand?: string;
}

// Codixus products (shown inside Codixus card in Featured, also in Apps)
export const codixusProducts: Project[] = [
  {
    slug: "flast",
    title: "Flast",
    subtitle: "AI Companion",
    description:
      "Your AI companion. Search the web, create images, videos, documents. Built-in todo, memory, and reusable prompts.",
    categories: ["featured", "apps"],
    technologies: [],
    links: { live: "https://flast.ai" },
    parentBrand: "codixus",
  },
  {
    slug: "curtain-ai",
    title: "Curtain AI",
    subtitle: "AI Curtain Designer",
    description:
      "Instant curtain design with AI. Upload a photo, visualize new curtains in seconds.",
    categories: ["apps"],
    technologies: [],
    links: { live: "https://curtainai.app" },
    parentBrand: "codixus",
  },
  {
    slug: "impostor-who",
    title: "Impostor Who?",
    subtitle: "Secret Word Party Game",
    description:
      "Secret word party game. Catch impostors or play solo challenges. 20+ languages supported.",
    categories: ["apps"],
    technologies: [],
    links: { live: "https://impostorwho.com" },
    parentBrand: "codixus",
  },
  {
    slug: "fibercheck",
    title: "FiberCheck",
    subtitle: "AI Fabric Analyzer",
    description:
      "Scan labels or fabrics with AI for health scores, toxic materials, and environmental impact.",
    categories: ["apps"],
    technologies: [],
    links: { live: "https://fibercheck.app" },
    parentBrand: "codixus",
  },
];

// Codixus brand entry (Featured)
export const codixusBrand: Project = {
  slug: "codixus",
  title: "Codixus",
  description:
    "Building and operating consumer AI apps. Full ownership from product/design to growth and monetization.",
  categories: ["featured"],
  technologies: [],
  links: { live: "https://codixus.com" },
  metrics: "Founder & Full Ownership",
};

// Standalone projects
export const projects: Project[] = [
  // Apps (non-Codixus)
  {
    slug: "dovizmix",
    title: "Dovizmix",
    subtitle: "Currency Exchange Tracker",
    description:
      "Mobile app providing real-time exchange rates and currency tracking for financial markets.",
    categories: ["freelance"],
    technologies: [],
    links: {},
  },
  {
    slug: "panoyabak",
    title: "Panoyabak",
    subtitle: "Digital Board Platform",
    description:
      "Full-stack digital board platform with mobile app, web dashboard, and backend services.",
    categories: ["freelance"],
    technologies: [],
    links: {},
  },
  {
    slug: "oral-b-pro-event",
    title: "Oral-B Pro Event",
    subtitle: "Product Launch Website",
    description: "Event website for Oral-B product launch campaign.",
    categories: ["freelance"],
    technologies: [],
    links: {},
  },
  {
    slug: "student-coaching",
    title: "Student Coaching",
    subtitle: "Mentoring Platform",
    description: "Web application for a student coaching and mentoring platform.",
    categories: ["freelance"],
    technologies: [],
    links: {},
  },
  // Open Source
  {
    slug: "litemetrics",
    title: "Litemetrics",
    subtitle: "Open Source Analytics SDK",
    description:
      "Open-source analytics SDK. White-label, themeable, multi-tenant analytics for apps and websites.",
    categories: ["featured", "open-source"],
    technologies: ["TypeScript", "React", "Node.js"],
    links: {
      live: "https://litemetrics.dev",
      github: "https://github.com/metehankurucu/litemetrics",
    },
  },
  {
    slug: "revcat",
    title: "revcat",
    subtitle: "RevenueCat CLI for AI Agents",
    description:
      "RevenueCat CLI for AI agents. Subscription analytics, MRR tracking, customer management from the command line.",
    categories: ["open-source"],
    technologies: ["TypeScript", "Node.js", "CLI"],
    links: {
      github: "https://github.com/metehankurucu/revcat",
    },
  },
  {
    slug: "react-native-upgrade-helper",
    title: "RN Upgrade Helper",
    subtitle: "React Native Upgrade CLI",
    description: "Experimental CLI tool to upgrade React Native apps faster.",
    categories: ["open-source"],
    technologies: ["TypeScript", "CLI"],
    links: {
      github: "https://github.com/metehankurucu/react-native-upgrade-helper",
    },
  },
  {
    slug: "firebase-chat",
    title: "Firebase Chat",
    subtitle: "Messaging Package",
    description: "Package for one-to-one messaging with Firebase.",
    categories: ["open-source"],
    technologies: ["TypeScript", "Node.js", "Firebase"],
    links: {
      npm: "https://www.npmjs.com/package/@metehankurucu/firebase-chat",
      github: "https://github.com/metehankurucu/firebase-chat",
    },
  },
  {
    slug: "wetransfer-cli",
    title: "WeTransfer CLI",
    subtitle: "File Upload Automation",
    description: "CLI tool to automate file uploads to WeTransfer.",
    categories: ["open-source"],
    technologies: ["Node.js", "CLI"],
    links: {
      npm: "https://www.npmjs.com/package/wetransfer-cli",
      github: "https://github.com/metehankurucu/wetransfer-cli",
    },
  },
  {
    slug: "heroku-set-env",
    title: "heroku-set-env",
    subtitle: "Config Vars CLI",
    description:
      "Set all config vars from .env in a Heroku project with one command.",
    categories: ["open-source"],
    technologies: ["Node.js", "CLI"],
    links: {
      npm: "https://www.npmjs.com/package/heroku-set-env",
      github: "https://github.com/metehankurucu/heroku-set-env",
    },
  },
  {
    slug: "rn-use-input-focus",
    title: "rn-use-input-focus",
    subtitle: "React Native Focus Hook",
    description: "React Native hook for easier input focus management.",
    categories: ["open-source"],
    technologies: ["React Native", "TypeScript"],
    links: {
      npm: "https://www.npmjs.com/package/rn-use-input-focus",
      github: "https://github.com/metehankurucu/rn-use-input-focus",
    },
  },
  {
    slug: "rn-light-placeholder",
    title: "RN Light Placeholder",
    subtitle: "React Native Placeholder Component",
    description:
      "Lightweight and customizable placeholder component for React Native.",
    categories: ["open-source"],
    technologies: ["React Native", "TypeScript"],
    links: {
      npm: "https://www.npmjs.com/package/react-native-light-placeholder",
      github: "https://github.com/metehankurucu/react-native-light-placeholder",
    },
  },
];

// Helpers
export function getProjectsByCategory(
  category: "featured" | "apps" | "open-source" | "freelance"
) {
  const result = projects.filter((p) => p.categories.includes(category));
  if (category === "apps") {
    return [...codixusProducts, ...result];
  }
  if (category === "featured") {
    const featuredProducts = codixusProducts.filter((p) =>
      p.categories.includes("featured")
    );
    return [...featuredProducts, ...result];
  }
  return result;
}
