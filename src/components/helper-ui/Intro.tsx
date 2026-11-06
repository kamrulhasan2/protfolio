"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Download,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Globe,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { personalInfo, socialLinks, heroTechPills } from "@/data/portfolio-data";
import HeroVisual from "./HeroVisual";

// Tech Icon SVGs for quick pills
const TechIcon = ({ name }: { name: string }) => {
  if (name === "React") {
    return (
      <svg className="size-3.5 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348">
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
      <span className="text-[10px] font-mono font-bold px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
        JS
      </span>
    );
  }
  if (name === "WordPress") {
    return (
      <svg className="size-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.02 18.06L7.1 7.64c.55-.02.97-.07.97-.07.4-.04.35-.61-.05-.61 0 0-1.21.1-2 .1-.75 0-2.02-.1-2.02-.1-.4 0-.45.59-.05.61 0 0 .5.05.93.07l2.87 8.35-2.08-6.19c-.43-.02-.85-.05-.85-.05-.4-.02-.43-.61-.03-.61 0 0 1.25.1 2.04.1.84 0 2.09-.1 2.09-.1.4 0 .43.59.03.61 0 0-.5.03-.92.05l3 8.32 1.69-5.61-1.2-3.26c-.37-.02-.73-.05-.73-.05-.4-.02-.45-.61-.05-.61 0 0 1.25.1 2.04.1.84 0 2.09-.1 2.09-.1.4 0 .43.59.03.61 0 0-.5.03-.93.05l3.29 9.07c-2.31 1.63-5.11 2.59-8.15 2.59-1.24 0-2.43-.16-3.56-.47z" />
      </svg>
    );
  }
  return <Plus className="size-3 text-muted-foreground" />;
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
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#0a1628]/85 border border-emerald-500/30 text-muted-foreground shadow-sm backdrop-blur-md"
        >
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for opportunities</span>
          </div>

          <span className="text-border/80">|</span>

          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="size-3 text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/90"
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
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-white leading-[1.1]">
            <span>{personalInfo.firstName} </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              {personalInfo.middleName}
            </span>{" "}
            <span>{personalInfo.lastName}</span>
            <span className="text-indigo-400">.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground/95">
            Full-stack Engineer &amp; Problem Solver
          </p>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0a1628]/85 hover:bg-[#102444] border border-white/10 hover:border-cyan-400/50 text-foreground/90 transition-all duration-200 hover:scale-105 shadow-xs"
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
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download className="size-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download CV</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contact Me Button */}
          <button
            onClick={handleContactClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-foreground/90 bg-[#0a1628]/85 hover:bg-[#122544] border border-white/10 hover:border-primary/60 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
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
              className="size-9 rounded-full flex items-center justify-center bg-[#0a1628]/85 hover:bg-[#122544] border border-white/10 hover:border-primary/60 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Github className="size-3.5" />
            </Link>

            <Link
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-9 rounded-full flex items-center justify-center bg-[#0a1628]/85 hover:bg-[#122544] border border-white/10 hover:border-blue-500 text-muted-foreground hover:text-blue-400 transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Linkedin className="size-3.5" />
            </Link>

            <Link
              href={socialLinks.websites[0]?.url || "https://meditaj.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Project Website"
              className="size-9 rounded-full flex items-center justify-center bg-[#0a1628]/85 hover:bg-[#122544] border border-white/10 hover:border-cyan-400 text-muted-foreground hover:text-cyan-400 transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Globe className="size-3.5" />
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
