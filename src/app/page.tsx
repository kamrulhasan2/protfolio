import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
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

      <main className="flex min-h-screen flex-col md:gap-14 gap-10 pt-6 md:pt-8 pb-20 md:px-12 px-5 relative max-w-5xl xl:max-w-6xl mx-auto w-full">
        <IntroSection />
        <StatsBar />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />

        <ScrollToTopButton />
      </main>
    </>
  );
}
