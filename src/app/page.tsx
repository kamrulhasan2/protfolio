import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import ScrollToTopButton from "@/components/helper-ui/ScrollToTopButton";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StatsBar from "@/components/StatsBar";
import WorkExperience from "@/components/WorkExperience";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <CustomDock />

      <main className="flex min-h-screen flex-col md:gap-16 gap-12 md:py-20 md:px-16 px-6 relative max-w-4xl mx-auto w-full">
        <IntroSection />
        <StatsBar />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <ContactMe />

        <ScrollToTopButton />
      </main>
    </>
  );
}
