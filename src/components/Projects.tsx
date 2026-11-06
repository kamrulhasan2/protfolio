"use client";

import React from "react";
import { projectsData } from "@/data/portfolio-data";
import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Layers,
  Star,
  CheckCircle2,
} from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col gap-6 pt-4 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Layers className="size-3.5" />
          Featured Work
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground">
          Production Systems &amp; Projects
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-muted-foreground">
          Real-world platforms, custom WordPress plugins, and full-stack AI architectures built end-to-end.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project, index) => {
          const isFeatured = project.featured;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group flex flex-col justify-between p-6 rounded-2xl bg-white/95 dark:bg-surface/70 border backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-card dark:hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "border-blue-300 dark:border-primary/40 bg-gradient-to-br from-white dark:from-surface via-blue-50/40 dark:via-surface to-blue-50/80 dark:to-accent/25 ring-1 ring-blue-400/30 dark:ring-primary/20 md:col-span-2"
                  : "border-slate-200 dark:border-border/80 hover:border-primary/40"
              }`}
            >
              <div className="flex flex-col gap-3.5">
                {/* Header & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                          <Star className="size-3 fill-amber-500 text-amber-500" />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-2 text-sm text-slate-700 dark:text-foreground/85 my-1">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-secondary shrink-0 mt-1" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-surface-hover border border-slate-200 dark:border-border/60 text-slate-700 dark:text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-5 mt-4 border-t border-slate-100 dark:border-border/60">
                {/* Live / Demo Button */}
                {(project.liveUrl || project.liveDemoUrl) && (
                  <a
                    href={project.liveUrl || project.liveDemoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <InteractiveHoverButton
                      icon={ExternalLink}
                      className="text-xs h-9 px-4"
                    >
                      {project.liveUrl ? "Live Website" : "Live Demo"}
                    </InteractiveHoverButton>
                  </a>
                )}

                {/* Code / GitHub Button */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      View Code
                    </InteractiveHoverButton>
                  </a>
                )}

                {/* Frontend / Backend split buttons if available */}
                {project.frontendUrl && !project.githubUrl && (
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      Frontend
                    </InteractiveHoverButton>
                  </a>
                )}
                {project.backendUrl && !project.githubUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      Backend
                    </InteractiveHoverButton>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;