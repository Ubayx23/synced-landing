import Link from "next/link";

export const metadata = {
  title: "Privacy Policy. Synced.",
  description:
    "How Synced handles your information. Beta signups, kept simple.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-syn-text">
      <Link
        href="/"
        className="text-xs font-semibold uppercase tracking-widest text-syn-cyan hover:underline"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-display">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-syn-text-faint">
        Last updated 15 October 2026.
      </p>

      <section className="mt-10 space-y-6 text-syn-text-dim leading-relaxed">
        <p>
          Synced is a one-person project. This policy covers synced.page (the
          marketing site) and the iOS app, which is currently in beta through
          Apple TestFlight and not yet on the App Store.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          What we collect
        </h2>
        <p>
          On the marketing site we collect only the information you submit to
          the beta access form: typically an email address and any optional fields
          you choose to fill in. The form is hosted by Tally, which acts as the
          processor on our behalf. We do not run third-party analytics,
          advertising trackers, or session recorders on synced.page.
        </p>
        <p>
          The iOS app stores your climbing and training logs. While in beta,
          Apple may share crash reports, basic device diagnostics, and any
          feedback you submit through TestFlight with us, as described in
          Apple&apos;s TestFlight terms. Any data that syncs off-device for
          backup or analysis will be tied to a user account you create, and
          will be covered by an updated version of this policy at that time.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          How we use it
        </h2>
        <p>
          Your email is used to send your TestFlight invite, beta updates, and
          major product news. Nothing else. We do not sell, rent, or share
          your contact details.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Your choices
        </h2>
        <p>
          You can ask to be removed from the beta list at any time by emailing
          the address below. We will delete your record within a reasonable
          window and confirm by reply.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">
          Cookies
        </h2>
        <p>
          synced.page uses two small pieces of local storage:{" "}
          <code className="text-syn-cyan">synced_beta_requested</code> to
          remember whether you have already requested beta access on this
          browser, and{" "}
          <code className="text-syn-cyan">synced_cookie_consent</code> to
          remember that you have dismissed the cookie banner. No other cookies
          or tracking storage are set by us.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-syn-text">Contact</h2>
        <p>
          Questions, requests, or anything privacy-related, write to{" "}
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
