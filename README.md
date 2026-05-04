# synced.page

Landing site for Synced, a recovery and readiness iOS app for serious lifters.

## Stack

- Next.js 14 (app router) + TypeScript
- Tailwind CSS + shadcn/ui primitives
- Custom magicui-style components (NumberTicker, BentoGrid, MagicCard, AnimatedGridPattern)
- Tally form `44PkRA` for waitlist (popup, single-submission guard)

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # next lint + em-dash check
npm run build
```

## Deploy

Push to GitHub, import into Vercel. No env vars required.

## Single-submission guard

Once a visitor submits the Tally form, the page sets `localStorage.synced_waitlist_submitted = 1`. Every CTA flips to a disabled "you're in" state and ignores clicks until the key is cleared. Submission is detected by listening for postMessage events from the Tally iframe.

To verify in DevTools:

```js
window.postMessage({ event: 'Tally.FormSubmitted', formId: '44PkRA' }, '*')
```

To reset:

```js
localStorage.removeItem('synced_waitlist_submitted')
```
