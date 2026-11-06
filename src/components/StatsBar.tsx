"use client";

import { motion } from "motion/react";
import { stats } from "@/data/portfolio-data";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Code2,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";

const statIcons = [Code2, Globe, Layers, Cpu];

function StatCard({
  item,
  icon: Icon,
  index,
}: {
  item: (typeof stats)[0];
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  const { ref, displayValue } = useCountUp({
    end: item.value,
    duration: 1600,
    suffix: item.suffix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white/95 dark:bg-surface/70 border border-slate-200 dark:border-border/80 backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-card dark:hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-3 rounded-xl bg-blue-50 dark:bg-accent text-blue-600 dark:text-accent-foreground mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="size-5 md:size-6" />
      </div>
      <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-foreground font-mono">
        {displayValue}
      </span>
      <span className="text-xs md:text-sm text-slate-600 dark:text-muted-foreground mt-1 text-center font-medium">
        {item.label}
      </span>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <div className="w-full my-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {stats.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            icon={statIcons[index % statIcons.length]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StatsBar;