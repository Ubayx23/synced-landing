import React from "react";
import { APP, MONO, SANS } from "./tokens";

/* ---------- shared bits ---------- */

export const eyebrow: React.CSSProperties = {
  font: `600 11px ${SANS}`,
  letterSpacing: "0.14em",
  color: APP.dim,
  textTransform: "uppercase",
};

export const card: React.CSSProperties = {
  background: APP.surface,
  boxShadow: `inset 0 0 0 0.5px ${APP.border}`,
  borderRadius: 16,
};

const e1rm = (w: number, r: number) => Math.round(w * (1 + r / 30));

export function SetText({ w, r, color = APP.text, size = 14 }: { w: number; r: number; color?: string; size?: number }) {
  return (
    <span style={{ font: `500 ${size}px ${MONO}`, color, whiteSpace: "nowrap" }}>
      {w === 0 ? "BW" : w} <span style={{ opacity: 0.7 }}>×</span> {r}
    </span>
  );
}

/* ---------- grade hero card ---------- */

// Max grade sent per week, last 12 weeks (Jul 20 to Oct 5).
const WEEKS = [2, 3, 3, 3, 3, 4, 3, 4, 4, 4, 5, 5];
const MONTHS: [string, number][] = [["Jul", 0], ["Aug", 2], ["Sep", 7], ["Oct", 11]];
const FIRSTS = [1, 5, 10]; // weeks where a new all-time best was sent

export function GradeCard({ tooltip = true }: { tooltip?: boolean }) {
  const W = 313;
  const x0 = 30;
  const x1 = 262;
  const gy = (g: number) => 12 + (5 - g) * 34;
  const px = (i: number) => x0 + (i * (x1 - x0)) / (WEEKS.length - 1);
  const pts = WEEKS.map((g, i) => [px(i), gy(g)] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y}`).join(" ");
  const area = `${line} L${x1} 128 L${x0} 128 Z`;
  const [tx, ty] = pts[10];

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[28px]"
        style={{ boxShadow: "0 0 44px -6px rgba(0,229,255,.3)" }}
      />
      <div
        className="relative rounded-[20px] px-5 pb-4 pt-5"
        style={{ background: APP.surface, boxShadow: "0 0 0 1px rgba(0,229,255,.24)" }}
      >
        <div style={eyebrow}>Top grade · October</div>
        <div className="mt-2 flex items-center gap-3">
          <span
            style={{
              font: `600 56px ${MONO}`,
              letterSpacing: "-0.03em",
              color: APP.cyan,
              lineHeight: 1,
              textShadow: "0 0 28px rgba(0,229,255,.35)",
            }}
          >
            V5
          </span>
          <span
            className="rounded-full px-3 py-1.5"
            style={{ font: `600 12px ${SANS}`, color: APP.green, background: "rgba(34,197,94,.14)" }}
          >
            <span style={{ fontFamily: MONO }}>+1</span> from September
          </span>
        </div>

        <svg viewBox={`0 0 ${W} 150`} className="mt-4 block w-full overflow-visible" style={{ fontFamily: SANS }}>
          <defs>
            <linearGradient id="gc-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={APP.cyan} stopOpacity=".26" />
              <stop offset="1" stopColor={APP.cyan} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[5, 4, 3, 2].map((g) => (
            <text key={g} x="0" y={gy(g) + 4} fontSize="11" fill={APP.faint}>
              V{g}
            </text>
          ))}
          <line x1={x0} x2={x1 + 10} y1={gy(5)} y2={gy(5)} stroke={APP.faint} strokeDasharray="4 4" />
          <text x={W} y={gy(5) + 4} fontSize="11" fill={APP.dim} textAnchor="end">
            Best V5
          </text>
          <path d={area} fill="url(#gc-fill)" />
          <path d={line} fill="none" stroke={APP.cyan} strokeWidth="2" strokeLinejoin="round" />
          {FIRSTS.map((i) => (
            <circle key={i} cx={pts[i][0]} cy={pts[i][1]} r={i === 10 ? 5 : 3} fill={APP.cyan} />
          ))}
          {tooltip && <circle cx={tx} cy={ty} r="11" fill={APP.cyan} opacity=".18" />}
          {MONTHS.map(([m, i]) => (
            <text key={m} x={px(i)} y="146" fontSize="10" fontWeight="500" fill={APP.dim} textAnchor="middle">
              {m}
            </text>
          ))}
        </svg>

        {tooltip && (
          <div
            className="absolute rounded-xl px-3 py-1.5"
            style={{
              left: `calc(${(tx / W) * 100}% - 64px)`,
              top: 146,
              background: APP.raised,
              boxShadow: `inset 0 0 0 1px ${APP.border}`,
              font: `500 13px ${SANS}`,
              whiteSpace: "nowrap",
            }}
          >
            First <span style={{ color: APP.cyan, fontFamily: MONO }}>V5</span>
            <span style={{ color: APP.faint }}> · </span>
            <span style={{ color: APP.dim, fontFamily: MONO }}>Oct 3</span>
          </div>
        )}

        <div
          className="mt-3 flex items-center justify-between pt-3"
          style={{ borderTop: `1px solid ${APP.hair}` }}
        >
          <span style={{ font: `400 12px ${SANS}`, color: APP.dim }}>Max grade sent per week</span>
          <span style={{ font: `600 13px ${SANS}`, color: APP.cyan }}>Grade breakdown ›</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- improving cards ---------- */

const IMPROVING = [
  { n: "Incline bench", from: [155, 6], to: [155, 9], date: "Oct 5", v: [186, 186, 191, 191, 196, 196, 202] },
  { n: "Squat", from: [205, 5], to: [225, 5], date: "Oct 2", v: [239, 251, 263, 263, 263] },
  { n: "Pull-up", from: [0, 7], to: [0, 10], date: "Oct 6", v: [7, 8, 10, 10, 10] },
];

function Spark({ v, w = 132, h = 24 }: { v: number[]; w?: number; h?: number }) {
  const mn = Math.min(...v);
  const mx = Math.max(...v);
  const px = (i: number) => 2 + (i * (w - 4)) / (v.length - 1);
  const py = (t: number) => (mx === mn ? h / 2 : h - 3 - ((t - mn) / (mx - mn)) * (h - 6));
  const d = v.map((t, i) => `${i ? "L" : "M"}${px(i).toFixed(1)} ${py(t).toFixed(1)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="block">
      <path d={d} fill="none" stroke={APP.cyan} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx={px(v.length - 1)} cy={py(v[v.length - 1])} r="2.5" fill={APP.cyan} />
    </svg>
  );
}

