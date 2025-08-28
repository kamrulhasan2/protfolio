import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import dynamic from "next/dynamic";


const Meteors = dynamic(() => import("@/components/magicui/meteros"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-8/12 sm:w-full mx-auto">
      <div  className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10"  />
      <IntroSection />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <ContactMe />
      <Meteors number={30} />
    </main>
  );
}
