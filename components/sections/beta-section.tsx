"use client";

import React from "react";
import { BETA_SECTION_ID, openBetaForm } from "@/lib/tally";
import { useBetaRequested } from "@/lib/beta";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    t: "Request access",
    d: "A short form. Thirty seconds, tops.",
  },
  {
    n: "02",
    t: "Get your TestFlight invite",
    d: "We email a link to install the beta through Apple's TestFlight app.",
  },
  {
    n: "03",
    t: "Log your first session",
    d: "Climb or lift. Tell us what's working and what isn't.",
  },
];

export function BetaSection() {
  const requested = useBetaRequested();

  return (
    <section id={BETA_SECTION_ID} className="relative bg-[#08090A] px-4 pb-24 md:px-10 md:pb-36">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#00E5FF]/25 bg-[#0E0F11] px-6 py-14 md:rounded-[2.5rem] md:px-16 md:py-20">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.22),transparent)] blur-xl" />

        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-syn-cyan" />
            Beta open on iPhone
          </span>
          <h2 className="mt-6 font-geist text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white md:text-7xl">
            Try the beta.
          </h2>
          <p className="mx-auto mt-5 max-w-[30rem] text-base leading-relaxed text-white/60 md:text-lg">
            Synced is in beta on iOS through TestFlight. Request access and we&apos;ll send your
            invite to install it.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <span className="font-geist-mono text-sm text-syn-cyan">{s.n}</span>
              <p className="mt-3 font-geist text-lg font-semibold text-white">{s.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="relative mt-12 flex flex-col items-center gap-4 md:mt-14">
          {requested ? (
            <div
              role="status"
              className="inline-flex items-center gap-3 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-7 py-4 text-sm font-semibold text-white md:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-syn-green" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="4,12 10,18 20,6" />
              </svg>
              Request received. Watch your inbox for the TestFlight invite.
            </div>
          ) : (
            <button
              type="button"
              onClick={openBetaForm}
              className="group inline-flex items-center gap-3 rounded-full bg-syn-cyan px-8 py-4 text-base font-bold text-[#08090A] shadow-[0_10px_40px_-8px_rgba(0,229,255,0.6)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-syn-cyan"
            >
              <AppleGlyph className="h-5 w-5" />
              Request beta access
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
          <p className="text-xs text-white/40">iPhone only. Free while in beta.</p>
        </div>
      </Reveal>
    </section>
  );
}

export function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.67 3.55 1.76-3.13 1.77-2.62 5.92.35 7.14-.65 1.58-1.57 3.1-2.57 4.03zm-3.21-14.7c-.55 1.4-1.89 2.37-3.25 2.28.09-1.5 1.05-2.82 2.38-3.4 1.25-.57 2.66-.41 3.25.04-.15.35-.26.72-.38 1.08z" />
    </svg>
  );
}
