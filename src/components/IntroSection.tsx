"use client";

import Intro from "./helper-ui/Intro";
import TrustStrip from "./helper-ui/TrustStrip";

export default function IntroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-6 pt-2 pb-2 relative z-20"
    >
      <Intro />
      <TrustStrip />
    </section>
  );
}
