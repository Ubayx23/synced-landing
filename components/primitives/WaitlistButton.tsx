"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { openWaitlist } from "@/lib/tally";
import { useWaitlistSubmitted } from "@/lib/waitlist";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Variant = "pill" | "cta" | "link";

const baseByVariant: Record<Variant, string> = {
  pill:
    "inline-flex items-center justify-center rounded-syn-pill px-4 h-9 text-sm font-medium",
  cta:
    "inline-flex items-center justify-center rounded-syn-button px-7 h-14 text-base font-semibold tracking-[-0.01em]",
  link: "inline-flex items-center text-sm font-medium underline-offset-4",
};

const activeByVariant: Record<Variant, string> = {
  pill:
    "bg-syn-cyan text-syn-bg hover:opacity-90 active:opacity-80 transition-opacity shadow-[0_0_24px_var(--syn-cyan-glow)]",
  cta:
    "bg-syn-cyan text-syn-bg hover:opacity-90 active:opacity-80 transition-opacity syn-cta-glow",
  link: "text-syn-cyan hover:underline",
};

const submittedByVariant: Record<Variant, string> = {
  pill:
    "bg-white/5 text-syn-text-dim border border-white/10 cursor-default",
  cta:
    "bg-white/5 text-syn-text-dim border border-white/10 cursor-default",
  link: "text-syn-text-dim cursor-default",
};

export function WaitlistButton({
  variant = "cta",
  className,
  label = "Join the waitlist",
  submittedLabel = "you're in",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
  submittedLabel?: string;
}) {
  const submitted = useWaitlistSubmitted();

  if (submitted) {
    return (
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
              className={cn(
                baseByVariant[variant],
                submittedByVariant[variant],
                className,
              )}
            >
              <Check className="mr-2 h-4 w-4 text-syn-cyan" aria-hidden />
              {submittedLabel}
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Already on the list. Thanks.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <button
      type="button"
      onClick={openWaitlist}
      className={cn(
        baseByVariant[variant],
        activeByVariant[variant],
        className,
      )}
    >
      {label}
    </button>
  );
}
