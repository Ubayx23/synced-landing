import { FadeUp } from "@/components/primitives/FadeUp";
import { StatusPill } from "@/components/primitives/StatusPill";
import { WaitlistButton } from "@/components/primitives/WaitlistButton";
import { Wordmark } from "@/components/primitives/Wordmark";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <FadeUp triggerOnMount delay={0}>
          <Wordmark size="md" />
        </FadeUp>
        <FadeUp triggerOnMount delay={120} className="mt-8">
          <StatusPill label="Coming soon on iOS" />
        </FadeUp>
        <FadeUp triggerOnMount delay={220} className="mt-8">
          <h1
            className="font-bold tracking-display text-syn-text"
            style={{ fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 1.05 }}
          >
            Eat. Train.{" "}
            <span className="text-syn-cyan">Decode</span> the connection.
          </h1>
        </FadeUp>
        <FadeUp triggerOnMount delay={320} className="mt-6">
          <p className="max-w-lg text-base leading-relaxed text-syn-text-dim md:text-lg">
            The first recovery tracker that links what you ate before a workout
            to how you felt and performed during it.
          </p>
        </FadeUp>
        <FadeUp triggerOnMount delay={420} className="mt-10">
          <WaitlistButton variant="cta" label="Join the waitlist" />
        </FadeUp>
        <FadeUp triggerOnMount delay={520} className="mt-4">
          <p className="text-xs text-syn-text-faint">
            $5 founding access. iOS, launching soon.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
