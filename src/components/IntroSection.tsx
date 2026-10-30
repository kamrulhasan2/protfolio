"use client";

import Intro from "./helper-ui/Intro";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  FileDown,
  Send,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { motion } from "motion/react";

export default function IntroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col gap-8 pt-4 pb-2 relative z-20"
    >
      <Intro />

      {/* Professional Bio */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        <p className="text-foreground/90 font-normal">
          {personalInfo.summary}
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <a
          href={personalInfo.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <InteractiveHoverButton
            icon={FileDown}
            className="w-full sm:w-auto font-medium"
          >
            Download CV
          </InteractiveHoverButton>
        </a>

        <InteractiveHoverButton
          icon={Send}
          onClick={handleContactClick}
          className="w-full sm:w-auto font-medium"
        >
          Contact Me
        </InteractiveHoverButton>

        <Link
          href={socialLinks.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border bg-surface hover:bg-surface-hover hover:border-emerald-500/50 text-foreground transition-all duration-300 hover:scale-105 shadow-sm"
        >
          <MessageCircle className="size-4 text-emerald-500" />
          <span>WhatsApp</span>
        </Link>
      </motion.div>

      {/* Social Icons Quick Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-3 pt-1 border-t border-border/50 text-muted-foreground"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80 mr-1">
          Connect:
        </span>
        <Link
          href={socialLinks.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent hover:text-foreground transition-all duration-200 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <Github className="size-4" />
        </Link>
        <Link
          href={socialLinks.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent hover:text-blue-500 transition-all duration-200 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="size-4" />
        </Link>
        <Link
          href={socialLinks.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent hover:text-blue-600 transition-all duration-200 hover:scale-110"
          aria-label="Facebook Profile"
        >
          <Facebook className="size-4" />
        </Link>
        <Link
          href={socialLinks.email.url}
          className="p-2 rounded-full hover:bg-accent hover:text-red-500 transition-all duration-200 hover:scale-110"
          aria-label="Send Email"
        >
          <Mail className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
