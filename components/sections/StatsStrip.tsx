import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FadeUp } from "@/components/primitives/FadeUp";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 73, suffix: "%", label: "Lifters who under-fuel" },
  { value: 4, suffix: "h", label: "Carb window before lift" },
  { value: 2.1, suffix: "x", label: "Recovery delta, fueled" },
  { value: 1, label: "Number to track it all" },
];

export function StatsStrip() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <Card className="grid grid-cols-2 divide-syn-border md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center gap-2 px-4 py-8 ${
                  i < 2 ? "border-b border-syn-border md:border-b-0" : ""
                } ${i % 2 === 1 ? "border-l border-syn-border md:border-l-0" : ""}`}
              >
                <span className="text-3xl font-bold text-syn-cyan md:text-4xl">
                  <NumberTicker
                    value={s.value}
                    decimals={Number.isInteger(s.value) ? 0 : 1}
                    suffix={s.suffix}
                  />
                </span>
                <Eyebrow className="text-center">{s.label}</Eyebrow>
              </div>
            ))}
          </Card>
        </FadeUp>
      </div>
    </section>
  );
}
