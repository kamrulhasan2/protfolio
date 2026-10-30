// ============================================================
// Centralized Portfolio Data — Based on CV of Md. Kamrul Hasan
// ============================================================

// --- Personal Info ---
export const personalInfo = {
  name: "Md. Kamrul Hasan",
  title: "WordPress Plugin Developer | Full-Stack Engineer (MERN, AI Backend)",
  location: "Mirpur, Dhaka, Bangladesh",
  phone: "+880 1601 780015",
  email: "kamrulhasan20656@gmail.com",
  profileImage: "/images/kamrul.jpg",
  resumePath: "/cv/Resume of Kamrul Hasan.pdf",
  availableForWork: true,
  summary:
    "Full-stack engineer who ships production WordPress platforms and custom plugins for healthcare and travel businesses in Bangladesh, backed by a MERN and AI-backend foundation. Built a telemedicine booking system with video consultations and SSLCommerz payments, and a travel-booking plugin suite on WooCommerce. Owns features end to end: data model, REST API, admin UI, security hardening, and live deployment.",
  roles: [
    "WordPress Plugin Developer",
    "Full-Stack Engineer",
    "AI Backend Developer",
    "MERN Stack Developer",
    "Problem Solver",
  ],
};

// --- Social Links ---
export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/kamrulhasan2",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamrulhasan20656/",
  },
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/kamrulhasan3778/",
  },
  twitter: {
    name: "X (Twitter)",
    url: "https://x.com/kamrulkh3778",
  },
  whatsapp: {
    name: "WhatsApp",
    url: "https://wa.me/+8801601780015",
  },
  email: {
    name: "Email",
    url: "mailto:kamrulhasan20656@gmail.com",
  },
  websites: [
    { name: "meditaj.com", url: "https://meditaj.com" },
    { name: "travelz.com.bd", url: "https://travelz.com.bd" },
  ],
};

// --- Stats ---
export const stats = [
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Live Websites", value: 3, suffix: "+" },
  { label: "Custom WP Plugins", value: 5, suffix: "+" },
  { label: "Tech Stack", value: 10, suffix: "+" },
];

// --- Technical Skills (Categorized) ---
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  emoji: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "WordPress",
    emoji: "🔌",
    skills: [
      { name: "Custom Plugin Dev" },
      { name: "WooCommerce" },
      { name: "Elementor" },
      { name: "CPT & Taxonomies" },
      { name: "REST API" },
      { name: "WP-CLI" },
      { name: "WP-Cron" },
      { name: "LiteSpeed Cache" },
      { name: "Rank Math SEO" },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "PHP" },
      { name: "MySQL" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Bcrypt" },
      { name: "Zod" },
      { name: "Helmet" },
      { name: "Rate Limiting" },
    ],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Redux" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "AI & Integrations",
    emoji: "🤖",
    skills: [
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "Google GenAI" },
      { name: "RAG" },
      { name: "Agora RTC" },
      { name: "SSLCommerz" },
      { name: "Stripe" },
      { name: "AWS S3" },
      { name: "Backblaze B2" },
    ],
  },
  {
    category: "Tools & Testing",
    emoji: "🔧",
    skills: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Swagger (OpenAPI)" },
      { name: "Vitest" },
      { name: "Supertest" },
      { name: "Postman" },
      { name: "XAMPP" },
      { name: "Hostinger" },
      { name: "Vercel" },
    ],
  },
];

// --- Work Experience ---
export interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  companyUrl: string;
  jobTitle: string;
  description: string[];
  techTags: string[];
}

export const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "2026",
    endDate: "Present",
    companyName: "E-GUIDER",
    companyUrl: "https://e-guider.com",
    jobTitle: "Web Developer, WordPress & Plugin Development",
    description: [
      "Design, build, and maintain client websites on WordPress, Elementor, and WooCommerce, including Meditaj (healthcare), TravelZ (travel), and Axia (e-commerce).",
      "Develop custom PHP plugins with custom database tables, REST routes, role-based portals, and admin dashboards, replacing page-builder layouts with faster, SEO-friendly native code.",
      "Integrate SSLCommerz, bank transfer, and cash on delivery through WooCommerce; set up WP-Cron email reminders and SMTP delivery.",
      "Audit live sites for broken features and slow pages and fix them; plan features in phases with project manager approval and local testing before release.",
      "Cleaned a hacked site of spam and malicious code, hardened it, and migrated it to a new domain while keeping its content and URL structure.",
    ],
    techTags: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "Elementor",
      "REST API",
      "SSLCommerz",
      "MySQL",
    ],
  },
];

