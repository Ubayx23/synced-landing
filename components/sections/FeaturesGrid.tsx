import { Activity, Apple, LineChart, Sparkles } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FadeUp } from "@/components/primitives/FadeUp";

export function FeaturesGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-3 flex justify-center">
          <Eyebrow accent>Features</Eyebrow>
        </FadeUp>
        <FadeUp delay={80} className="mb-14 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-display text-syn-text md:text-5xl">
            One feedback loop. <span className="text-syn-cyan">Fuel in,</span>{" "}
            performance out.
          </h2>
        </FadeUp>

        <FadeUp delay={140}>
          <BentoGrid>
            <BentoCard
              name="Pre-workout fuel × performance"
              description="Log what you ate before a session, then rate the session in 30 seconds. Synced finds the foods that consistently show up on your best days, and the ones that drag."
              Icon={Sparkles}
              cta="The wedge"
              className="md:col-span-2"
              background={
                <div className="absolute -right-20 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_70%_30%,var(--syn-cyan-glow),transparent_60%)]" />
              }
            />
            <BentoCard
              name="Recovery score"
              description="A daily readiness number that respects sleep, soreness, and HRV. Ground truth, not vibes."
              Icon={Activity}
            />
            <BentoCard
              name="Fuel log"
              description="Quick-tap meals from a custom list. No macro counting unless you want it."
              Icon={Apple}
            />
            <BentoCard
              name="Trends that matter"
              description="Weekly view of what improved, what regressed, and the one thing to try next."
              Icon={LineChart}
              className="md:col-span-2"
              background={
                <div className="absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--syn-cyan-glow),transparent_60%)] blur-2xl" />
              }
            />
          </BentoGrid>
        </FadeUp>
      </div>
    </section>
  );
}
