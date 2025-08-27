"use client";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect, useState } from "react";
import ProfilePic from "../../../public/images/kamrul.jpg";

function Intro() {
  const [isTypingAnimationComplete, setIsTypingAnimationComplete] = useState(false);
  const typingAnimationText = "Kamrul Hasan. A professional";
  const typingAnimationDuration = 100; // ms per character
  const typingAnimationDelay = typingAnimationText.length * typingAnimationDuration;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingAnimationComplete(true);
    }, typingAnimationDelay);

    return () => clearTimeout(timer);
  }, [typingAnimationDelay]);

  return (
    <div className="mb-16 md:mb-1">
      <div className="absolute flex gap-2 flex-col md:flex-row">
        <div className="flex flex-row justify-between">
            <h1>Hello! I&apos;m </h1>
            <TypingAnimation>{typingAnimationText}</TypingAnimation>
            {isTypingAnimationComplete && (
              <WordRotate
                className=""
                words={["Software Engineer", "Full Stack Web Developer", "Programmer", "MERN Stack Developer", "Problem Solver"]}
                duration={2500}
              />
            )}

            <div className="flex items-center justify-center md:mb-2">
                <Image
                src={ProfilePic}
                alt="Kamrul Hasan"
                width={250}
                height={250}
                className="ring-amber-400 ring-4 rounded-full object-cover"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
