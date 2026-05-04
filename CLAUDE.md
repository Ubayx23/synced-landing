# Synced.page — Landing site

Single-page Next.js 14 (App Router) landing for **Synced**, a pre-launch iOS recovery/readiness tracker. The wedge: linking pre-workout fuel to in-workout performance.

The site exists to (a) establish the dark/cyan brand that mirrors the iOS app and (b) drive waitlist signups via a Tally popup (form id `44PkRA`).

## Stack

- Next.js 14.2 App Router, React 18, TypeScript.
- Tailwind 3.4 with CSS-variable design tokens (see `app/globals.css` and `tailwind.config.ts`).
- shadcn/ui primitives in `components/ui/`.
- Tally embed.js loaded via `next/script` (`components/tally/TallyScript.tsx`).
- `motion` (Framer Motion) and lucide-react are installed.
- No backend, no analytics, no images shipped — favicon/OG come from `app/icon.tsx` and `app/opengraph-image.tsx` via `next/og`.

## Run

```
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint         # next lint + lint:no-emdash
```

`lint:no-emdash` greps `app components lib` for `—` (em dash) and fails the lint if any are found. Use `.` or `,` instead.

## Design tokens — source of truth

CSS variables in `app/globals.css` mirror the iOS `Tokens.swift` 1:1. Use the Tailwind aliases, not raw hex:

| Tailwind | CSS var | Hex |
|---|---|---|
| `bg-syn-bg` | `--syn-bg` | `#0A0A0A` |
| `bg-syn-bg-deep` | `--syn-bg-deep` | `#050505` |
| `bg-syn-surface` | `--syn-surface` | `#161618` |
| `bg-syn-surface-hi` | `--syn-surface-hi` | `#1F1F23` |
| `border-syn-border` | `--syn-border` | `#2A2A2E` |
| `text-syn-text` | `--syn-text` | `#FFFFFF` |
| `text-syn-text-dim` | `--syn-text-dim` | `#8E8E93` |
| `text-syn-text-faint` | `--syn-text-faint` | `#5A5A60` |
| `text-syn-cyan` / `bg-syn-cyan` | `--syn-cyan` | `#00E5FF` |
| `text-syn-cyan-soft` | `--syn-cyan-soft` | `#7CE8F5` |
| radius `rounded-syn-button` | 14px |
| radius `rounded-syn-card` | 16px |
| radius `rounded-syn-pill` | 999px |

Letter-spacing presets: `tracking-wordmark` (-0.04em) for the logo, `tracking-display` (-0.03em) for headlines.

Globals also expose two background utilities mounted once in `app/layout.tsx`:
- `.syn-vignette` — radial dark vignette anchored top-center.
- `.syn-ambient-halo` — faint cyan halo at (50%, 18%).
- `.syn-cta-glow` — cyan drop shadow for primary buttons.

## File map

```
app/
  layout.tsx              <html class="dark">, Inter, vignette + halo, mounts TallyScript, WaitlistListener
  page.tsx                composes 4 sections: Hero, Wedge, FoundingMembers, Footer
  globals.css             tokens, vignette/halo/cta-glow utilities, prefers-reduced-motion override
  icon.tsx                32x32 favicon: cyan dot on #0A0A0A
  opengraph-image.tsx     1200x630 OG card
  privacy/page.tsx        stub
  terms/page.tsx          stub

components/
  ui/                     shadcn: button, card, badge, separator, tooltip
  sections/               Hero, Wedge, FoundingMembers, Footer
  primitives/             Wordmark, StatusPill, Eyebrow, FadeUp, WaitlistButton
  tally/                  TallyScript (loads embed.js), WaitlistListener (postMessage -> markSubmitted)

lib/
  cn.ts                   clsx + tailwind-merge
  tally.ts                openWaitlist() — guarded by hasSubmitted()
  waitlist.ts             STORAGE_KEY, markSubmitted(), hasSubmitted(), useWaitlistSubmitted()

hooks/useInView.ts        IntersectionObserver hook used by FadeUp
types/tally.d.ts          window.Tally typing
```

## Tally + single-submission guard

- One Tally popup, form id `44PkRA`. Opened via `openWaitlist()` in `lib/tally.ts`.
- `WaitlistListener` (mounted in `layout.tsx`) listens for `Tally.FormSubmitted` postMessages, writes `localStorage['synced_waitlist_submitted'] = '1'`, dispatches `CustomEvent('synced:waitlisted')`.
- `useWaitlistSubmitted()` subscribes to the custom event and the cross-tab `storage` event.
- All `<WaitlistButton>` instances flip to a disabled `you're in ✓` state when submitted; click is no-op and tooltip explains.
- During SSR / first client render, the hook returns `false` to avoid hydration mismatch, then flips post-mount.

To reset locally: DevTools → Application → Local Storage → delete `synced_waitlist_submitted`.

## Conventions

- Every CTA goes through `<WaitlistButton>`. Do not call `window.Tally` directly outside `lib/tally.ts`.
- Do not type em dashes (`—`) in source — `lint:no-emdash` will fail. Use `.` or `,`.
- One `<h1>` per page (in Hero). `<header>` for nav, `<main>` for sections, `<footer>` for footer. lucide icons get `aria-hidden`.
- Dark-only. `<html class="dark">` is set in `layout.tsx`; do not add `light:` Tailwind variants.
- Fade-up reveals are wrapped in `<FadeUp>` (IntersectionObserver, once). Above-the-fold content uses `triggerOnMount`.
- Animations sit inside `@media (prefers-reduced-motion: no-preference)` or rely on the global override in `globals.css`.

## Out of scope

- No analytics, no CMS, no i18n.
- Privacy / Terms are stubs.
- No deploy scripts here — the user pushes to GitHub and imports into Vercel manually.
