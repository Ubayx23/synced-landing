import { hasSubmitted } from "./waitlist";

export const TALLY_FORM_ID = "44PkRA";

export function openWaitlist(): void {
  if (typeof window === "undefined") return;
  if (hasSubmitted()) return;
  window.Tally?.openPopup(TALLY_FORM_ID, {
    layout: "modal",
    width: 500,
    hideTitle: true,
    overlay: true,
  });
}
