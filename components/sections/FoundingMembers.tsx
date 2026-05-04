import { Check } from "lucide-react";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FadeUp } from "@/components/primitives/FadeUp";
import { WaitlistButton } from "@/components/primitives/WaitlistButton";

const perks = [
  "One-time $5. No subscription, no upsell.",
  "Direct line to the founder for feature input.",
  "Early access two weeks before public launch.",
];

export function FoundingMembers() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <FadeUp>
          <div className="rounded-syn-card border border-syn-border bg-syn-surface/60 p-8 text-center backdrop-blur md:p-12">
            <Eyebrow accent>Founding members</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-display text-syn-text md:text-4xl">
              Help shape v1. Get founding access for{" "}
              <span className="text-syn-cyan">just $5.</span>
            </h2>
            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-3 text-sm text-syn-text-dim"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-syn-cyan"
                    aria-hidden
                  />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <WaitlistButton variant="cta" label="Claim your spot" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
