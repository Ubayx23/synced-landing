import { cn } from "@/lib/cn";

export function StatusPill({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-syn-pill border border-white/10 bg-white/5 px-3 py-1 text-xs text-syn-text-dim backdrop-blur",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-syn-green opacity-60 animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-syn-green" />
      </span>
      <span className="syn-eyebrow text-syn-text">{label}</span>
    </span>
  );
}
