"use client";

import { useEffect, useState } from "react";

export const STORAGE_KEY = "synced_beta_requested";
export const SUBMITTED_EVENT = "synced:beta-requested";

export function hasSubmitted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function markSubmitted(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore (safari private mode, etc.)
  }
  window.dispatchEvent(new CustomEvent(SUBMITTED_EVENT));
}

export function useBetaRequested(): boolean {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(hasSubmitted());

    const onCustom = () => setSubmitted(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue === "1") setSubmitted(true);
    };

    window.addEventListener(SUBMITTED_EVENT, onCustom);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(SUBMITTED_EVENT, onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return submitted;
}
