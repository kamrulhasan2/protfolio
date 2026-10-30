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
import { LinkPreview } from "./ui/link-preview";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col gap-6 pt-4 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Layers className="size-3.5" />
          Featured Work
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Production Systems &amp; Projects
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
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
              className={`group flex flex-col justify-between p-6 rounded-2xl bg-surface/70 border backdrop-blur-md shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "border-primary/40 bg-gradient-to-br from-surface via-surface to-accent/25 ring-1 ring-primary/20 md:col-span-2"
                  : "border-border/80 hover:border-primary/40"
              }`}
            >
              <div className="flex flex-col gap-3.5">
                {/* Header & Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          <Star className="size-3 fill-amber-500 text-amber-500" />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-primary mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-2 text-sm text-foreground/80 my-1">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-secondary shrink-0 mt-1" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-surface-hover border border-border/60 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-5 mt-4 border-t border-border/60">
                {/* Live / Demo Button */}
                {(project.liveUrl || project.liveDemoUrl) && (
                  <LinkPreview
                    url={(project.liveUrl || project.liveDemoUrl)!}
                    className="font-medium"
                  >
                    <InteractiveHoverButton
                      icon={ExternalLink}
                      className="text-xs h-9 px-4"
                    >
                      {project.liveUrl ? "Live Website" : "Live Demo"}
                    </InteractiveHoverButton>
                  </LinkPreview>
                )}

                {/* Code / GitHub Button */}
                {project.githubUrl && (
                  <LinkPreview url={project.githubUrl} className="font-medium">
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      View Code
                    </InteractiveHoverButton>
                  </LinkPreview>
                )}

                {/* Frontend / Backend split buttons if available */}
                {project.frontendUrl && !project.githubUrl && (
                  <LinkPreview url={project.frontendUrl} className="font-medium">
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      Frontend
                    </InteractiveHoverButton>
                  </LinkPreview>
                )}
                {project.backendUrl && !project.githubUrl && (
                  <LinkPreview url={project.backendUrl} className="font-medium">
                    <InteractiveHoverButton
                      icon={Github}
                      className="text-xs h-9 px-4"
                    >
                      Backend
                    </InteractiveHoverButton>
                  </LinkPreview>
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
