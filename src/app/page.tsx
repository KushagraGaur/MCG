import ChallengeSection from "@/components/home/ChallengeSection";
import ClosingCTA from "@/components/home/ClosingCTA";
import DeepDivePlaceholders from "@/components/home/DeepDivePlaceholders";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ChallengeSection />
      <DeepDivePlaceholders />
      <ClosingCTA />
    </>
  );
}
