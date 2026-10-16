import React from "react";
import { StatusBar, TabBar } from "./phone";
import { APP, MONO, SANS } from "./tokens";

type Ind = "climb" | "lift" | "rest" | "plan" | null;

const WEEK: { l: string; n: number; ind: Ind; today?: boolean; fut?: boolean }[] = [
  { l: "M", n: 5, ind: "climb" },
  { l: "T", n: 6, ind: "lift" },
  { l: "W", n: 7, ind: "plan", today: true },
  { l: "T", n: 8, ind: "plan", fut: true },
  { l: "F", n: 9, ind: null, fut: true },
  { l: "S", n: 10, ind: "plan", fut: true },
  { l: "S", n: 11, ind: null, fut: true },
];

const eyebrow: React.CSSProperties = {
  font: `600 11px ${SANS}`,
  letterSpacing: "0.14em",
  color: APP.dim,
  textTransform: "uppercase",
};

const surface: React.CSSProperties = {
  background: APP.surface,
  boxShadow: `inset 0 0 0 0.5px ${APP.border}`,
  borderRadius: 16,
  position: "relative",
};

export function Indicator({ kind, size = 6 }: { kind: Ind; size?: number }) {
  if (!kind) return null;
  const base: React.CSSProperties = { width: size, height: size, borderRadius: "50%", display: "block" };
  if (kind === "climb") return <i style={{ ...base, background: APP.cyan }} />;
  if (kind === "lift") return <i style={{ ...base, border: `1.5px solid ${APP.cyan}` }} />;
  if (kind === "rest") return <i style={{ ...base, background: APP.rest }} />;
  return <i style={{ ...base, border: `1.3px dashed ${APP.dim}` }} />;
}

const Chev = () => (
  <svg
    className="absolute right-[14px] top-[14px]"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={APP.faint}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,5 16,12 9,19" />
  </svg>
);

export function TodayScreen() {
  return (
    <>
      <StatusBar />
      <div className="mt-2 flex h-12 flex-none items-center justify-between px-6">
        <div>
          <div style={eyebrow}>Today</div>
          <div style={{ font: `400 15px ${MONO}`, marginTop: 5 }}>Wednesday, Oct 7</div>
        </div>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ background: APP.raised, font: `500 13px ${SANS}`, color: APP.dim }}
        >
          AK
        </div>
      </div>

      <div className="mt-6 flex h-[78px] flex-none flex-col justify-between">
        <div className="grid grid-cols-7 gap-[2px] px-[18px]">
          {WEEK.map((d) => (
            <div
              key={d.n}
              className="flex flex-col items-center gap-[5px] rounded-xl pb-2 pt-[7px]"
              style={{ border: `1px solid ${d.today ? "rgba(0,229,255,.5)" : "transparent"}` }}
            >
              <span style={{ font: `500 11px ${SANS}`, color: APP.dim, lineHeight: "13px" }}>{d.l}</span>
              <span
                style={{
                  font: `${d.today ? 500 : 400} 15px ${MONO}`,
                  lineHeight: "15px",
                  color: d.today ? APP.cyan : d.fut ? APP.dim : APP.text,
                }}
              >
                {d.n}
              </span>
              <span className="flex h-1.5 items-center">
                <Indicator kind={d.ind} />
              </span>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ font: `400 12px ${SANS}`, color: APP.dim, lineHeight: "14px" }}>
          <span style={{ fontFamily: MONO }}>4</span> of <span style={{ fontFamily: MONO }}>7</span> trained this week
        </div>
      </div>

      <div className="relative mx-6 mt-[26px] h-40 flex-none">
        <div
          className="pointer-events-none absolute -inset-x-[22px] -inset-y-7"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(0,229,255,.15), rgba(0,229,255,0) 100%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="relative flex h-full flex-col justify-between rounded-[20px] p-[18px]"
          style={{
            background: APP.surface,
            boxShadow: "0 0 0 .5px rgba(0,229,255,.25), 0 0 32px rgba(0,229,255,.12)",
          }}
        >
          <span className="absolute right-[18px] top-[18px]" style={{ font: `500 12px ${SANS}`, color: APP.cyan }}>
            Change
          </span>
          <div className="flex items-center gap-[14px]">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl" style={{ background: APP.raised }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round">
                <polyline points="3,19 9,9 13,14 16,10 21,19 3,19" />
              </svg>
            </div>
            <div>
              <div style={eyebrow}>Climb session</div>
              <div style={{ font: `500 18px ${SANS}`, letterSpacing: "-0.02em", marginTop: 5 }}>Planned for today</div>
            </div>
          </div>
          <div
            className="flex h-[50px] items-center justify-center rounded-[14px]"
            style={{ background: APP.cyan, color: APP.bg, font: `700 16px ${SANS}`, letterSpacing: "-0.01em" }}
          >
            Log climb session
          </div>
        </div>
      </div>

      <div className="mx-6 mt-5 grid flex-none grid-cols-2 gap-3">
        <div className="flex h-[95px] flex-col justify-between px-4 py-[14px]" style={surface}>
          <Chev />
          <div style={eyebrow}>Recovery</div>
          <div>
            <div style={{ font: `500 30px ${MONO}`, color: APP.cyan, lineHeight: 1, letterSpacing: "-0.02em" }}>
              4<small style={{ font: `400 15px ${MONO}`, color: APP.dim, marginLeft: 4 }}>/ 6</small>
            </div>
            <div style={{ font: `400 13px ${SANS}`, color: APP.dim, marginTop: 5 }}>ready</div>
          </div>
        </div>
        <div className="flex h-[95px] flex-col justify-between px-4 py-[14px]" style={surface}>
          <Chev />
          <div style={eyebrow}>Last</div>
          <div>
            <div style={{ font: `500 26px ${SANS}`, letterSpacing: "-0.02em", lineHeight: "30px" }}>Lift</div>
            <div style={{ font: `400 13px ${SANS}`, color: APP.dim, marginTop: 5 }}>Yesterday</div>
          </div>
        </div>
      </div>

      <WideCard className="mt-4 h-16" label="Tomorrow">
        <div className="flex items-baseline justify-between gap-3">
          <span style={{ font: `500 15px ${SANS}`, letterSpacing: "-0.01em" }}>
            LIFT <span style={{ color: APP.dim, fontWeight: 400 }}>· Back + Arms</span>
          </span>
          <span style={{ font: `500 12px ${SANS}`, color: APP.dim }}>Change</span>
        </div>
      </WideCard>

      <WideCard className="mt-3 h-16" label="Last note · Yesterday · Lift">
        <div className="truncate" style={{ font: `400 14px ${SANS}` }}>
          Felt strong on bench. Push for 190 next session.
        </div>
      </WideCard>

      <WideCard className="mt-3 h-[60px]" label="This week">
        <div className="flex items-baseline gap-2" style={{ font: `400 13px ${SANS}`, color: APP.dim }}>
          <Stat n="3" l="climbs" />
          <span style={{ color: APP.faint }}>·</span>
          <Stat n="2" l="lifts" />
          <span style={{ color: APP.faint }}>·</span>
          <Stat n="1,850" l="lbs volume" />
        </div>
      </WideCard>

      <TabBar active="today" />
    </>
  );
}

function WideCard({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-6 flex flex-none flex-col justify-center gap-2 px-4 ${className}`} style={surface}>
      <div style={eyebrow}>{label}</div>
      {children}
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <span>
      <b style={{ font: `500 15px ${MONO}`, color: APP.text, marginRight: 3 }}>{n}</b>
      {l}
    </span>
  );
}
