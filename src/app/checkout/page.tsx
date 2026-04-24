import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Checkout \u2014 Lasa HTX" },
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-20 md:py-32 max-w-2xl text-center">
      <h1 className="font-display text-5xl md:text-6xl mb-6">Checkout</h1>
      <p className="text-muted-foreground font-sans text-base leading-relaxed mb-10 max-w-lg mx-auto">
        Stripe integration arriving in session 5c. This page confirms the
        4-bowl minimum gate works end-to-end.
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
