"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "synced_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
    } catch {
      // private mode or storage blocked, leave hidden
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-2xl flex-col items-start gap-3 rounded-2xl border border-white/15 bg-[#0d0e10]/95 p-4 text-sm text-white/85 shadow-2xl backdrop-blur md:flex-row md:items-center md:gap-5 md:p-5"
    >
      <p className="leading-relaxed">
        synced.page stores a small amount of local data on your device to
        remember if you have joined the waitlist. No tracking, no ads.{" "}
        <Link
          href="/privacy"
          className="font-semibold text-syn-cyan underline-offset-4 hover:underline"
        >
          Read more
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="ml-auto inline-flex shrink-0 items-center justify-center rounded-full bg-syn-cyan px-5 py-2 text-sm font-bold text-[#08090A] transition-opacity hover:opacity-90 active:opacity-80"
      >
        Accept
      </button>
    </div>
  );
}
