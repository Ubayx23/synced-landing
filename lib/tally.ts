import { hasSubmitted, markSubmitted } from "./beta";

// Beta access form. Set NEXT_PUBLIC_TALLY_BETA_FORM_ID in Vercel once the
// beta form exists; until then it falls back to the original signup form.
export const TALLY_FORM_ID =
  process.env.NEXT_PUBLIC_TALLY_BETA_FORM_ID || "44PkRA";

export const BETA_SECTION_ID = "beta";

export function openBetaForm(): void {
  if (typeof window === "undefined") return;
  // Already requested: send them to the beta section, which shows the
  // "request received" state instead of a second popup.
  if (hasSubmitted()) {
    document
      .getElementById(BETA_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  window.Tally?.openPopup(TALLY_FORM_ID, {
    layout: "modal",
    width: 500,
    hideTitle: true,
    overlay: true,
    onSubmit: markSubmitted,
  });
}
