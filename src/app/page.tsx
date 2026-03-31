import CommitmentSection from "../components/sections/CommitmentSection";
import Hero from "../components/sections/Hero"
import IntroSection from "../components/sections/IntroSection";
import ScienceSection from "../components/sections/ScienceSection";
import TruthSection from "../components/sections/TruthSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <ScienceSection />
      <CommitmentSection />
      <TruthSection/>
    </main>
  );
}