export function ImprovingRow() {
  return (
    <div className="flex gap-[10px] overflow-hidden">
      {IMPROVING.map((c) => (
        <div key={c.n} className="flex h-[120px] w-[160px] flex-none flex-col justify-between p-[14px]" style={card}>
          <div style={{ font: `600 13px ${SANS}` }}>{c.n}</div>
          <div style={{ font: `500 12px ${MONO}`, color: APP.dim }}>
            {c.from[0] === 0 ? "BW" : c.from[0]}×{c.from[1]} →{" "}
            <span style={{ color: APP.cyan }}>
              {c.to[0] === 0 ? "BW" : c.to[0]}×{c.to[1]}
            </span>
          </div>
          <Spark v={c.v} />
          <div style={{ font: `400 11px ${MONO}`, color: APP.faint }}>{c.date}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- consistency heatmap ---------- */

// One string per week, Monday first. c climb, l lift, r rest, . nothing.
const HEAT = [
  "lc.lc.r", "lcl.cl.", "l.clc.r", "lcl.cl.", ".clcl.r", "lc.lclr",
  "lcl.c.r", "l.clclr", "lc..cl.", "l.c.clr", "clrclcr", "cl     ",
];
const HEAT_MONTHS: [string, number][] = [["Jul", 0], ["Aug", 2], ["Sep", 7], ["Oct", 11]];

export function Heatmap({ legend = true }: { legend?: boolean }) {
  const sessions = HEAT.join("").replace(/[^cl]/g, "").length;
  const cell = 20;
  const gap = 5;
  return (
    <div className="p-4" style={card}>
      <div style={{ font: `400 15px ${SANS}`, color: APP.dim }}>
        <span style={{ fontFamily: MONO, color: APP.text }}>{sessions}</span> sessions ·{" "}
        <span style={{ fontFamily: MONO, color: APP.text }}>{(sessions / 12).toFixed(1)}</span> per week
      </div>
      <div className="mt-4 flex gap-2">
        <div className="flex flex-col pt-[18px]" style={{ gap }}>
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex items-center" style={{ height: cell, font: `500 10px ${SANS}`, color: APP.faint }}>
              {d}
            </span>
          ))}
        </div>
        <div>
          <div className="relative h-[18px]">
            {HEAT_MONTHS.map(([m, i]) => (
              <span key={m} className="absolute top-0" style={{ left: i * (cell + gap), font: `500 10px ${SANS}`, color: APP.faint }}>
                {m}
              </span>
            ))}
          </div>
          <div className="flex" style={{ gap }}>
            {HEAT.map((wk, w) => (
              <div key={w} className="flex flex-col" style={{ gap }}>
                {[...wk].map((ch, d) => (
                  <span
                    key={d}
                    className="block"
                    style={{
                      width: cell,
                      height: cell,
                      borderRadius: 5,
                      background:
                        ch === "c" ? APP.cyan : ch === "r" ? APP.rest : ch === "l" ? "transparent" : ch === "." ? APP.empty : "transparent",
                      boxShadow: ch === "l" ? `inset 0 0 0 1.5px ${APP.cyan}` : undefined,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {legend && (
        <div className="mt-4 flex gap-5 pt-3" style={{ borderTop: `1px solid ${APP.hair}`, font: `400 12px ${SANS}`, color: APP.dim }}>
          {[
            ["Climb", { background: APP.cyan }],
            ["Lift", { boxShadow: `inset 0 0 0 1.5px ${APP.cyan}` }],
            ["Rest", { background: APP.rest }],
          ].map(([l, st]) => (
            <span key={l as string} className="flex items-center gap-1.5">
              <i className="block h-2.5 w-2.5 rounded-[3px]" style={st as React.CSSProperties} />
              {l as string}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- lift list ---------- */

const LIFTS: { n: string; w: number; r: number; t: "up" | "flat" | "down" }[] = [
  { n: "Incline bench", w: 155, r: 9, t: "up" },
  { n: "Lat pulldown", w: 125, r: 7, t: "up" },
  { n: "Squat", w: 225, r: 5, t: "flat" },
  { n: "Bench", w: 185, r: 5, t: "down" },
  { n: "Pull-up", w: 0, r: 10, t: "flat" },
];

function Trend({ t }: { t: "up" | "flat" | "down" }) {
  const color = t === "up" ? APP.green : t === "down" ? APP.amber : APP.text;
  const rot = t === "up" ? -90 : t === "down" ? 90 : 0;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rot}deg)` }}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13,5 20,12 13,19" />
    </svg>
  );
}

export function LiftList({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-hidden" style={card}>
      {LIFTS.slice(0, rows).map((l, i) => (
        <div
          key={l.n}
          className="flex h-14 items-center justify-between px-4"
          style={{ borderTop: i ? `1px solid ${APP.hair}` : undefined }}
        >
          <span style={{ font: `500 15px ${SANS}` }}>{l.n}</span>
          <span className="flex items-center gap-4">
            <SetText w={l.w} r={l.r} color={APP.dim} />
            <Trend t={l.t} />
            <span style={{ color: APP.faint, font: `400 15px ${SANS}` }}>›</span>
          </span>
        </div>
      ))}
      <div className="flex h-12 items-center justify-center" style={{ borderTop: `1px solid ${APP.hair}`, font: `600 14px ${SANS}`, color: APP.cyan }}>
        Show all <span style={{ fontFamily: MONO, marginLeft: 6 }}>14</span>
      </div>
    </div>
  );
}

/* ---------- grade breakdown ---------- */

const SENDS = [
  { g: "V5", c: 2 },
  { g: "V4", c: 11 },
  { g: "V3", c: 14 },
  { g: "V2", c: 9 },
  { g: "V1", c: 3 },
];

export function GradeBreakdown() {
  const max = Math.max(...SENDS.map((s) => s.c));
  const total = SENDS.reduce((a, s) => a + s.c, 0);
  return (
    <div className="p-5" style={card}>
      <div className="flex items-baseline justify-between">
        <span style={{ font: `600 20px ${SANS}` }}>Grade breakdown</span>
        <span style={{ font: `600 15px ${SANS}`, color: APP.cyan }}>Done</span>
      </div>
      <div style={{ font: `400 13px ${SANS}`, color: APP.dim, marginTop: 4 }}>Sends · Last 12 weeks</div>
      <div className="mt-4 grid grid-cols-3 py-3" style={{ borderBlock: `1px solid ${APP.hair}` }}>
        {[
          [String(total), "Sends", APP.text],
          ["V5", "Top grade", APP.cyan],
          ["V3", "Most sent", APP.text],
        ].map(([v, l, c]) => (
          <div key={l}>
            <div style={{ font: `600 22px ${MONO}`, color: c }}>{v}</div>
            <div style={{ font: `400 12px ${SANS}`, color: APP.dim, marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {SENDS.map((s, i) => (
          <div key={s.g} className="flex items-center gap-3">
            <span className="w-7" style={{ font: `600 13px ${MONO}`, color: i === 0 ? APP.cyan : APP.text }}>
              {s.g}
            </span>
            <span className="flex h-6 flex-1 justify-center rounded-md" style={{ background: APP.empty }}>
              <span
                className="block h-full rounded-md"
                style={{ width: `${(s.c / max) * 100}%`, background: i === 0 ? APP.cyan : APP.bar }}
              />
            </span>
            <span className="w-6 text-right" style={{ font: `500 13px ${MONO}`, color: APP.dim }}>
              {s.c}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- lift history ---------- */

const HISTORY: [string, number, number][] = [
  ["8/24", 155, 6],
  ["8/31", 155, 6],
  ["9/7", 155, 7],
  ["9/14", 155, 7],
  ["9/21", 155, 8],
  ["9/28", 155, 8],
  ["10/5", 155, 9],
];

export function LiftHistory() {
  const est = HISTORY.map(([, w, r]) => e1rm(w, r));
  const mn = Math.min(...est);
  const mx = Math.max(...est);
  const gain = mx - est[0];
  return (
    <div className="p-5" style={card}>
      <div className="flex items-baseline justify-between">
        <span style={{ font: `600 20px ${SANS}` }}>Incline bench</span>
        <span style={{ font: `600 15px ${SANS}`, color: APP.cyan }}>Done</span>
      </div>
      <div style={{ font: `400 13px ${SANS}`, color: APP.dim, marginTop: 4 }}>
        Top set per session · Last 12 weeks · lbs
      </div>
      <div className="mt-4 grid grid-cols-[1fr_1.2fr_0.7fr] gap-2 py-3" style={{ borderBlock: `1px solid ${APP.hair}` }}>
        <div>
          <SetText w={155} r={9} size={18} />
          <div style={{ font: `400 12px ${SANS}`, color: APP.dim, marginTop: 4 }}>Latest top set</div>
        </div>
        <div>
          <div style={{ font: `600 18px ${MONO}`, color: APP.green, whiteSpace: "nowrap" }}>+{gain} lbs est.</div>
          <div style={{ font: `400 12px ${SANS}`, color: APP.dim, marginTop: 4 }}>Since Aug 24</div>
        </div>
        <div>
          <div style={{ font: `600 18px ${MONO}` }}>{HISTORY.length}</div>
          <div style={{ font: `400 12px ${SANS}`, color: APP.dim, marginTop: 4 }}>Sessions</div>
        </div>
      </div>
      <div className="mt-5 flex h-[172px] items-end justify-between gap-1.5">
        {HISTORY.map(([d, w, r], i) => {
          const last = i === HISTORY.length - 1;
          const h = 36 + ((est[i] - mn) / (mx - mn)) * 84;
          return (
            <div key={d} className="flex flex-1 flex-col items-center gap-1.5">
              <span style={{ font: `500 10px ${MONO}`, color: last ? APP.cyan : APP.dim, whiteSpace: "nowrap" }}>
                {w}×{r}
              </span>
              <span className="block w-full max-w-[34px] rounded-md" style={{ height: h, background: last ? APP.cyan : APP.bar }} />
              <span style={{ font: `400 10px ${MONO}`, color: APP.dim }}>{d}</span>
              <span style={{ font: `400 10px ${MONO}`, color: APP.faint }}>≈{est[i]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EstimateChip() {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3" style={card}>
      <span style={{ font: `500 14px ${SANS}` }}>Lat pulldown</span>
      <span style={{ font: `500 13px ${MONO}`, color: APP.dim }}>
        120×8 → <span style={{ color: APP.text }}>125×7</span>
      </span>
      <span style={{ font: `600 13px ${MONO}`, color: APP.green }}>+{e1rm(125, 7) - e1rm(120, 8)} lbs est.</span>
    </div>
  );
}
