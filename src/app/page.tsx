import CommitmentSection from "../components/sections/CommitmentSection";
import Hero from "../components/sections/Hero"
import IntroSection from "../components/sections/IntroSection";
import JoinMovement from "../components/sections/JoinMovement";
import QuicklinkSection from "../components/sections/QuicklinkSection";
import RecentArticles from "../components/sections/RecentArticles";
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
      <JoinMovement />
      <RecentArticles />
    </main>
  );
}
