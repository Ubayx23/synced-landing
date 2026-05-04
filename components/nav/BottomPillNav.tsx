import { Wordmark } from "@/components/primitives/Wordmark";
import { WaitlistButton } from "@/components/primitives/WaitlistButton";

export function BottomPillNav() {
  return (
    <header
      className="fixed bottom-6 inset-x-0 z-40 mx-auto flex max-w-fit items-center gap-3 rounded-syn-pill border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl"
      aria-label="Primary"
    >
      <span className="pl-3 pr-1">
        <Wordmark size="sm" />
      </span>
      <WaitlistButton variant="pill" label="Join waitlist" />
    </header>
  );
}
