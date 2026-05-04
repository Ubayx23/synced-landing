import { Check } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FadeUp } from "@/components/primitives/FadeUp";
import { WaitlistButton } from "@/components/primitives/WaitlistButton";

const perks = [
  "Free for life. No subscription, ever.",
  "Direct line to the founder for feature input.",
  "Early access two weeks before public launch.",
  "Founding member badge in-app.",
];

export function FoundingMembers() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <MagicCard
            gradientColor="#00E5FF"
            gradientOpacity={0.22}
            className="p-8 md:p-14"
          >
            <div className="flex flex-col items-start gap-6 md:items-center md:text-center">
              <Eyebrow accent>Founding members</Eyebrow>
              <h2 className="max-w-2xl text-3xl font-bold tracking-display text-syn-text md:text-4xl">
                Help shape v1. Get the app{" "}
                <span className="text-syn-cyan">free for life.</span>
              </h2>
              <ul className="grid w-full gap-3 md:max-w-xl md:grid-cols-2 md:text-left">
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
              <div className="pt-2">
                <WaitlistButton variant="cta" label="Claim your spot" />
              </div>
            </div>
          </MagicCard>
        </FadeUp>
      </div>
    </section>
  );
}
