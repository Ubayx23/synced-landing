import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  accent = false,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  if (accent) {
    return (
      <span
        className={cn(
          "syn-eyebrow inline-flex items-center rounded-syn-pill border border-syn-cyan/35 bg-syn-cyan/[0.06] px-3.5 py-1.5 text-syn-cyan shadow-[0_0_24px_var(--syn-cyan-glow)]",
          className,
        )}
      >
        {children}
      </span>
    );
  }
  return (
    <span className={cn("syn-eyebrow text-syn-text-dim", className)}>
      {children}
    </span>
  );
}
