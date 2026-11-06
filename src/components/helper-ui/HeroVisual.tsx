"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroCardImg from "../../../public/images/hero-portrait-card.png";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[380px] lg:max-w-[420px] select-none">
      {/* Ambient Radial Glow Behind the Card */}
      <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-cyan-500/30 via-blue-600/40 to-indigo-600/30 blur-3xl opacity-80 -z-10 animate-pulse-glow" />

      {/* Floating 3D Artwork Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.025, rotate: 0.5 }}
        className="relative w-full aspect-[380/490] drop-shadow-[0_25px_60px_rgba(3,15,45,0.9)]"
      >
        <Image
          src={heroCardImg}
          alt="Md. Kamrul Hasan — Full-Stack Engineer"
          priority
          fill
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 380px, 420px"
          className="object-contain pointer-events-none drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        />
      </motion.div>
    </div>
  );
}

export default HeroVisual;
