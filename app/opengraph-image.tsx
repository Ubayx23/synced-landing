import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Synced. Plan the week. Send the project. Now in beta on iPhone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(1000px 600px at 50% 30%, #161616 0%, #0A0A0A 60%, #050505 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>synced</span>
          <span style={{ color: "#00E5FF" }}>.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: "#8E8E93",
            letterSpacing: "-0.01em",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Plan the week. Get stronger.{" "}
          <span style={{ color: "#00E5FF", fontStyle: "italic" }}>Send</span>{" "}
          the project.
        </div>
      </div>
    ),
    { ...size },
  );
}
