"use client";

import React from "react";
import { skillsData } from "@/data/portfolio-data";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col gap-6 pt-4 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="size-3.5" />
          Technical Expertise
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Skills &amp; Technologies
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Core technical competencies honed across production WordPress platforms, full-stack systems, and AI workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            className={`flex flex-col gap-3 p-5 rounded-2xl bg-surface/60 border border-border/80 backdrop-blur-md shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 ${
              catIndex === 0 ? "md:col-span-2 bg-gradient-to-br from-surface via-surface to-accent/20" : ""
            }`}
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
              <span className="text-xl">{category.emoji}</span>
              <h3 className="font-bold text-base md:text-lg text-foreground tracking-tight">
                {category.category}
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent text-accent-foreground ml-auto">
                {category.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg bg-surface border border-border/80 text-foreground/90 hover:border-primary/60 hover:text-primary hover:bg-accent/40 transition-all duration-200 hover:scale-105 select-none shadow-xs"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
