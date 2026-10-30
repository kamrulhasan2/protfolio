"use client";

import React from "react";
import ContactForm from "./helper-ui/ContactForm";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Github,
  Linkedin,
  Facebook,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function ContactMe() {
  return (
    <section id="contact" className="w-full flex flex-col gap-6 pt-4 mb-24 md:mb-16 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <MessageSquare className="size-3.5" />
          Get In Touch
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Let&apos;s Build Something Great
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Whether you need a custom WordPress plugin, full-stack web application, or AI-integrated system, I&apos;m ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Side: Contact Information Cards (2 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-start gap-3.5 p-4 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card hover:shadow-card-hover hover:border-primary/50 transition-all duration-300"
          >
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <Mail className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                {personalInfo.email}
              </span>
            </div>
          </a>

          {/* WhatsApp / Phone card */}
          <a
            href={socialLinks.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3.5 p-4 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card hover:shadow-card-hover hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              <Phone className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                WhatsApp / Call
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                {personalInfo.phone}
              </span>
            </div>
          </a>

          {/* Location card */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card">
            <div className="p-2.5 rounded-xl bg-accent text-accent-foreground">
              <MapPin className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Location
              </span>
              <span className="text-sm font-semibold text-foreground">
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="p-4 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card flex flex-col gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Social Profiles
            </span>
            <div className="flex items-center gap-2 pt-1">
              <Link
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-border/80 hover:bg-accent hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </Link>
              <Link
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-border/80 hover:bg-accent hover:text-blue-500 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </Link>
              <Link
                href={socialLinks.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-border/80 hover:bg-accent hover:text-blue-600 hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Message Form (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3 p-6 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
            <Sparkles className="size-4 text-primary" />
            <h3 className="font-bold text-base text-foreground">
              Send a Direct Message
            </h3>
          </div>
          <ContactForm />
        </motion.div>
      </div>

      {/* Footer copyright note */}
      <div className="pt-8 mt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <p>© {new Date().getFullYear()} Md. Kamrul Hasan. All rights reserved.</p>
        <p className="font-mono">Built with Next.js 15, TypeScript &amp; Tailwind CSS</p>
      </div>
    </section>
  );
}

export default ContactMe;
