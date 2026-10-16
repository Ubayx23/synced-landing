import React from "react";
import { APP, SANS } from "./tokens";

// Screens are authored at iPhone 15 points (393 x 852) and scaled down with
// the --s custom property, so every mock matches the design specs 1:1.
export const SCREEN_W = 393;
export const SCREEN_H = 852;
const BEZEL = 10;

export function Phone({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  /** Must set --s, for example "[--s:0.72] md:[--s:0.82]". */
  className?: string;
  label: string;
}) {
  const outerW = SCREEN_W + BEZEL * 2;
  const outerH = SCREEN_H + BEZEL * 2;
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative shrink-0 ${className}`}
      style={{
        width: `calc(${outerW}px * var(--s))`,
        height: `calc(${outerH}px * var(--s))`,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: outerW,
          height: outerH,
          transform: "scale(var(--s))",
          padding: BEZEL,
          borderRadius: 58,
          background: "linear-gradient(145deg, #2a2a2e, #0d0d0f 40%, #1c1c20)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 60px -10px rgba(0,229,255,0.15)",
        }}
      >
        <div
          aria-hidden
          className="relative flex flex-col overflow-hidden"
          style={{
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 48,
            background: APP.bg,
            color: APP.text,
            fontFamily: SANS,
          }}
        >
          <div
            className="absolute left-1/2 top-[11px] z-30 h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-black"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div
      className="flex h-[54px] flex-none items-center justify-between pl-[40px] pr-[30px] pt-1"
      style={{ font: `600 17px ${SANS}` }}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) => (
            <i key={h} className="block w-[3px] rounded-[1px] bg-white" style={{ height: h }} />
          ))}
        </span>
        <span className="h-3 w-[25px] rounded-[4px] border border-white/40 p-[1.5px]">
          <i className="block h-full w-3/4 rounded-[2px] bg-white" />
        </span>
      </span>
    </div>
  );
}

export function TabBar({ active }: { active: "today" | "progress" }) {
  const tab = (key: "today" | "progress", label: string, icon: React.ReactNode) => (
    <div
      className="flex flex-col items-center gap-1"
      style={{
        font: `500 10px ${SANS}`,
        color: active === key ? APP.cyan : APP.dim,
      }}
    >
      {icon}
      {label}
    </div>
  );
  const svg = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <div
      className="absolute inset-x-0 bottom-0 z-20 grid h-[85px] grid-cols-2 px-[66px] pt-2"
      style={{ background: APP.tab, borderTop: `0.5px solid ${APP.border}` }}
    >
      {tab(
        "today",
        "Today",
        <svg {...svg}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>,
      )}
      {tab(
        "progress",
        "Progress",
        <svg {...svg}>
          <line x1="6" y1="19" x2="6" y2="14" />
          <line x1="12" y1="19" x2="12" y2="10" />
          <line x1="18" y1="19" x2="18" y2="5" />
        </svg>,
      )}
      <div className="absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-[3px] bg-white" />
    </div>
  );
}
