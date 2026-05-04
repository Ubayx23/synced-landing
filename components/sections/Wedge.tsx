import { Apple, Activity, LineChart } from "lucide-react";
import { FadeUp } from "@/components/primitives/FadeUp";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const steps: { Icon: typeof Apple; title: string; body: string }[] = [
  {
    Icon: Apple,
    title: "Log fuel",
    body: "Quick-tap what you ate before the session. No macro counting.",
  },
  {
    Icon: Activity,
    title: "Rate the session",
    body: "Thirty seconds after you train. Effort, energy, recovery.",
  },
  {
    Icon: LineChart,
    title: "See the pattern",
    body: "Synced surfaces the foods that show up on your best days.",
  },
];

export function Wedge() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeUp className="mb-3 flex justify-center">
          <Eyebrow accent>The wedge</Eyebrow>
        </FadeUp>
        <FadeUp delay={80} className="mb-4 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-display text-syn-text md:text-4xl">
            One feedback loop nobody else tracks.
          </h2>
        </FadeUp>
        <FadeUp delay={140} className="mb-16 text-center">
          <p className="mx-auto max-w-xl text-syn-text-dim">
            Most apps track food or recovery in isolation. Synced ties them
            together so you stop guessing what fuels your best work.
          </p>
        </FadeUp>

        <FadeUp delay={200}>
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map(({ Icon, title, body }, i) => (
              <li
                key={title}
                className="rounded-syn-card border border-syn-border bg-syn-surface/60 p-6 backdrop-blur"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-syn-pill border border-syn-cyan/30 bg-syn-cyan/[0.06] text-xs font-semibold text-syn-cyan">
                    {i + 1}
                  </span>
                  <Icon
                    className="h-5 w-5 text-syn-cyan"
                    aria-hidden
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-syn-text">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-syn-text-dim">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </FadeUp>
      </div>
    </section>
  );
}
