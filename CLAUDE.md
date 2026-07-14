# Synced.page — Landing site

Single-page Next.js 14 (App Router) landing for **Synced**, a pre-launch iOS training planner for climbers. The wedge: an adaptive weekly schedule that balances climbing, strength, and rest so users send harder without overtraining.

The site exists to (a) establish the dark/teal brand and (b) drive waitlist signups via a Tally popup (form id `44PkRA`).

## Stack

- Next.js 14.2 App Router, React 18, TypeScript.
- Tailwind 3.4 with CSS-variable design tokens (see `app/globals.css` and `tailwind.config.ts`).
- `motion` (Framer Motion) for hero entrance animations.
- `gsap` + `ScrollTrigger` for the cinematic footer (parallax giant text, magnetic pills, scroll-driven reveal).
- shadcn-token aliases for the footer's `color-mix(in oklch, ...)` calls. The shadcn Button primitive is kept in `components/ui/button.tsx` even though nothing imports it today.
- Tally embed.js loaded via `next/script` (`components/tally/TallyScript.tsx`).
- No backend, no analytics, no images shipped — favicon and OG come from `app/icon.tsx` and `app/opengraph-image.tsx` via `next/og`.

## Run

```
npm install
npm run dev          # http://localhost:3000 (or 3001 if 3000 is taken)
npm run build
npm run lint         # next lint + lint:no-emdash
```

`lint:no-emdash` greps `app components lib` for `—` (em dash) and fails if any are found. Use `.` or `,` instead. This is a hard rule.

## Optional: viewport screenshots

`scripts/shoot.mjs` uses Puppeteer to capture `iphone-se` (375), `iphone-14` (390), and `desktop` (1280) screenshots into `/tmp/synced-*.png`. Puppeteer is intentionally not in `package.json`. To use:

```
npm install --no-save puppeteer
npm run dev &
node scripts/shoot.mjs
```

## Page composition

```
app/layout.tsx              <html class="dark">, Inter, mounts TallyScript, WaitlistListener, CookieConsent
app/page.tsx                <Hero /> + <SyncedFooter /> only
```

The hero is `components/ui/hero.tsx`. The footer is `components/ui/motion-footer.tsx`.

## Hero shape

- Top nav: `synced.` wordmark on the left, `iPhone only` glass pill (Apple SVG + label) on the right. No nav links, no top-right Join waitlist button.
- Three-line headline `PLAN.` / `CLIMB.` / `SEND.` (SEND in teal). Staggered indents on `md+`, all centered on mobile. Floor sizes are tuned so the text never crops at 375px.
- 3D drop-shadow on the headline scales by viewport: 6 layers on mobile, 14 layers on desktop, switched via styled-jsx `@media (min-width: 768px)` against the `.syn-headline` class.
- Subheadline below SEND: "A training planner for climbers. Your week, balanced for hard sessions, strength, and rest, so you show up fresh and send more." Constrained to `max-w-[300px]` on mobile, `md:max-w-[540px]`.
- Two decorative cyan squiggle arrows + the spinning "JOIN THE WAITLIST" circular badge are **desktop-only** (`hidden md:block`). On mobile, a solid teal pill CTA "Join the waitlist" sits below the subheadline (`md:hidden`).
- Bottom of hero: three light cream/white feature cards on a rounded white slab — `PLAN THE WEEK`, `RATE THE CLIMB`, `SEE THE PROGRESS`. Each card has a small dark-pill visual (session log, dot row, bar chart). Connecting black arrows between cards 1→2 and 2→3 are `hidden md:block`.

Every CTA in the hero (nav has no CTA; mobile pill; desktop spinning badge) calls `openWaitlist()` from `lib/tally.ts`.

## Footer shape (`SyncedFooter`)

- Cinematic curtain reveal: a `clipPath`-clipped wrapper over a `position: fixed` footer that scrolls into view.
- Aurora glow + faint grid + giant background text `SYNCED` (parallaxed via GSAP `scrollTrigger`).
- Marquee strip: `Coming soon to iOS · Plan. Climb. Send. · iPhone only · Cohort 1 open · Built for serious climbers`.
- Heading `Ready to send?` with a metallic gradient.
- Single magnetic glass pill `Join the waitlist` (Apple SVG, calls `openWaitlist()`), then secondary pills `Privacy Policy`, `Terms of Service`, `Support` (mailto `ubaydullanoorullah@gmail.com`). No Android pill, no "Crafted by" pill.
- Bottom row: `© 2026 synced.page` on the left, back-to-top button on the right.

## Tally + single-submission guard

