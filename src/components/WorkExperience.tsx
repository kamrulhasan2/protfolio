"use client";

import React from "react";
import { workExperienceData } from "@/data/portfolio-data";
import { motion } from "motion/react";
import { Briefcase, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export function WorkExperience() {
  return (
    <section id="experience" className="w-full flex flex-col gap-6 pt-4 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Briefcase className="size-3.5" />
          Career Journey
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Work Experience
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Track record of shipping production-grade platforms, custom plugin suites, and secure payment integrations.
        </p>
      </div>

      <div className="relative border-l-2 border-border/80 pl-6 md:pl-8 ml-3 md:ml-4 space-y-10">
        {workExperienceData.map((item, index) => (
          <motion.div
            key={item.companyName + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 size-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 group-hover:bg-secondary transition-transform duration-300" />

            <div className="flex flex-col gap-4 p-5 md:p-6 rounded-2xl bg-surface/70 border border-border/80 backdrop-blur-md shadow-card hover:shadow-card-hover transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {item.jobTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-0.5">
                    <span>{item.companyName}</span>
                    {item.companyUrl && (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="size-3" />
                        <span>e-guider.com</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent text-accent-foreground w-fit">
                  <Calendar className="size-3" />
                  <span>
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
              </div>

              {/* Accomplishments */}
              <ul className="space-y-2.5 text-sm md:text-base text-foreground/85">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              {item.techTags && item.techTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {item.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-surface-hover border border-border/60 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
