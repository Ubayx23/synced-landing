import React from "react";
import { Phone } from "@/components/app/phone";
import { TodayScreen } from "@/components/app/today-screen";
import { ProgressScreen } from "@/components/app/progress-screen";
import { Reveal } from "./reveal";

const SCREENS = [
  {
    key: "today",
    label: "Synced Today tab: planned climb session, recovery 4 of 6, tomorrow's lift and this week's totals",
    title: "Today",
    copy: "What's planned, how recovered you are, and what you did last. One tap logs the session.",
    screen: <TodayScreen />,
    tilt: "md:-rotate-[4deg] md:translate-y-6",
  },
  {
    key: "progress",
    label: "Synced Progress tab: top grade V5 chart, improving lifts and a consistency heatmap",
    title: "Progress",
    copy: "Your grade line, the lifts that are actually moving, and every session on one grid.",
    screen: <ProgressScreen />,
    tilt: "md:rotate-[4deg] md:-translate-y-6",
  },
];

export function AppShowcase() {
  return (
    <section id="app" className="relative overflow-hidden bg-[#08090A] py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.14),transparent)] blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="syn-eyebrow text-syn-cyan">Inside the beta</p>
          <h2 className="mt-4 font-geist text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            Two tabs. The whole picture.
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-base leading-relaxed text-white/60 md:text-lg">
            Synced is built for people who climb and lift. Log either in seconds, then see
            whether the work is actually paying off.
          </p>
        </Reveal>

        <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 [scrollbar-width:none] md:mx-0 md:mt-20 md:justify-center md:gap-16 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {SCREENS.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.12} className="flex snap-center flex-col items-center">
              <div className={`transition-transform duration-700 ${s.tilt}`}>
                <Phone label={s.label} className="[--s:0.74] md:[--s:0.8] lg:[--s:0.86]">
                  {s.screen}
                </Phone>
              </div>
              <div className="mt-8 max-w-[300px] text-center md:mt-14">
                <p className="font-geist text-lg font-semibold text-white">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-white/40 md:hidden">Swipe for Progress →</p>
      </div>
    </section>
  );
}
