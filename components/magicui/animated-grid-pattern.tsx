"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  numSquares = 30,
  className,
  maxOpacity = 0.4,
  duration = 4,
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<
    { id: number; pos: [number, number] }[]
  >([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    const cols = Math.ceil(dimensions.width / width);
    const rows = Math.ceil(dimensions.height / height);
    setSquares(
      Array.from({ length: numSquares }, (_, i) => ({
        id: i,
        pos: [
          Math.floor(Math.random() * cols),
          Math.floor(Math.random() * rows),
        ],
      })),
    );
  }, [dimensions, numSquares, width, height]);

  return (
    <svg
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-syn-text/5 stroke-syn-text/10",
        className,
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={-1}
          y={-1}
        >
          <path
            d={`M${width} 0 L0 0 0 ${height}`}
            fill="none"
            strokeWidth={1}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={-1} y={-1} className="overflow-visible">
        {squares.map(({ id: sqId, pos: [x, y] }) => (
          <rect
            key={sqId}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth={0}
            className="text-syn-cyan"
            style={{
              animation: `gridPulse ${duration}s ease-in-out ${(sqId % 5) * 0.4}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0; }
          50% { opacity: ${maxOpacity}; }
        }
        @media (prefers-reduced-motion: reduce) {
          rect { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
    </svg>
  );
}
