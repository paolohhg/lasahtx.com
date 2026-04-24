"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { MIN_BOWLS } from "@/stores/cart-store";

interface CartEmptyProps {
  /** Page-context shows a "Browse meal prep" CTA. Drawer doesn't — user is
   * already on /meal-prep (or nearby) when they open it. */
  showBrowseCTA: boolean;
}

export function CartEmpty({ showBrowseCTA }: CartEmptyProps) {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
        <p className="text-muted-foreground mb-1">Your cart is empty</p>
        <p className="text-xs text-muted-foreground/70 tracking-wider uppercase">
          {MIN_BOWLS}-bowl minimum order
        </p>
        {showBrowseCTA && (
          <Link
            href="/meal-prep"
            className="inline-flex items-center justify-center mt-8 border border-border bg-transparent text-foreground hover:bg-foreground/5 font-sans tracking-wide px-6 py-3 text-sm transition-colors"
          >
            Browse meal prep →
          </Link>
        )}
      </div>
    </div>
  );
}
