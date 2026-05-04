"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

export function MagicCard({
  children,
  className,
  gradientColor = "#00E5FF",
  gradientOpacity = 0.18,
  gradientSize = 320,
}: {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientSize?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
          "--magic-color": gradientColor,
          "--magic-size": `${gradientSize}px`,
          "--magic-opacity": String(gradientOpacity),
        } as React.CSSProperties
      }
      className={cn(
        "group relative overflow-hidden rounded-syn-card border border-syn-border",
        "bg-gradient-to-br from-syn-surface-hi to-syn-surface",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(var(--magic-size) circle at var(--mx) var(--my), color-mix(in srgb, var(--magic-color) calc(var(--magic-opacity) * 100%), transparent), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
