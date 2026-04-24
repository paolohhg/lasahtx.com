import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { CheckCircle2, MapPin, Mail, Phone } from "lucide-react";
import { ClearCartOnMount } from "../_thank-you/ClearCartOnMount";

export const metadata: Metadata = {
  title: { absolute: "Thank You \u2014 Lasa HTX" },
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

interface BowlsDetailEntry {
  bowl: string;
  variant: string;
  modifiers: string;
  addOns: string;
  quantity: number;
}

export default async function ThankYouPage({ searchParams }: Props) {
  const { session_id } = await searchParams;
  if (!session_id) redirect("/meal-prep");

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("[thank-you] STRIPE_SECRET_KEY not set");
    redirect("/meal-prep");
  }

  let session: Stripe.Checkout.Session;
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items"],
    });
  } catch (err) {
    console.error("[thank-you] Failed to retrieve session:", session_id, err);
    redirect("/meal-prep");
  }

  // Session exists but payment isn't done yet (rare — usually async payment
  // methods). Show a pending state; confirmation email will fire via webhook
  // whenever the payment clears.
  if (session.payment_status !== "paid") {
    return <PendingState />;
  }

  const customerName = session.customer_details?.name ?? null;
  const customerEmail = session.customer_details?.email ?? null;
  const total = (session.amount_total ?? 0) / 100;
  const subtotal = (session.amount_subtotal ?? 0) / 100;
  const tax = total - subtotal;
  const lineItems = session.line_items?.data ?? [];

  let bowlsDetail: BowlsDetailEntry[] = [];
  try {
    bowlsDetail = JSON.parse(session.metadata?.bowlsDetail ?? "[]");
  } catch {
    // Malformed metadata — just show line items without the modifier notes.
  }

  const hasModifierNotes = bowlsDetail.some((d) => d.modifiers);

  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <ClearCartOnMount />

      <div className="text-center mb-12">
        <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          {customerName ? `Thanks, ${customerName}!` : "Thanks for your order!"}
        </h1>
        <p className="text-muted-foreground">Your order is confirmed.</p>
      </div>

      {/* Order summary */}
      <div className="border border-border bg-card p-6 mb-6">
        <h2 className="font-display text-xl mb-4">Order Summary</h2>
        <div className="space-y-2">
          {lineItems.map((li) => (
            <div
              key={li.id}
              className="flex justify-between items-baseline py-2 border-b border-border last:border-b-0 text-sm"
            >
              <span className="text-foreground pr-4">
                {li.description ?? "Item"}
                <span className="text-muted-foreground">
                  {" "}
                  &times; {li.quantity}
                </span>
              </span>
              <span className="font-semibold tabular-nums shrink-0">
                ${((li.amount_total ?? 0) / 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4 mt-4 space-y-2 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span className="tabular-nums">${subtotal.toFixed(2)}</span>
          </div>
          {tax > 0 && (
            <div className="flex justify-between text-muted-foreground">
              <span>Tax</span>
              <span className="tabular-nums">${tax.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-display text-xl pt-2 border-t border-border">
            <span>Total</span>
            <span className="tabular-nums">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Modifier notes */}
      {hasModifierNotes && (
        <div className="border border-border bg-card p-6 mb-6">
          <h2 className="font-display text-xl mb-4">Order Notes</h2>
          <div className="space-y-2 text-sm">
            {bowlsDetail
              .filter((d) => d.modifiers)
              .map((d, i) => (
                <p key={i} className="text-muted-foreground">
                  <span className="text-foreground">
                    {d.bowl} &mdash; {d.variant}
                  </span>
                  : {d.modifiers}
                </p>
              ))}
          </div>
        </div>
      )}

      {/* Pickup details */}
      <div className="border border-border bg-card p-6 mb-8">
        <h2 className="font-display text-xl mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-accent" />
          Pickup Details
        </h2>
        <p className="text-foreground font-medium mb-1">The Deck Food Park</p>
        <p className="text-muted-foreground text-sm mb-4">
          5802 FM 1488
          <br />
          Magnolia, TX 77354
        </p>
        <p className="text-sm text-muted-foreground">
          We&apos;ll reach out via phone within 24 hours to coordinate your
          pickup window.
        </p>
      </div>

      {customerEmail && (
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-12">
          <Mail className="h-4 w-4" />
          Confirmation sent to{" "}
          <span className="font-semibold text-foreground">{customerEmail}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/meal-prep"
          className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-4 text-sm transition-colors"
        >
          &larr; Back to meal prep
        </Link>
        <a
          href="tel:+18325108440"
          className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-4 text-sm transition-colors gap-2"
        >
          <Phone className="h-4 w-4" />
          Call (832) 510-8440
        </a>
      </div>
    </main>
  );
}

function PendingState() {
  return (
    <main className="container mx-auto px-4 py-20 md:py-32 max-w-2xl text-center">
      <h1 className="font-display text-4xl md:text-5xl mb-6">
        Order Processing
      </h1>
      <p className="text-muted-foreground font-sans text-base leading-relaxed mb-10 max-w-lg mx-auto">
        Your payment is being processed. We&apos;ll email you as soon as it
        clears and pickup details are confirmed.
      </p>
      <Link
        href="/meal-prep"
        className="inline-flex items-center justify-center border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-8 py-4 text-sm transition-colors"
      >
        &larr; Back to meal prep
      </Link>
    </main>
  );
}
