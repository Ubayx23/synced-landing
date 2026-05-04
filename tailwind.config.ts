import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        syn: {
          bg: "var(--syn-bg)",
          "bg-deep": "var(--syn-bg-deep)",
          surface: "var(--syn-surface)",
          "surface-hi": "var(--syn-surface-hi)",
          border: "var(--syn-border)",
          text: "var(--syn-text)",
          "text-dim": "var(--syn-text-dim)",
          "text-faint": "var(--syn-text-faint)",
          cyan: "var(--syn-cyan)",
          "cyan-soft": "var(--syn-cyan-soft)",
          green: "var(--syn-green)",
        },
      },
      borderRadius: {
        "syn-button": "var(--syn-r-button)",
        "syn-card": "var(--syn-r-card)",
        "syn-pill": "var(--syn-r-pill)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wordmark: "-0.04em",
        display: "-0.03em",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        "fade-up": "fade-up 500ms ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