- One Tally popup, form id `44PkRA`. Opened via `openWaitlist()` in `lib/tally.ts`.
- `WaitlistListener` (mounted in `layout.tsx`) listens for `Tally.FormSubmitted` postMessages, writes `localStorage['synced_waitlist_submitted'] = '1'`, dispatches `CustomEvent('synced:waitlisted')`.
- `useWaitlistSubmitted()` in `lib/waitlist.ts` subscribes to the custom event + cross-tab `storage` event.
- The hero and footer wire raw `onClick={openWaitlist}` directly. `openWaitlist` is gated by `hasSubmitted()`, so a user who already signed up will not see the popup re-open.
- The "you're in ✓" disabled CTA state from earlier was removed when the cinematic visuals replaced the original CTA primitives. If you need it back, reintroduce a `WaitlistButton` primitive that wraps `useWaitlistSubmitted()`.

To reset locally: DevTools → Application → Local Storage → delete `synced_waitlist_submitted`.

## Cookie consent

- `components/CookieConsent.tsx` is a client component mounted in `app/layout.tsx`.
- Shows a glass card pinned to `bottom-4` on first visit; dismisses with one Accept button.
- Stores `localStorage['synced_cookie_consent'] = '1'`. Renders nothing on subsequent visits.
- Fails silent if storage is blocked (private mode).

## Design tokens

`app/globals.css` exposes two parallel sets of CSS variables:

- **Synced palette** (`--syn-*`): brand-specific colors and radii. Use Tailwind aliases like `bg-syn-bg`, `text-syn-text-dim`, `text-syn-cyan`, `rounded-syn-pill`.
- **shadcn tokens** (`--background`, `--foreground`, `--primary`, `--secondary`, `--muted-foreground`, `--border`, `--destructive`, etc.): defined as **direct color values**, not `H S L` triplets. The cinematic footer uses `color-mix(in oklch, var(--foreground) 8%, transparent)` and similar — these only work with real color values. `tailwind.config.ts` exposes them as `bg-background`, `text-foreground`, `text-primary/60`, `border-border/50`, etc.

If you change a token, both the `--syn-*` family and the corresponding shadcn token may need updating to keep the brand consistent across the hero (which uses `--syn-*`) and the footer (which uses shadcn tokens).

## File map (current)

```
app/
  layout.tsx              <html class="dark">, Inter, mounts TallyScript, WaitlistListener, CookieConsent
  page.tsx                <Hero /> + <SyncedFooter />
  globals.css             tokens (syn + shadcn), prefers-reduced-motion override
  icon.tsx                32x32 favicon: cyan dot on dark
  opengraph-image.tsx     1200x630 OG card
  privacy/page.tsx        full privacy policy with contact email
  terms/page.tsx          full terms of service with contact email

components/
  ui/
    hero.tsx              landing hero (nav, headline, subheadline, mobile CTA, desktop badge, feature cards)
    motion-footer.tsx     SyncedFooter — cinematic curtain footer with magnetic pills
    button.tsx            shadcn Button primitive (kept, currently unused)
  tally/
    TallyScript.tsx       loads tally.so/widgets/embed.js after interactive
    WaitlistListener.tsx  postMessage -> markSubmitted
  CookieConsent.tsx       first-visit consent banner

lib/
  cn.ts                   clsx + tailwind-merge
  utils.ts                re-exports cn (the cinematic footer imports @/lib/utils)
  tally.ts                openWaitlist() — guarded by hasSubmitted()
  waitlist.ts             STORAGE_KEY, markSubmitted(), hasSubmitted(), useWaitlistSubmitted()

types/tally.d.ts          window.Tally typing

scripts/shoot.mjs         optional Puppeteer screenshot helper (see Run section)
```

## Conventions

- All CTAs go through `openWaitlist()`. Do not call `window.Tally` directly outside `lib/tally.ts`.
- No em dashes in source. `lint:no-emdash` will fail the build.
- One `<h1>` per page (in the hero — there are three styled `<h1>` lines for FUEL/TRAIN/DECODE; this is intentional and lints clean).
- Dark-only. `<html class="dark">` is set in `layout.tsx`.
- Mobile-first responsive. The hero hides decorative ornament under `md` and ships a clean stacked layout on small screens. Verify any hero changes at 375px.
- Animations sit inside `@media (prefers-reduced-motion: no-preference)` or rely on the global override in `globals.css`.

## Out of scope

- No analytics, no CMS, no i18n.
- No deploy scripts here. The repo is hosted at `https://github.com/Ubayx23/synced-landing.git` and the user imports it into Vercel manually.
- Stripe / founding-access purchase flow is **not yet wired**; only the Tally waitlist is live.
