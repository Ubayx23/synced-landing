import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ResearchQuote } from "@/components/sections/ResearchQuote";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FoundingMembers } from "@/components/sections/FoundingMembers";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ResearchQuote />
      <FeaturesGrid />
      <FoundingMembers />
      <FAQ />
      <Footer />
    </>
  );
}
