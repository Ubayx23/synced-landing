"use client";

import { useEffect } from "react";
import { markSubmitted } from "@/lib/beta";
import { TALLY_FORM_ID } from "@/lib/tally";

type LooseRecord = Record<string, unknown>;

function isSubmissionPayload(data: unknown): boolean {
  if (typeof data !== "object" || data === null) return false;
  const d = data as LooseRecord;
  const event = String(d.event ?? d.type ?? "");
  if (event === "Tally.FormSubmitted") return true;
  if (event === "tally:form-submit") return true;
  if (
    String(d.formId ?? "") === TALLY_FORM_ID &&
    /submit/i.test(event)
  ) {
    return true;
  }
  return false;
}

export function BetaFormListener() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (isSubmissionPayload(e.data)) markSubmitted();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  return null;
}
