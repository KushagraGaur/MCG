import ClosingCTA from "@/components/home/ClosingCTA";
import EngagementFlow from "@/components/home/EngagementFlow";
import Hero from "@/components/home/Hero";
import FinancialImpactSnapshot from "@/components/home/FinancialImpactSnapshot";
import ValueAccelerationVisuals from "@/components/home/ValueAccelerationVisuals";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueAccelerationVisuals />
      <FinancialImpactSnapshot />
      <WhoWeWorkWith />
      <EngagementFlow />
      <ClosingCTA />
    </>
  );
}
