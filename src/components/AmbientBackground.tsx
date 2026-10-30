"use client";

import dynamic from "next/dynamic";

const Meteors = dynamic(() => import("@/components/magicui/meteros"), {
  ssr: false,
});

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top-Right Soft Blue Ambient Glow */}
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] opacity-70" />

      {/* Center-Left Soft Emerald Ambient Glow */}
      <div className="absolute top-1/3 -left-40 size-[450px] rounded-full bg-emerald-500/10 dark:bg-emerald-600/10 blur-[130px] opacity-60" />

      {/* Bottom Subtle Violet/Primary Glow */}
      <div className="absolute bottom-10 right-1/4 size-[400px] rounded-full bg-primary/10 blur-[140px] opacity-60" />

      {/* Delicate shooting meteors */}
      <Meteors number={20} />
    </div>
  );
}

export default AmbientBackground;
