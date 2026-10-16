import Link from "next/link";

export const metadata = {
  title: "Terms of Service. Synced.",
  description:
    "The terms that govern your use of synced.page and the upcoming Synced iOS app.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-syn-text">
      <Link
        href="/"
        className="text-xs font-semibold uppercase tracking-widest text-syn-cyan hover:underline"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-display">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-syn-text-faint">
        Last updated 15 October 2026.
      </p>

      <section className="mt-10 space-y-6 text-syn-text-dim leading-relaxed">
        <p>
          By using synced.page, requesting beta access, or installing the beta,
          you agree to these terms. They are intentionally short. Synced is a
          product run by one person and the legal surface is small.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">The beta</h2>
        <p>
          Requesting beta access is free and creates no obligation on either
          side. Beta builds are pre-release software: features may change or
          disappear, things may break, and data logged in a beta build may not
          carry over. We do not promise a launch date, a feature set, or a
          specific price.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Founding access
        </h2>
        <p>
          A small early cohort will be offered founding access at a one-time
          fee. The fee, scope, and refund policy will be documented at the
          point of purchase. Until then, no payment is requested or accepted.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Health and training disclaimer
        </h2>
        <p>
          Synced is a tracking tool, not medical advice. The patterns it
          surfaces are observations from your own logs. Talk to a qualified
          professional before changing how you eat, train, or recover for
          medical reasons.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Acceptable use
        </h2>
        <p>
          Do not attempt to break, abuse, scrape, or reverse-engineer the site
          or app. Do not submit content that is unlawful or that you do not
          have the right to submit.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Intellectual property
        </h2>
        <p>
          The Synced name, wordmark, design, and code are owned by the
          project. You may link to synced.page freely. Other reuse needs
          written permission.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Liability
        </h2>
        <p>
          synced.page is provided as-is, with no warranty. To the extent
          allowed by law, we are not liable for indirect, incidental, or
          consequential damages arising from use of the site or app.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">Changes</h2>
        <p>
          These terms may change as the product evolves. Material changes will
          be reflected by an updated date at the top of this page.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">Contact</h2>
        <p>
          Questions about these terms, or anything else, write to{" "}
          <a
            className="text-syn-cyan hover:underline"
            href="mailto:ubaydullanoorullah@gmail.com"
          >
            ubaydullanoorullah@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
