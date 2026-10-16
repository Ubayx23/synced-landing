import { Component as Hero } from "@/components/ui/hero";
import { SyncedFooter } from "@/components/ui/motion-footer";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Features } from "@/components/sections/features";
import { BetaSection } from "@/components/sections/beta-section";

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <AppShowcase />
      <Features />
      <BetaSection />
      <SyncedFooter />
    </div>
  );
}
