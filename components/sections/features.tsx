import React from "react";
import {
  EstimateChip,
  GradeBreakdown,
  GradeCard,
  Heatmap,
  LiftHistory,
  LiftList,
} from "@/components/app/progress-widgets";
import { Reveal } from "./reveal";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "Climbing",
    title: "Your top grade, week by week.",
    body: "Synced plots the hardest grade you sent each week and marks the moment you beat your all-time best. No more guessing whether you've plateaued.",
    points: [
      "Month over month delta on the grade you're sending",
      "Grade breakdown shows where your volume actually lands",
      "4W, 12W or all-time, one tap to rescope",
    ],
    visual: (
      <div className="flex flex-col gap-4">
        <GradeCard />
        <div className="hidden sm:block">
          <GradeBreakdown />
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Lifting",
    title: "Know which lifts are actually moving.",
    body: "Every exercise tracks its top set per session. Added weight but lost a rep? Synced converts it to an estimated max, so you know if it counted.",
    points: [
      "Trend arrow on every lift against your last session",
      "Full history per lift, with sessions and sets",
      "Hide or delete lifts you've stopped doing",
    ],
    visual: (
      <div className="flex flex-col gap-4">
        <LiftHistory />
        <EstimateChip />
        <div className="hidden sm:block">
          <LiftList rows={4} />
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Consistency",
    title: "Climb days, lift days, rest days. One grid.",
    body: "Twelve weeks of training at a glance. Rest days show up but don't count, so the number you see is the work you actually put in.",
    points: [
      "Sessions per week, not streaks that guilt-trip you",
      "Plan tomorrow from the Today tab",
      "Recovery readout on Today before you train",
    ],
    visual: <Heatmap />,
  },
];

export function Features() {
  return (
    <section className="relative bg-[#08090A] pb-24 md:pb-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 md:gap-36 md:px-10">
        {FEATURES.map((f, i) => (
          <div
            key={f.eyebrow}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <Reveal>
              <p className="syn-eyebrow text-syn-cyan">{f.eyebrow}</p>
              <h3 className="mt-4 font-geist text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl">
                {f.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">{f.body}</p>
              <ul className="mt-7 flex flex-col gap-3">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-syn-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mx-auto w-full max-w-[393px]">
              {f.visual}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
