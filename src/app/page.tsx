import CommitmentSection from "../components/sections/CommitmentSection";
import Hero from "../components/sections/Hero"
import IntroSection from "../components/sections/IntroSection";
import QuicklinkSection from "../components/sections/QuicklinkSection";
import ScienceSection from "../components/sections/ScienceSection";
import TruthSection from "../components/sections/TruthSection";
import WhatWeFocusOn from "../components/sections/WhatWeFocusOn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <ScienceSection />
      <CommitmentSection />
      <TruthSection />
      <WhatWeFocusOn />
      <QuicklinkSection />
    </main>
  );
}
