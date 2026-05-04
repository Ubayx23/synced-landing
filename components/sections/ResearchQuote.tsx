import { FadeUp } from "@/components/primitives/FadeUp";

export function ResearchQuote() {
  return (
    <section className="bg-syn-surface px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <blockquote className="text-2xl font-semibold leading-snug tracking-[-0.01em] text-syn-text md:text-3xl">
            &ldquo;Pre-exercise carbohydrate availability is one of the most
            consistent predictors of perceived effort and time to fatigue. Yet
            most lifters never measure it.&rdquo;
          </blockquote>
        </FadeUp>
        <FadeUp delay={120}>
          <cite className="mt-6 block text-sm not-italic text-syn-text-dim">
            International Society of Sports Nutrition,
            <span className="text-syn-text-faint"> position stand</span>
          </cite>
        </FadeUp>
      </div>
    </section>
  );
}
