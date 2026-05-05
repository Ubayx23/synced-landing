import { Component as Hero } from "@/components/ui/hero";
import { SyncedFooter } from "@/components/ui/motion-footer";

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <SyncedFooter />
    </div>
  );
}
