export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "lunex-tech",
    name: "LUNEX TECH",
    tagline: "Design-led web studio",
    description:
      "Fast, modern, fully-owned websites for startups, creators and businesses — transparent pricing, MSME registered, with design, development, and digital marketing under one roof.",
    tags: ["Next.js", "Design", "Agency", "MSME"],
    link: "https://lunextech.vercel.app",
    featured: true,
  },
  {
    slug: "priorbyte",
    name: "Priorbyte",
    tagline: "AI ed-tech · cognitive twin",
    description:
      "Builds a \"cognitive twin\" of each student — modeling how they learn, predicting the mistakes they're about to make, and delivering micro-content to prevent them before they happen. Includes a merged campus gig-marketplace module.",
    tags: ["Next.js 14", "Tailwind", "Supabase", "Claude", "Voyage AI"],
    featured: true,
  },
  {
    slug: "duonest",
    name: "DuoNest",
    tagline: "Private couple app",
    description:
      "Private chat, video calls, and a shared Reels feed built for couples — realtime messaging, presence indicators, and voice/video calling, shipped as a working, installed APK.",
    tags: ["React Native", "Expo", "Supabase", "Agora"],
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    slug: "hithozha",
    name: "hithozha.com",
    tagline: "Tamil Nadu freelance marketplace",
    description:
      "Freelance marketplace for Tamil Nadu, built with a custom Thozha Red / Night Blue brand identity and a Remotion logo reveal animation.",
    tags: ["Next.js 14", "Supabase", "Clerk", "Razorpay", "FingerprintJS"],
    link: "https://hithozha.com",
  },
  {
    slug: "hey-lunex",
    name: "Lunex Voice Assistant",
    tagline: "\"Hey Lunex\" — wake-word AI for Windows",
    description:
      "Wake-word AI assistant for Windows 11 with Claude-Code-style agentic control: answers questions, writes and edits code, executes multi-step tasks, and opens apps — all by voice.",
    tags: ["Windows 11", "Voice AI", "Agentic"],
  },
  {
    slug: "machi",
    name: "Machi (Lunex Mobile)",
    tagline: "\"Hey Machi\" — always-listening Android assistant",
    description:
      "Native Android voice assistant, always listening for the wake word \"Hey Machi,\" with AccessibilityService-driven phone control.",
    tags: ["Kotlin", "Jetpack Compose", "openWakeWord", "Gemini API"],
  },
  {
    slug: "lunex-life",
    name: "Lunex Life",
    tagline: "Local-first productivity + AI",
    description:
      "Local-first personal productivity companion with an on-device AI assistant, shipping as an Android APK.",
    tags: ["React", "Vite", "Tailwind", "Dexie.js", "Capacitor", "Gemini API"],
  },
  {
    slug: "pupilnetwork",
    name: "PupilNetwork",
    tagline: "Collaborative study platform",
    description:
      "Collaborative study platform I co-founded, with live study rooms, peer Q&A, AI tutoring powered by Gemini 2.0, and a gamified leaderboard.",
    tags: ["Next.js", "Supabase", "Groq"],
    link: "https://pupilnetwork.app",
  },
  {
    slug: "smartbuyx",
    name: "SmartBuyX",
    tagline: "Revenue-share collaboration",
    description:
      "Revenue-share partnership with founder Ragavan Azhagar, backed by a full legal package: NDA, revenue sharing agreement, IP license, and SLA.",
    tags: ["Partnership", "Revenue Share"],
  },
  {
    slug: "emo",
    name: "EMO",
    tagline: "Desktop companion robot",
    description:
      "Desktop companion robot built on ESP32 with servos, an OLED display, and RGB lighting — a hardware showpiece for LUNEX TECH Reels content.",
    tags: ["ESP32", "Embedded", "Hardware"],
  },
  {
    slug: "deedis-pickles",
    name: "Deedis Pickles",
    tagline: "E-commerce for handcrafted pickles",
    description:
      "E-commerce storefront for handcrafted South Indian pickles — 14+ products and a full cart system.",
    tags: ["Next.js", "React", "E-commerce"],
    link: "https://deedispickel.vercel.app",
  },
  {
    slug: "star-designs",
    name: "Star Designs",
    tagline: "Custom fashion boutique",
    description: "Premium storefront for a custom fashion boutique brand.",
    tags: ["Next.js", "React", "Fashion"],
    link: "https://stardesigns.vercel.app",
  },
  {
    slug: "f-gex-groups",
    name: "F-Gex Groups",
    tagline: "Corporate tech & finance",
    description: "Corporate website for a tech and finance ecosystem group.",
    tags: ["React", "Vercel"],
    link: "https://f-gexgroups.vercel.app",
  },
  {
    slug: "oddcraft-studio",
    name: "OddCraft Studio",
    tagline: "Animation-first agency site",
    description:
      "Portfolio site for a small creative agency, built around rich animation and interaction design rather than static layouts.",
    tags: ["HTML", "CSS", "Animation"],
    link: "https://oddcraftstudio.netlify.app",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Web",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "Kotlin", "Jetpack Compose", "Capacitor"],
  },
  {
    label: "Backend & Data",
    skills: ["Supabase", "Firebase", "Clerk", "Python", "C++"],
  },
  {
    label: "AI & Realtime",
    skills: ["Claude API", "Gemini API", "Voyage AI Embeddings", "Agora", "N8n"],
  },
  {
    label: "Design & Hardware",
    skills: ["Figma", "UI/UX Design", "ESP32 / Embedded", "Git"],
  },
];

