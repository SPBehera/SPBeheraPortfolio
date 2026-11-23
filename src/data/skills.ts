import { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Modern, accessible, and reactive user interfaces built with modern component architectures.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "Bootstrap", highlight: false },
      { name: "Vite", highlight: false },
    ],
  },
  {
    category: "Backend",
    description: "Type-safe, fast RESTful APIs and server-side business logic with structured ORMs and authentication.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Hono", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "JWT Authentication", highlight: true },
      { name: "Objection.js", highlight: false },
      { name: "Knex.js", highlight: false },
    ],
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile apps for Android and iOS using native modules and real-time push messaging.",
    skills: [
      { name: "React Native", highlight: true },
      { name: "React Native CLI", highlight: true },
      { name: "React Navigation", highlight: true },
      { name: "Firebase Cloud Messaging (FCM)", highlight: true },
      { name: "Android", highlight: false },
    ],
  },
  {
    category: "Database",
    description: "Relational and document storage solutions with normalized schemas and optimized queries.",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "H2", highlight: false },
    ],
  },
  {
    category: "Tools",
    description: "Version control, containerization, cloud storage, API testing, and deployment platforms.",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "GitLab", highlight: false },
      { name: "Docker", highlight: true },
      { name: "Postman", highlight: true },
      { name: "npm", highlight: false },
      { name: "AWS S3", highlight: true },
      { name: "Cloudflare R2", highlight: true },
      { name: "Vercel", highlight: true },
    ],
  },
];
