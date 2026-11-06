"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Download,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { personalInfo, socialLinks, heroTechPills } from "@/data/portfolio-data";
import HeroVisual from "./HeroVisual";
import { WordRotate } from "@/components/magicui/word-rotate";

// Tech Icon SVGs for quick pills
const TechIcon = ({ name }: { name: string }) => {
  if (name === "React") {
    return (
      <svg className="size-3.5 text-cyan-500" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
  if (name === "Node.js") {
    return (
      <span className="text-[10px] font-mono font-bold px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
        JS
      </span>
    );
  }
  if (name === "WordPress") {
    return (
      <svg className="size-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
      </svg>
    );
  }
  return <Plus className="size-3 text-slate-500 dark:text-muted-foreground" />;
};

export function Intro() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pt-0">
      {/* Left Column: Text & CTAs */}
      <div className="flex flex-col items-start gap-3.5 w-full lg:max-w-[56%]">
        {/* Top Status Capsule Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-[#0a1628]/85 border border-emerald-500/40 text-slate-700 dark:text-muted-foreground shadow-sm backdrop-blur-md transition-colors"
        >
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for opportunities</span>
          </div>

          <span className="text-slate-300 dark:text-border/80">|</span>

          <div className="flex items-center gap-1 text-slate-600 dark:text-muted-foreground">
            <MapPin className="size-3 text-cyan-600 dark:text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-muted-foreground/90"
        >
          <span className="text-base">👋</span>
          <span>HELLO &amp; WELCOME, I AM</span>
        </motion.div>

        {/* Big Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            <span>{personalInfo.firstName} </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              {personalInfo.middleName}
            </span>{" "}
            <span>{personalInfo.lastName}</span>
            <span className="text-blue-600 dark:text-indigo-400">.</span>
          </h1>

          <div className="min-h-[30px] sm:min-h-[34px] flex items-center">
            <WordRotate
              words={personalInfo.roles}
              duration={2500}
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-800 dark:text-foreground/95"
            />
          </div>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground leading-relaxed max-w-xl"
        >
          {personalInfo.heroSummary}
        </motion.p>

        {/* Quick Tech Pills Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-2"
        >
          {heroTechPills.map((pill) => (
            <a
              key={pill.name}
              href={pill.href || "#skills"}
              onClick={pill.href ? handleSkillsClick : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#0a1628]/85 hover:bg-slate-100 dark:hover:bg-[#102444] border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-cyan-400/50 text-slate-800 dark:text-foreground/90 transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <TechIcon name={pill.name} />
              <span>{pill.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 pt-1"
        >
          {/* Download CV */}
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-md hover:shadow-lg dark:shadow-[0_0_25px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download className="size-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download CV</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contact Me Button */}
          <button
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-800 dark:text-foreground/90 bg-white dark:bg-[#0a1628]/85 hover:bg-slate-100 dark:hover:bg-[#122544] border border-slate-200 dark:border-white/10 hover:border-primary/60 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs"
          >
            <Mail className="size-4 text-primary" />
            <span>Contact Me</span>
          </button>

          {/* Quick Circular Social Icons */}
          <div className="flex items-center gap-2 pl-1">
            <Link
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="size-9 rounded-full flex items-center justify-center bg-white dark:bg-[#0a1628]/85 hover:bg-slate-100 dark:hover:bg-[#122544] border border-slate-200 dark:border-white/10 hover:border-primary/60 text-slate-700 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground transition-all duration-200 hover:scale-110 shadow-xs"
            >
              <Github className="size-3.5" />
            </Link>

            <Link
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-9 rounded-full flex items-center justify-center bg-white dark:bg-[#0a1628]/85 hover:bg-slate-100 dark:hover:bg-[#122544] border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-700 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 shadow-xs"
            >
              <Linkedin className="size-3.5" />
            </Link>

            <Link
              href={socialLinks.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="size-9 rounded-full flex items-center justify-center bg-white dark:bg-[#0a1628]/85 hover:bg-slate-100 dark:hover:bg-[#122544] border border-slate-200 dark:border-white/10 hover:border-blue-600 text-slate-700 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-200 hover:scale-110 shadow-xs"
            >
              <Facebook className="size-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Angled Glowing 3D Portrait Artwork */}
      <div className="w-full lg:max-w-[44%] flex items-center justify-center lg:justify-end">
        <HeroVisual />
      </div>
    </div>
  );
}

export default Intro;