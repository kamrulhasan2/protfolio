"use client"
import Intro from "@/components/helper-ui/Intro";
import IntroSection from "@/components/IntroSection";
import dynamic from "next/dynamic";


const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-11/12 sm:w-full mx-auto">
      <div  className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10"  />
       <Intro />
    </div>
  );
}
