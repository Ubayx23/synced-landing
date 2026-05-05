"use client";

import React from "react";
import { motion } from "motion/react";
import { openWaitlist } from "@/lib/tally";

const ACCENT = "#00E5FF";
const SHADOW_LAYER = "#003B47";
const buildShadow = (max: number) =>
  Array.from({ length: max }, (_, i) => {
    const o = i + 1;
    return `${o}px ${o}px 0 ${SHADOW_LAYER}`;
  }).join(", ");
const HEADLINE_SHADOW_MOBILE = buildShadow(6);
const HEADLINE_SHADOW_DESKTOP = buildShadow(14);

const ArrowAccentLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-full w-full overflow-visible stroke-current"
    style={{ color: ACCENT }}
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
);

const ArrowAccentRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-full w-full overflow-visible stroke-current"
    style={{ color: ACCENT }}
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
);

const ArrowBlack = () => (
  <svg
    viewBox="0 0 100 100"
    className="h-full w-full overflow-visible stroke-current text-black"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

const CircularBadge = () => (
  <button
    type="button"
    onClick={openWaitlist}
    aria-label="Join the waitlist"
    className="relative flex h-28 w-28 -rotate-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-black/10 shadow-xl transition-transform hover:scale-105 md:h-36 md:w-36"
    style={{ backgroundColor: ACCENT }}
  >
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path
          id="circlePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text
          className="text-[11px] font-black uppercase tracking-[0.18em]"
          fill="black"
        >
          <textPath href="#circlePath" startOffset="0%">
            JOIN THE WAITLIST · JOIN THE WAITLIST ·
          </textPath>
        </text>
      </svg>
    </div>
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="h-10 w-10 overflow-visible stroke-current text-black"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </button>
);

export const Component = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:text-black"
      style={
        {
          backgroundColor: "#08090A",
          ["--tw-selection-bg" as string]: ACCENT,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        ::selection {
          background: ${ACCENT};
          color: black;
        }
        .syn-headline {
          text-shadow: ${HEADLINE_SHADOW_MOBILE};
        }
        @media (min-width: 768px) {
          .syn-headline {
            text-shadow: ${HEADLINE_SHADOW_DESKTOP};
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <nav className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-6 py-6 md:px-10 md:py-8">
        <span className="select-none text-2xl font-bold tracking-[-0.04em] text-white">
          synced<span style={{ color: ACCENT }}>.</span>
        </span>

        <span
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white/70 backdrop-blur-sm"
          aria-label="iPhone only"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 shrink-0"
            fill="currentColor"
            aria-hidden
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.67 3.55 1.76-3.13 1.77-2.62 5.92.35 7.14-.65 1.58-1.57 3.1-2.57 4.03zm-3.21-14.7c-.55 1.4-1.89 2.37-3.25 2.28.09-1.5 1.05-2.82 2.38-3.4 1.25-.57 2.66-.41 3.25.04-.15.35-.26.72-.38 1.08z" />
          </svg>
          <span>iPhone only</span>
        </span>
      </nav>

      <main className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-4 pb-32 pt-8 md:pb-48 md:pt-12">
        <div className="relative z-10 mx-auto mb-16 mt-4 flex w-full max-w-5xl flex-col items-center justify-center text-center">
          <div className="relative z-10 flex w-full flex-col items-center space-y-1 md:space-y-4">
            <div className="relative z-30 flex w-full justify-center md:justify-start md:pl-[25%]">
              <h1
                className="syn-headline m-0 p-0 font-black uppercase leading-[0.85] tracking-tighter text-white"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  fontSize: "clamp(3rem, 14vw, 160px)",
                }}
              >
                FUEL.
              </h1>
            </div>

            <div className="relative z-20 flex w-full justify-center">
              <h1
                className="syn-headline m-0 p-0 font-black uppercase leading-[0.85] tracking-tighter text-white"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  fontSize: "clamp(3.5rem, 17vw, 220px)",
                }}
              >
                TRAIN.
              </h1>
            </div>

            <div className="relative z-10 flex w-full justify-center md:justify-start md:pl-[30%]">
              <h1
                className="syn-headline m-0 p-0 font-black uppercase leading-[0.85] tracking-tighter"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  fontSize: "clamp(3rem, 14vw, 160px)",
                  color: ACCENT,
                }}
              >
                DECODE.
              </h1>
            </div>

            <p className="relative z-10 mt-6 max-w-[300px] self-center text-center text-sm font-medium leading-[1.5] text-white/70 md:mt-8 md:max-w-[540px] md:text-lg">
              You&apos;ve been training without the data that actually matters.
            </p>

            <div className="pt-8 md:hidden">
              <button
                type="button"
                onClick={openWaitlist}
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold text-[#08090A] shadow-[0_8px_24px_rgba(0,229,255,0.35)]"
                style={{ backgroundColor: ACCENT }}
              >
                Join the waitlist
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 hidden h-full w-full md:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[0%] top-[5%] z-20 h-24 w-24 md:left-[10%] md:h-32 md:w-32"
            >
              <ArrowAccentLeft />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute right-[0%] top-[5%] z-20 h-24 w-24 md:right-[10%] md:h-32 md:w-32"
            >
              <ArrowAccentRight />
            </motion.div>

            <div className="pointer-events-auto absolute bottom-[-10%] left-[0%] z-40 md:left-[10%]">
              <CircularBadge />
            </div>
          </div>
        </div>
      </main>

      <section className="relative z-20 mt-auto w-full rounded-t-[2.5rem] bg-white px-6 py-12 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.4)] md:rounded-t-[3.5rem] md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <FeatureCard
            title={
              <>
                LOG
                <br />
                FUEL
              </>
            }
            caption="Quick-tap what you ate. No macro counting."
            visual={
              <div className="flex items-center gap-3 rounded-2xl bg-[#08090A] px-4 py-3 text-white shadow-lg">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="text-xs font-bold">chicken bowl</span>
                <span className="text-[10px] text-white/60">·</span>
                <span className="text-[10px] font-mono text-white/70">
                  7:42am
                </span>
              </div>
            }
            connector
          />

          <FeatureCard
            title={
              <>
                RATE THE
                <br />
                SESSION
              </>
            }
            caption="Thirty seconds after you train."
            visual={
              <div className="flex items-center gap-2 rounded-full bg-[#08090A] px-5 py-3 shadow-lg">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: i < 4 ? ACCENT : "transparent",
                      border: i < 4 ? "none" : `1.5px solid ${ACCENT}`,
                    }}
                  />
                ))}
              </div>
            }
            connector
          />

          <FeatureCard
            title={
              <>
                SEE THE
                <br />
                PATTERN
              </>
            }
            caption="The foods that show up on your best days."
            visual={
              <div className="relative flex items-end gap-1.5 rounded-2xl bg-[#08090A] px-5 py-4 shadow-lg">
                {[14, 22, 12, 28, 18].map((h, i) => (
                  <span
                    key={i}
                    className="w-2.5 rounded-sm"
                    style={{ backgroundColor: ACCENT, height: `${h}px` }}
                  />
                ))}
                <span
                  className="absolute -bottom-2 left-8 h-5 w-5 rotate-45"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

function FeatureCard({
  title,
  caption,
  visual,
  connector = false,
}: {
  title: React.ReactNode;
  caption: string;
  visual: React.ReactNode;
  connector?: boolean;
}) {
  return (
    <div className="relative flex h-64 flex-col items-center rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-8 text-center">
      <h3 className="mb-2 text-xl font-black uppercase leading-tight md:text-2xl">
        {title}
      </h3>
      <p className="mb-auto text-[10px] font-bold text-black/60 md:text-xs">
        {caption}
      </p>
      <div className="relative mt-6 flex w-full justify-center">{visual}</div>
      {connector && (
        <div className="absolute -right-12 bottom-8 z-30 hidden h-16 w-16 md:block">
          <ArrowBlack />
        </div>
      )}
    </div>
  );
}
