import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lasa HTX, including SMS messaging data practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-3xl px-4 py-28 md:py-36">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Lasa HTX
        </p>
        <h1 className="mb-8 font-display text-5xl md:text-6xl">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: May 15, 2026</p>
          <p>
            Lasa HTX collects information you provide when you submit an
            inquiry, place an order, contact us, or opt in to receive messages.
            This may include your name, company, email address, phone number,
            event details, order details, and any notes you choose to share.
          </p>
          <p>
            We use this information to respond to inquiries, prepare quotes,
            fulfill orders, provide customer support, send service updates, and,
            when you have opted in, send SMS messages related to catering,
            events, and hospitality offers.
          </p>
          <p>
            Mobile opt-in information and SMS consent are used only for Lasa HTX
            messaging. Mobile information will not be shared with third parties
            or affiliates for their marketing or promotional purposes. We do not
            sell mobile opt-in data.
          </p>
          <p>
            We may share information with service providers that help us operate
            the business, such as payment, email, hosting, analytics, and
            messaging providers. These providers are allowed to use the
            information only to provide services to Lasa HTX.
          </p>
          <p>
            To stop SMS messages, reply STOP. For help, reply HELP or contact us
            at{" "}
            <a
              href="mailto:info@lasahtx.com"
              className="text-foreground underline underline-offset-2"
            >
              info@lasahtx.com
            </a>
            .
          </p>
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:info@lasahtx.com"
              className="text-foreground underline underline-offset-2"
            >
              info@lasahtx.com
            </a>
            . View our{" "}
            <Link
              href="/sms-terms"
              className="text-foreground underline underline-offset-2"
            >
              SMS Terms
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
