"use client";

import Meteors from "@/components/magicui/meteros";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top-Left Ambient Cyan/Blue Wave Glow */}
      <div className="absolute -top-32 -left-32 size-[580px] rounded-full bg-gradient-to-br from-cyan-600/20 via-blue-700/20 to-transparent blur-[140px] pointer-events-none" />

      {/* Right-Side Electric Blue Radiant Spotlight behind the Hero Visual */}
      <div className="absolute top-20 right-[-10%] size-[640px] rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/30 to-cyan-500/20 blur-[150px] pointer-events-none" />

      {/* Center-Left Soft Emerald Ambient Glow */}
      <div className="absolute top-1/2 -left-48 size-[450px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      {/* Bottom Subtle Violet/Primary Glow */}
      <div className="absolute -bottom-24 right-1/4 size-[480px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

      {/* Delicate shooting meteors */}
      <Meteors number={18} />
    </div>
  );
}

export default AmbientBackground;
