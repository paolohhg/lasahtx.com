import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms",
  description: "Terms for the Lasa HTX SMS messaging program.",
  alternates: {
    canonical: "/sms-terms",
  },
};

export default function SmsTermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-3xl px-4 py-28 md:py-36">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Lasa HTX
        </p>
        <h1 className="mb-8 font-display text-5xl md:text-6xl">SMS Terms</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: May 15, 2026</p>
          <p>
            These terms apply to the Lasa HTX SMS messaging program. By opting
            in to SMS messages from Lasa HTX, you agree to these SMS terms.
          </p>
          <p>
            The Lasa HTX SMS program may send messages about catering inquiries,
            quotes, event updates, order support, and hospitality offers.
            Message frequency varies.
          </p>
          <p>Message and data rates may apply.</p>
          <p>
            <strong className="text-foreground">Reply STOP to opt out.</strong>{" "}
            After you reply STOP, we may send one final message confirming that
            you have been unsubscribed.
          </p>
          <p>
            <strong className="text-foreground">Reply HELP for help.</strong>{" "}
            You can also contact Lasa HTX at{" "}
            <a
              href="mailto:info@lasahtx.com"
              className="text-foreground underline underline-offset-2"
            >
              info@lasahtx.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+18325108440"
              className="text-foreground underline underline-offset-2"
            >
              832-510-8440
            </a>
            .
          </p>
          <p>
            Consent to receive SMS messages is not a condition of purchase.
            Carriers are not liable for delayed or undelivered messages.
          </p>
          <p>
            View our{" "}
            <Link
              href="/privacy"
              className="text-foreground underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