export type JourneyItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const journey: JourneyItem[] = [
  {
    period: "2025 — Present",
    title: "XR Club Lead",
    org: "Karunya Innovation and Design Studio (KIDS)",
    description:
      "Leading the XR Club, running junior recruitment across Game Development, XR, and 3D Asset Creation domains.",
  },
  {
    period: "2024 — Present",
    title: "Founder & Full Stack Developer",
    org: "PupilNetwork",
    description:
      "Building a collaborative study platform with live rooms, AI tutoring, and 18+ active students.",
  },
  {
    period: "2024 — Present",
    title: "Founder & Creative Developer",
    org: "OddCraft Studio",
    description: "Running a small agency focused on animation-first, interaction-heavy builds.",
  },
  {
    period: "2023 — Present",
    title: "Freelance Web Developer",
    org: "Independent",
    description: "7+ live projects delivered for startups and small businesses.",
  },
  {
    period: "2022 — 2026",
    title: "Computer Engineering Student",
    org: "Karunya Institute of Technology & Sciences",
    description: "Batch 2026, Computer Engineering.",
  },
];

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end product builds on Next.js, React, and Supabase — from database schema to deployed frontend.",
    tags: ["Next.js", "React", "Supabase", "APIs"],
  },
  {
    title: "GenAI Integration",
    description:
      "Wiring Claude, Gemini, and embedding models into real products — tutoring systems, agentic assistants, semantic search.",
    tags: ["Claude", "Gemini", "Voyage AI", "RAG"],
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces designed in Figma and shipped in code, with an eye for personality — not just Bootstrap-flavored defaults.",
    tags: ["Figma", "Design Systems", "Motion"],
  },
  {
    title: "E-commerce & Startup MVPs",
    description:
      "Fast, fully-owned MVPs for founders — payments, auth, and a real brand identity from day one, via LUNEX TECH.",
    tags: ["Razorpay", "Clerk", "MVP"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered a complete platform with AI and real-time collaboration features — exactly the product we envisioned for PupilNetwork.",
    author: "PupilNetwork",
    role: "Platform launch",
  },
  {
    quote:
      "Our conversion rate jumped immediately after the new site went live. Clean, fast, and easy for customers to actually buy from.",
    author: "Deedis Pickles",
    role: "E-commerce client",
  },
  {
    quote:
      "The OddCraft Studio build was smooth from kickoff to launch — modern, beautifully executed, no hand-holding needed.",
    author: "OddCraft Studio",
    role: "Studio project",
  },
  {
    quote:
      "A rare blend of engineering depth and design taste — the LUNEX TECH site proves it end to end.",
    author: "LUNEX TECH",
    role: "Agency site",
  },
];

export const socials = {
  github: "https://github.com/kaushikbuilds-cloud",
  linkedin: "https://linkedin.com/in/kaushik-s-0012a93b7",
  x: "https://x.com/kaushik_code",
  email: "kaushiks25@karunya.edu.in",
};
