"use client";

import React from "react";
import { educationData, languagesData } from "@/data/portfolio-data";
import { motion } from "motion/react";
import {
  GraduationCap,
  Calendar,
  Languages,
  BookOpen,
} from "lucide-react";

export function Education() {
  return (
    <section id="education" className="w-full flex flex-col gap-6 pt-4 scroll-mt-20">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <GraduationCap className="size-3.5" />
          Academic Background
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground">
          Education &amp; Languages
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-muted-foreground">
          Formal computer science foundations, engineering principles, and multilingual communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Education Card (spans 2 cols on md) */}
        {educationData.map((item, index) => (
          <motion.div
            key={item.degree + index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 flex flex-col justify-between p-6 rounded-2xl bg-white/95 dark:bg-surface/70 border border-slate-200 dark:border-border/80 backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-card dark:hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-border/50 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-primary/10 text-blue-600 dark:text-primary">
                    <BookOpen className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-muted-foreground">
                      {item.institution}
                      {item.affiliatedWith && (
                        <span> ({item.affiliatedWith})</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-accent text-blue-700 dark:text-accent-foreground border border-blue-100 dark:border-transparent w-fit">
                  <Calendar className="size-3" />
                  <span>
                    {item.startYear} — {item.endYear}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-foreground/80 leading-relaxed pt-1">
                Rigorous coursework covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering methodologies.
              </p>
            </div>
          </motion.div>
        ))}

        {/* Languages Card (spans 1 col on md) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-between p-6 rounded-2xl bg-white/95 dark:bg-surface/70 border border-slate-200 dark:border-border/80 backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-card dark:hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-border/50">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
                <Languages className="size-4" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-foreground">
                Languages
              </h3>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              {languagesData.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-surface-hover/70 border border-slate-200 dark:border-border/40"
                >
                  <span className="text-sm font-semibold text-slate-800 dark:text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-accent text-blue-700 dark:text-accent-foreground border border-blue-100 dark:border-transparent">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;