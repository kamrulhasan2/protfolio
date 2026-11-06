"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  Code2,
  Plane,
  Navigation,
  PlaySquare,
} from "lucide-react";
import Link from "next/link";
import { trustedClients } from "@/data/portfolio-data";

const clientIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Meditaj: Activity,
  "E-GUIDER": Code2,
  "SKS TOURS": Plane,
  TravelZ: Navigation,
  FocusTube: PlaySquare,
};

export function TrustStrip() {
  return (
    <div className="w-full py-4 select-none">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-border flex-1 max-w-[120px]" />
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/80">
          Trusted by businesses in Bangladesh
        </span>
        <div className="h-px bg-gradient-to-l from-transparent via-border to-border flex-1 max-w-[120px]" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
        {trustedClients.map((client, index) => {
          const Icon = clientIcons[client.name] || Code2;
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="group flex items-center gap-2.5 text-muted-foreground/75 hover:text-foreground transition-all duration-300 cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-surface/50 border border-border/40 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                <Icon className="size-4 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                {client.name}
              </span>
            </motion.div>
          );

          if (client.url && client.url !== "#") {
            return (
              <Link
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </Link>
            );
          }

          return <div key={client.name}>{content}</div>;
        })}
      </div>
    </div>
  );
}

export default TrustStrip;
