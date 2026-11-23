import { ExperienceItem } from "@/types/experience";

export const experiencesData: ExperienceItem[] = [
  {
    company: "QSpiders",
    position: "Software Developer",
    location: "Bhubaneswar",
    duration: "September 2024 – Present",
    startDate: "September 2024",
    endDate: "Present",
    type: "Full-time",
    description: "Building scalable web and backend applications, engineering modular component systems, and optimizing database-driven services.",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, Node.js, and TypeScript.",
      "Design and maintain relational (MySQL) and NoSQL (MongoDB) database architectures.",
      "Collaborate with engineering teams to formulate modular backend architectures and RESTful API specifications.",
      "Implement secure authentication mechanisms and state management flows for enterprise applications.",
      "Participate in code reviews, testing protocols, and performance optimization across frontend and backend modules."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
    contributions: [
      "Delivered reusable UI component libraries accelerating internal feature rollout.",
      "Engineered resilient API controllers with centralized validation and error logging.",
      "Improved query response times through index tuning and normalized relational tables."
    ]
  },
  {
    company: "Juvenilia Technology",
    position: "Full Stack Developer",
    location: "Bhubaneswar",
    duration: "November 2023 – September 2024",
    startDate: "November 2023",
    endDate: "September 2024",
    type: "Full-time",
    description: "Spearheaded full stack and mobile application development across healthcare and enterprise software systems.",
    responsibilities: [
      "Engineered key modules for the HMIS (Hospital Management Information System) covering OPD queues, doctor consultations, IPD workflows, and pharmacy prescriptions.",
      "Built native mobile features for patient self-service applications using React Native CLI and Android tooling.",
      "Architected backend microservices and OTA update distribution platforms using Node.js, Hono, AWS S3, and Cloudflare R2.",
      "Implemented transactional data models and inventory tracking logic for the Optical Inventory and Billing platform.",
      "Integrated Firebase Cloud Messaging (FCM) to trigger critical operational notifications for clinical staff and patients."
    ],
    technologies: ["React", "React Native", "TypeScript", "Node.js", "Hono", "MySQL", "AWS S3", "Cloudflare R2", "FCM", "REST APIs"],
    contributions: [
      "Constructed multi-tenant role-based access control protecting clinical records across departments.",
      "Designed an automated OTA mobile release pipeline reducing client update friction.",
      "Optimized complex optical billing transactions with atomic MySQL database consistency."
    ]
  },
  {
    company: "OCAC",
    position: "Java Developer Intern",
    location: "Bhubaneswar",
    duration: "September 2023 – October 2023",
    startDate: "September 2023",
    endDate: "October 2023",
    type: "Internship",
    description: "Gained hands-on experience in enterprise Java application development, object-oriented software engineering, and database connectivity.",
    responsibilities: [
      "Assisted in developing backend modules using Core Java and JDBC architectures.",
      "Formulated SQL queries, table schemas, and data manipulation scripts for relational databases.",
      "Participated in software testing, debugging, and documenting functional requirements.",
      "Collaborated with senior engineers to understand public-sector enterprise workflows and system architecture standards."
    ],
    technologies: ["Java", "JDBC", "SQL", "MySQL", "Object-Oriented Programming"],
    contributions: [
      "Developed backend data access objects facilitating clean database abstraction.",
      "Assisted in unit testing database transactions and identifying data validation edge cases."
    ]
  }
];
