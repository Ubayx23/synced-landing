import Link from "next/link";
import { Wordmark } from "@/components/primitives/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-syn-border px-6 py-10 pb-24 text-xs text-syn-text-faint">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Wordmark size="sm" />
          <span>© 2026</span>
        </div>
        <nav className="flex items-center gap-6" aria-label="Footer">
          <a
            href="mailto:hello@synced.page"
            className="hover:text-syn-text-dim transition-colors"
          >
            hello@synced.page
          </a>
          <Link
            href="/privacy"
            className="hover:text-syn-text-dim transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-syn-text-dim transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
