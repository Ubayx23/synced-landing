import React from "react";
import { StatusBar, TabBar } from "./phone";
import { eyebrow, GradeCard, Heatmap, ImprovingRow } from "./progress-widgets";
import { APP, MONO, SANS } from "./tokens";

export function ProgressScreen() {
  return (
    <>
      <StatusBar />
      <div className="flex h-11 flex-none items-center justify-between px-5">
        <span style={{ ...eyebrow, fontSize: 13 }}>Progress</span>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full"
          style={{ background: APP.raised, font: `500 13px ${SANS}`, color: APP.dim }}
        >
          AK
        </span>
      </div>

      <div
        className="mx-5 mt-3 grid h-9 flex-none grid-cols-3 rounded-[10px] p-[3px]"
        style={{ background: APP.surface, boxShadow: `inset 0 0 0 0.5px ${APP.border}` }}
      >
        {["4W", "12W", "ALL"].map((s) => (
          <span
            key={s}
            className="flex items-center justify-center rounded-[7px]"
            style={{
              font: `600 13px ${MONO}`,
              color: s === "12W" ? APP.cyan : APP.dim,
              background: s === "12W" ? APP.raised : "transparent",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mx-5 mt-5 flex-none">
        <GradeCard tooltip={false} />
      </div>

      <div className="mx-5 mt-7 flex flex-none items-baseline justify-between">
        <span style={eyebrow}>Improving</span>
        <span style={{ font: `400 13px ${SANS}`, color: APP.dim }}>
          <span style={{ fontFamily: MONO }}>3</span> lifts
        </span>
      </div>
      <div className="ml-5 mt-3 flex-none">
        <ImprovingRow />
      </div>

      <div className="mx-5 mt-7 flex-none">
        <span style={eyebrow}>Consistency</span>
      </div>
      <div className="mx-5 mt-3 flex-none">
        <Heatmap />
      </div>

      <TabBar active="progress" />
    </>
  );
}
