"use client";

import Image from "next/image";
import { motion } from "motion/react";

// SVGs for the 4 floating tech badges
const WordPressBadgeIcon = () => (
  <svg className="size-6 sm:size-7 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
  </svg>
);

const ReactBadgeIcon = () => (
  <svg className="size-6 sm:size-7 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeBadgeIcon = () => (
  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 tracking-wider">
    JS
  </span>
);

const CodeBadgeIcon = () => (
  <span className="text-xs sm:text-sm font-mono font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
    &lt;/&gt;
  </span>
);

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] lg:max-w-[460px] mx-auto select-none">
      {/* Ambient Radial Spotlight Behind the Artwork */}
      <div className="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-purple-600/20 blur-3xl opacity-75 -z-10 pointer-events-none" />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        className="relative w-full aspect-[1024/995]"
      >
        {/* Seamless Portrait with Neon Card */}
        <Image
          src="/images/kamrul-hero.png"
          alt="Md. Kamrul Hasan — WordPress Plugin Developer & Full-Stack Engineer"
          priority
          fill
          sizes="(max-width: 768px) 340px, (max-width: 1200px) 420px, 460px"
          className="object-contain pointer-events-none"
        />

        {/* 1. Floating WordPress Badge (Top-Left) */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15 }}
          className="absolute top-[12%] -left-2 sm:-left-4 size-11 sm:size-13 rounded-full flex items-center justify-center bg-[#071328]/90 border border-blue-400/40 shadow-[0_0_22px_rgba(37,99,235,0.6)] backdrop-blur-xl cursor-pointer transition-colors hover:border-blue-400"
        >
          <WordPressBadgeIcon />
        </motion.div>

        {/* 2. Floating React Badge (Top-Right) */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15 }}
          className="absolute top-[22%] -right-2 sm:-right-4 size-11 sm:size-13 rounded-2xl flex items-center justify-center bg-[#071328]/90 border border-cyan-400/50 shadow-[0_0_24px_rgba(34,211,238,0.65)] backdrop-blur-xl cursor-pointer transition-colors hover:border-cyan-300"
        >
          <ReactBadgeIcon />
        </motion.div>

        {/* 3. Floating Node.js / JS Badge (Bottom-Left) */}
        <motion.div
          animate={{
            y: [5, -5, 5],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 5.0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15 }}
          className="absolute bottom-[24%] -left-2 sm:-left-4 size-11 sm:size-13 rounded-2xl flex items-center justify-center bg-[#071328]/90 border border-emerald-400/50 shadow-[0_0_24px_rgba(52,211,153,0.65)] backdrop-blur-xl cursor-pointer transition-colors hover:border-emerald-300"
        >
          <NodeBadgeIcon />
        </motion.div>

        {/* 4. Floating Code </> Badge (Bottom-Right) */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 4.0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.15 }}
          className="absolute bottom-[10%] -right-2 sm:-right-4 size-11 sm:size-13 rounded-2xl flex items-center justify-center bg-[#071328]/90 border border-purple-400/50 shadow-[0_0_24px_rgba(168,85,247,0.65)] backdrop-blur-xl cursor-pointer transition-colors hover:border-purple-300"
        >
          <CodeBadgeIcon />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroVisual;