// --- Projects ---
export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    title: "Meditaj / EG Care",
    subtitle: "Telemedicine Platform",
    description: [
      "Built patient booking with specialty, availability, and fee filters, instant doctor requests, saved family members, and public doctor profile pages.",
      "Implemented WebRTC video consultations, reviews, and 30-minute email reminders; created patient, doctor, and admin portals on seven custom tables with a metrics dashboard.",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "REST API",
      "Agora RTC",
      "SSLCommerz",
    ],
    liveUrl: "https://meditaj.com",
    githubUrl: "https://github.com/kamrulhasan2/Meditaj",
    featured: true,
  },
  {
    title: "FocusTube",
    subtitle: "Full-Stack AI Learning Platform",
    description: [
      "Architected and built a full-stack platform that turns passive YouTube watching into active learning through AI summaries, RAG-based chat, and automated workflows.",
      "Full-stack: component-driven Next.js frontend integrated with a scalable Node.js REST API.",
      "AI & automation: LangChain and OpenAI pipelines for transcript extraction and structured summary generation.",
      "Infrastructure & security: Backblaze B2 (S3) storage, Stripe payments, JWT authentication, and Zod validation.",
      "QA & docs: Vitest and Supertest test suite; Swagger API documentation.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "LangChain",
      "OpenAI",
      "Backblaze B2",
      "Stripe",
      "Zod",
    ],
    frontendUrl: "https://github.com/kamrulhasan2/FocusTube",
    backendUrl: "https://github.com/kamrulhasan2/FocusTube",
    liveDemoUrl: "https://focustube2.netlify.app/",
    featured: true,
  },
  {
    title: "TravelZ Holidays",
    subtitle: "Travel Booking Plugin",
    description: [
      "Converted a React design into a native WordPress plugin with package post types, destination taxonomies, clean URLs, WooCommerce booking, and PDF itineraries; set up GitHub releases with a built-in updater.",
    ],
    technologies: ["PHP", "WordPress", "WooCommerce", "GitHub Actions"],
    liveUrl: "https://travelz.com.bd",
    githubUrl: "https://github.com/kamrulhasan2/travelz-holidays",
  },
  {
    title: "TravelZ Maldives Packages",
    subtitle: "Booking Wizard",
    description: [
      "Co-built a Maldives booking wizard with offline, bank transfer, and SSLCommerz payments via WooCommerce orders.",
    ],
    technologies: ["PHP", "WordPress", "WooCommerce", "SSLCommerz"],
    githubUrl: "https://github.com/kamrulhasan2/TravelZ--Maldives",
  },
  {
    title: "TravelZ Visa Assistance",
    subtitle: "Visa Plugin",
    description: [
      "Co-built an admin-managed visa plugin: fee tables, document checklists, PDF viewer, country search, Schema.org markup.",
    ],
    technologies: ["PHP", "WordPress", "Schema.org"],
    githubUrl: "https://github.com/kamrulhasan2/travel-z-visa",
  },
  {
    title: "Music Academy",
    subtitle: "Frontend",
    description: [
      "Built a responsive, SEO-friendly marketing site with course pages, instructor profiles, and animated components.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://music-academy-next-js-ykl9.vercel.app/",
    githubUrl: "https://github.com/kamrulhasan2/music-academy-next.js",
  },
];

// --- Education ---
export interface EducationItem {
  degree: string;
  institution: string;
  affiliatedWith?: string;
  startYear: string;
  endYear: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Dhaka City College",
    affiliatedWith: "National University",
    startYear: "2021",
    endYear: "Present",
  },
];

// --- Languages ---
export interface LanguageItem {
  name: string;
  level: string;
}

export const languagesData: LanguageItem[] = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Conversational" },
];
