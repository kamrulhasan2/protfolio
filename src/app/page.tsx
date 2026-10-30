import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import ScrollToTopButton from "@/components/helper-ui/ScrollToTopButton";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StatsBar from "@/components/StatsBar";
import WorkExperience from "@/components/WorkExperience";
import dynamic from "next/dynamic";

const Meteors = dynamic(() => import("@/components/magicui/meteros"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:gap-14 gap-10 md:py-20 md:px-16 px-6 relative overflow-hidden max-w-4xl mx-auto w-full">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/5 dark:bg-black/10" />

      <CustomDock />

      <IntroSection />
      <StatsBar />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <ContactMe />

      <Meteors number={25} />
      <ScrollToTopButton />
    </main>
  );
}
