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
        <div className="flex flex-col md:flex-row justify-between">

          <div className="flex items-center justify-center md:hidden">
            <Image
              src={ProfilePic}
              alt="Yatharth"
              width={160}
              height={160}
              className="border-2 border-gray-100 rounded-full object-cover shadow-xl"
            />
          </div>

          <div className="text-2xl h-[150px] mt-10 md:mt-0 leading-none">
            <h1 className="text-2xl leading-none">Hello! I&apos;m</h1>
            <TypingAnimation>{typingAnimationText}</TypingAnimation>
              {isTypingAnimationComplete && (
              <WordRotate
                className=""
                words={[
                  "Software Engineer",
                  "Full Stack Web Developer",
                  "Programmer",
                  "MERN Stack Developer",
                  "Problem Solver",
                ]}
                duration={2500}
              />
            )}
          </div>

          <div className="hidden md:block">
            <Image
              src={ProfilePic}
              alt="Yatharth"
              width={160}
              height={160}
              className="border-2 border-gray-100 rounded-full object-cover shadow-xl"
            />
          </div>

        </div>
  );
}

export default Intro;
