// ============================================================
// Centralized Portfolio Data — Updated from Latest CV & LinkedIn
// ============================================================

// --- Personal Info ---
export const personalInfo = {
  name: "Md. Kamrul Hasan",
  firstName: "Md.",
  middleName: "Kamrul",
  lastName: "Hasan",
  title: "WordPress Plugin Developer · Full-Stack Engineer (MERN, AI Backend)",
  location: "Mirpur, Dhaka, Bangladesh",
  phone: "+880 1601 780015",
  email: "kamrulhasan20656@gmail.com",
  profileImage: "/images/kamrul.jpg",
  resumePath: "/cv/Resume of Kamrul Hasan.pdf",
  availableForWork: true,
  summary:
    "Versatile Full-stack engineer who ships production WordPress platforms and custom plugins for healthcare, pharmacy, travel, e-commerce and restaurant businesses, backed by a MERN and AI-backend foundation. Built a telemedicine system with video consultations, a home-healthcare and lab-test booking plugin, and a travel-booking plugin suite on WooCommerce. Owns features end to end: data model, REST API, admin UI, payments, security hardening, and live deployment.",
  heroSummary:
    "Full-stack engineer who ships production WordPress platforms and custom plugins for healthcare and travel businesses in Bangladesh, backed by a MERN and AI-backend foundation. Built a telemedicine booking system with video consultations and SSLCommerce payments, and a travel-booking plugin suite on WooCommerce.",
  roles: [
    "Full-stack Engineer & Problem Solver",
    "WordPress Plugin Developer",
    "Full-Stack Engineer (MERN)",
    "AI Backend Developer",
    "Production Systems Builder",
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
    url: "https://www.facebook.com/kamrulhasan3778",
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

// --- Client / Business Trust Logos ---
export const trustedClients = [
  { name: "Meditaj", icon: "heart-pulse", url: "https://meditaj.com" },
  { name: "E-GUIDER", icon: "code", url: "https://e-guider.com" },
  { name: "SKS TOURS", icon: "plane", url: "#" },
  { name: "TravelZ", icon: "navigation", url: "https://travelz.com.bd" },
  { name: "FocusTube", icon: "play", url: "https://focustube2.netlify.app" },
];

// --- Quick Tech Stack Highlights for Hero ---
export const heroTechPills = [
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "WordPress", icon: "wordpress" },
  { name: "+ More", icon: "more", href: "#skills" },
];

// --- Stats ---
export const stats = [
  { label: "Projects Built", value: 6, suffix: "+" },
  { label: "Live Websites", value: 4, suffix: "+" },
  { label: "Custom WP Plugins", value: 5, suffix: "+" },
  { label: "Tech Stack", value: 12, suffix: "+" },
];

// --- Technical Skills (Categorized from Updated CV) ---
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
      { name: "Custom plugins" },
      { name: "WooCommerce (HPOS)" },
      { name: "Elementor Pro" },
      { name: "CPTs & taxonomies" },
      { name: "REST API" },
      { name: "WP-CLI" },
      { name: "WP-Cron" },
      { name: "LiteSpeed Cache" },
      { name: "Rank Math" },
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
    category: "AI & Payments",
    emoji: "🤖",
    skills: [
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "Google GenAI" },
      { name: "RAG" },
      { name: "Agora RTC" },
      { name: "SSLCommerz" },
      { name: "Stripe" },
      { name: "Clover" },
      { name: "AWS S3" },
      { name: "Backblaze B2" },
    ],
  },
  {
    category: "DevOps & Tools",
    emoji: "🔧",
    skills: [
      { name: "Git" },
      { name: "GitHub Actions & Releases" },
      { name: "Hostinger" },
      { name: "Cloudflare" },
      { name: "Vercel" },
      { name: "XAMPP" },
      { name: "Swagger" },
      { name: "Vitest" },
      { name: "Supertest" },
      { name: "Postman" },
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
      "Build and maintain client sites on WordPress, Elementor and WooCommerce: Meditaj, Meditaj Pharmacy, TravelZ, Axia and The Indian Tavern.",
      "Develop custom PHP plugins with custom database tables, REST routes, role-based portals and admin dashboards, replacing page-builder layouts with faster, SEO-friendly native code.",
      "Integrate payments through WooCommerce (SSLCommerz Hosted Checkout, bank transfer, cash on delivery) and set up a Clover gateway; configure SMTP and WP-Cron email notifications.",
      "Cleaned a hacked travel site of spam and malicious code, hardened it, and migrated it to travelz.com.bd with URLs intact.",
      "Audit live sites for broken features and slow pages, restore product catalogs, and configure domain redirects (Namecheap, Cloudflare); plan work in phases with PM approval and local testing before release.",
    ],
    techTags: [
      "WordPress",
      "PHP",
      "WooCommerce (HPOS)",
      "Elementor Pro",
      "REST API",
      "SSLCommerz",
      "Clover",
      "MySQL",
      "Cloudflare",
    ],
  },
];

// --- Projects (Exact from Updated CV) ---
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
      "Patient booking with specialty, availability and fee filters, instant MBBS doctor queue, family members and public doctor profiles; WebRTC video consultations, reviews and 30-minute email reminders.",
      "Patient, doctor and admin portals on seven custom tables with a metrics dashboard; building a prescription workflow where doctors write structured prescriptions and admins review and send them to patients in one click.",
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
    title: "E-Care Health Services",
    subtitle: "Home Healthcare & Lab Test Plugin",
    description: [
      "Caregiver booking, lab test orders and ambulance requests sharing one WooCommerce checkout and patient account with EG Care.",
      "Re-architected the lab module: division → district → area location master, per-provider test catalog, lab cart with configurable advance payment and coupons, and a live data migration.",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "Custom DB Tables",
    ],
    liveUrl: "https://meditaj.com",
    githubUrl: "https://github.com/kamrulhasan2/Meditaj",
  },
  {
    title: "TravelZ Holidays",
    subtitle: "Travel Booking Plugin",
    description: [
      "Converted a React design into a native WordPress plugin: package post types, destination taxonomies, clean URLs, WooCommerce booking and PDF itineraries, shipped via GitHub releases with a built-in updater.",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "GitHub Actions & Releases",
    ],
    liveUrl: "https://travelz.com.bd",
    githubUrl: "https://github.com/kamrulhasan2/travelz-holidays",
  },
  {
    title: "TravelZ Maldives & Visa Assistance",
    subtitle: "Booking Wizard & Visa Plugin Suite",
    description: [
      "Maldives booking wizard with offline, bank transfer and SSLCommerz payments via WooCommerce orders.",
      "Admin-managed visa plugin with fee tables, document checklists, PDF viewer, country search and Schema.org markup.",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "SSLCommerz",
      "Schema.org",
    ],
    githubUrl: "https://github.com/kamrulhasan2/TravelZ--Maldives",
    liveDemoUrl: "https://github.com/kamrulhasan2/travel-z-visa",
  },
  {
    title: "FocusTube",
    subtitle: "Full-Stack AI Learning Platform",
    description: [
      "Turns passive YouTube watching into active learning with LangChain/OpenAI transcript summaries and RAG chat.",
      "Next.js frontend on a Node.js REST API with JWT auth, Stripe payments, B2 storage, Vitest/Supertest tests and Swagger docs.",
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
    title: "Music Academy",
    subtitle: "Modern Educational Frontend",
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
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Dhaka City College",
    affiliatedWith: "National University",
    startYear: "2021",
    endYear: "2025",
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
