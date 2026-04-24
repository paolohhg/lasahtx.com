import type { Metadata } from "next";
import { CartBody } from "../_cart/CartBody";

export const metadata: Metadata = {
  title: { absolute: "Your Cart \u2014 Lasa HTX" },
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <main className="container mx-auto px-4 py-20 md:py-24 max-w-2xl">
      <h1 className="font-display text-4xl md:text-5xl mb-8">Your Cart</h1>
      <div className="flex flex-col border border-border bg-card min-h-[320px]">
        <CartBody context="page" />
      </div>
    </main>
  );
}
