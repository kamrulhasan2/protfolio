"use client";

import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { MapPin, Sparkles } from "lucide-react";
import ProfilePic from "../../../public/images/kamrul.jpg";

export function Intro() {
  const [isTypingAnimationComplete, setIsTypingAnimationComplete] =
    useState(false);
  const typingAnimationText = `${personalInfo.name}.`;
  const typingAnimationDuration = 80;
  const typingAnimationDelay =
    typingAnimationText.length * typingAnimationDuration + 200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingAnimationComplete(true);
    }, typingAnimationDelay);

    return () => clearTimeout(timer);
  }, [typingAnimationDelay]);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 w-full">
      {/* Text column */}
      <div className="flex flex-col gap-3 max-w-2xl">
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          {personalInfo.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted/20 text-muted-foreground border border-border">
            <MapPin className="size-3 text-primary" />
            {personalInfo.location}
          </div>
        </div>

        {/* Heading */}
        <div className="mt-2">
          <p className="text-sm md:text-base font-medium text-muted-foreground tracking-wide uppercase flex items-center gap-1.5">
            <Sparkles className="size-4 text-primary" />
            Hello &amp; Welcome, I am
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-1">
            <TypingAnimation
              duration={typingAnimationDuration}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            >
              {typingAnimationText}
            </TypingAnimation>
          </h1>

          <div className="h-10 sm:h-12 mt-2 flex items-center">
            {isTypingAnimationComplete ? (
              <WordRotate
                className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text"
                words={personalInfo.roles}
                duration={2400}
              />
            ) : (
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                WordPress Plugin Developer
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="relative group self-center md:self-auto shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-secondary opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
        <div className="relative size-36 sm:size-40 md:size-44 rounded-full overflow-hidden ring-4 ring-background bg-surface shadow-2xl">
          <Image
            src={ProfilePic}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 768px) 144px, 176px"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
