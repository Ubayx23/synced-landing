import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "text-5xl md:text-6xl"
      : size === "sm"
        ? "text-base"
        : "text-2xl";
  return (
    <span
      className={cn(
        "font-bold tracking-wordmark text-syn-text select-none",
        sizeClass,
        className,
      )}
    >
      synced<span className="text-syn-cyan">.</span>
    </span>
  );
}
