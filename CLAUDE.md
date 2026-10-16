# Synced.page — Landing site

Single-page Next.js 14 (App Router) landing for **Synced**, an iOS training planner for climbers (climbing, strength, and rest balanced across the week). The app has two tabs: **Today** (day strip, planned session, recovery, tomorrow, last note, weekly totals) and **Progress** (top V-grade line, improving lifts, consistency heatmap, lift list with trend arrows, grade breakdown and lift history sheets with estimated max).

The site exists to (a) establish the dark/teal brand, (b) showcase the real app screens, and (c) collect **beta access requests** (TestFlight) via a Tally popup. It is no longer a waitlist.

## Stack

- Next.js 14.2 App Router, React 18, TypeScript.
- Tailwind 3.4 with CSS-variable design tokens (see `app/globals.css` and `tailwind.config.ts`).
- `motion` (Framer Motion) for hero animations and the `Reveal` scroll-in wrapper.
- `geist` package for Geist Sans / Geist Mono (the app's typefaces), exposed as `font-geist` / `font-geist-mono`. Inter stays the default `font-sans`.
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
app/layout.tsx              <html class="dark">, Inter + Geist fonts, mounts TallyScript, BetaFormListener, CookieConsent
app/page.tsx                <Hero /> <AppShowcase /> <Features /> <BetaSection /> <SyncedFooter />
```

## Hero shape (`components/ui/hero.tsx`)

- Top nav: `synced.` wordmark left, `Beta on iPhone` glass pill (Apple SVG) right. No nav links or nav CTA.
- Three-line headline `PLAN.` / `CLIMB.` / `SEND.` (SEND in teal). Staggered indents on `md+`, centered on mobile. 3D drop-shadow: 6 layers mobile, 14 desktop via `.syn-headline`.
- Subheadline: "A training planner for climbers. Your week, balanced for hard sessions, strength, and rest, ..." `max-w-[300px]` mobile, `md:max-w-[540px]`.
- Desktop-only squiggle arrows + spinning `TRY THE BETA` badge (`textLength` fits the circle; keep it if you change the copy). Mobile gets a teal `Get the beta` pill.
- White slab with three cards: `PLAN THE WEEK`, `RATE THE CLIMB`, `SEE THE PROGRESS` (visuals: week dot row, V5 sparkline, 155x6 to 155x9).

## App mockups (`components/app/`)

Built in code from the Claude Design hand-offs ("Today Final" and "Progress v1"); no images. Screens are authored at 393 x 852 pt and scaled with the `--s` CSS var on `<Phone>` (for example `[--s:0.74] md:[--s:0.86]`). Colors live in `components/app/tokens.ts`. Demo data (V5 grade line, Incline bench 155x6 to 155x9, heatmap pattern) is hard-coded in `progress-widgets.tsx`. Estimated max uses Epley: `w * (1 + r / 30)`.

## Sections (`components/sections/`)

- `AppShowcase` (`#app`): two tilted phones, Today + Progress. On mobile they're a horizontal snap scroller with a "Swipe for Progress" hint.
- `Features`: three alternating rows (Climbing / Lifting / Consistency) using the standalone widgets. Secondary widgets are `hidden sm:block` to keep 375px short.
- `BetaSection` (`#beta`): 3-step TestFlight explainer + `Request beta access` button. Shows a green "Request received" state once submitted.

## Footer shape (`SyncedFooter`)

- Cinematic curtain reveal, aurora glow, grid, giant `SYNCED` parallax text.
- Marquee: `Now in beta on iOS · Plan. Climb. Send. · iPhone only · TestFlight invites open · Built for serious climbers`.
- Heading `Ready to send?`, magnetic glass pill `Get the iOS beta` (calls `openBetaForm()`), secondary pills Privacy / Terms / Support (mailto `ubaydullanoorullah@gmail.com`).
- Bottom row: `© 2026 synced.page` left, back-to-top right.

## Tally beta form + single-submission guard

- Form id comes from `NEXT_PUBLIC_TALLY_BETA_FORM_ID`, falling back to the old waitlist form `44PkRA`. Set the env var in Vercel once the beta form exists.
- `openBetaForm()` in `lib/tally.ts` opens the popup. If the visitor already submitted, it scrolls to `#beta` instead (which shows the received state).
- Submission is recorded two ways: the popup's `onSubmit` callback and `BetaFormListener` (postMessage `Tally.FormSubmitted`). Both call `markSubmitted()` in `lib/beta.ts`, which writes `localStorage['synced_beta_requested'] = '1'` and dispatches `synced:beta-requested`.
- `useBetaRequested()` subscribes to that event + cross-tab `storage`.

To reset locally: DevTools → Application → Local Storage → delete `synced_beta_requested`.

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
  layout.tsx              <html class="dark">, Inter + Geist, TallyScript, BetaFormListener, CookieConsent
  page.tsx                Hero, AppShowcase, Features, BetaSection, SyncedFooter
  globals.css             tokens (syn + shadcn), prefers-reduced-motion override
  icon.tsx / opengraph-image.tsx
  privacy/page.tsx        privacy policy (beta + TestFlight)
  terms/page.tsx          terms (beta clause, founding access, disclaimer)

components/
  app/                    code-built app mockups
    tokens.ts             app palette + font stacks
    phone.tsx             Phone frame, StatusBar, TabBar
    today-screen.tsx      Today tab
    progress-screen.tsx   Progress tab
    progress-widgets.tsx  GradeCard, ImprovingRow, Heatmap, LiftList, GradeBreakdown, LiftHistory, EstimateChip
  sections/
    reveal.tsx            motion whileInView wrapper (respects reduced motion)
    app-showcase.tsx      #app
    features.tsx          feature rows
    beta-section.tsx      #beta, request button + received state
  ui/
    hero.tsx              landing hero
    motion-footer.tsx     SyncedFooter
    button.tsx            shadcn Button primitive (unused)
  tally/
    TallyScript.tsx       loads tally.so/widgets/embed.js
    BetaFormListener.tsx  postMessage -> markSubmitted
  CookieConsent.tsx       first-visit consent banner

lib/
  cn.ts, utils.ts
  tally.ts                TALLY_FORM_ID, BETA_SECTION_ID, openBetaForm()
  beta.ts                 STORAGE_KEY, markSubmitted(), hasSubmitted(), useBetaRequested()

types/tally.d.ts
scripts/shoot.mjs
```

## Conventions

- All CTAs go through `openBetaForm()`. Do not call `window.Tally` directly outside `lib/tally.ts`.
- No em dashes in source. `lint:no-emdash` will fail the build.
- One `<h1>` per page (in the hero — there are three styled `<h1>` lines for PLAN/CLIMB/SEND; this is intentional and lints clean).
- Dark-only. `<html class="dark">` is set in `layout.tsx`.
- Mobile-first responsive. The hero hides decorative ornament under `md` and ships a clean stacked layout on small screens. Verify any hero changes at 375px.
- Animations sit inside `@media (prefers-reduced-motion: no-preference)` or rely on the global override in `globals.css`.

## Out of scope

- No analytics, no CMS, no i18n.
- No deploy scripts here. The repo is hosted at `https://github.com/Ubayx23/synced-landing.git` and the user imports it into Vercel manually.
- Stripe / founding-access purchase flow is **not yet wired**; only the Tally beta form is live.
