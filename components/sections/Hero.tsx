import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { FadeUp } from "@/components/primitives/FadeUp";
import { StatusPill } from "@/components/primitives/StatusPill";
import { WaitlistButton } from "@/components/primitives/WaitlistButton";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-20">
      <AnimatedGridPattern
        numSquares={28}
        maxOpacity={0.18}
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_30%,var(--syn-cyan-glow),transparent_60%)]"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <FadeUp triggerOnMount delay={0}>
          <StatusPill label="Coming soon" />
        </FadeUp>
        <FadeUp triggerOnMount delay={120} className="mt-8">
          <h1
            className="font-bold tracking-display text-syn-text"
            style={{ fontSize: "clamp(44px, 8vw, 88px)", lineHeight: 1.02 }}
          >
            Train hard. Fuel right.{" "}
            <em className="not-italic italic text-syn-cyan">Decode</em> the
            connection.
          </h1>
        </FadeUp>
        <FadeUp triggerOnMount delay={220} className="mt-6">
          <p className="max-w-xl text-base leading-relaxed text-syn-text-dim md:text-lg">
            Synced is the first recovery tracker that links what you ate before
            a workout to how you felt and performed during it. Stop guessing
            what fuels your best sessions.
          </p>
        </FadeUp>
        <FadeUp triggerOnMount delay={320} className="mt-10">
          <WaitlistButton variant="cta" label="Join the waitlist" />
        </FadeUp>
        <FadeUp triggerOnMount delay={420} className="mt-4">
          <p className="text-xs text-syn-text-faint">
            Free for founding members. iOS, launching soon.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
