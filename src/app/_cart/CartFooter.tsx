"use client";

import Link from "next/link";
import {
  useCartStore,
  canCheckout,
  getSubtotalUSD,
  getTotalQuantity,
  MIN_BOWLS,
} from "@/stores/cart-store";

interface CartFooterProps {
  /** Drawer footer shows an extra "View full page" link; /cart page doesn't. */
  showPageLink: boolean;
  /** Called when checkout navigation starts (e.g., drawer uses this to close). */
  onCheckoutClick?: () => void;
  /** Called when user confirms clear (drawer closes after clearing if provided). */
  onClearConfirmed?: () => void;
}

export function CartFooter({
  showPageLink,
  onCheckoutClick,
  onClearConfirmed,
}: CartFooterProps) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  const subtotal = getSubtotalUSD(items);
  const totalQty = getTotalQuantity(items);
  const valid = canCheckout(items);
  const bowlsShort = Math.max(0, MIN_BOWLS - totalQty);

  const handleClear = () => {
    if (typeof window === "undefined") return;
    if (window.confirm("Remove all items from your cart?")) {
      clearCart();
      onClearConfirmed?.();
    }
  };

  return (
    <div className="flex-shrink-0 border-t border-border pt-4 px-4 pb-4 space-y-3 bg-background">
      {/* Subtotal + secondary links */}
      <div className="flex items-baseline justify-between">
        <span className="font-display text-xl">Subtotal</span>
        <span className="text-xl font-semibold tabular-nums">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={handleClear}
          className="text-muted-foreground hover:text-destructive underline underline-offset-2 transition-colors"
        >
          Clear cart
        </button>
        {showPageLink && (
          <Link
            href="/cart"
            className="text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
          >
            View full page →
          </Link>
        )}
      </div>

      {/* 4-bowl minimum helper text (only shown when below) */}
      {!valid && totalQty > 0 && (
        <p className="text-xs text-muted-foreground text-center pt-1">
          Add <span className="text-accent font-semibold">{bowlsShort}</span>{" "}
          more {bowlsShort === 1 ? "bowl" : "bowls"} to continue.
        </p>
      )}

      {/* Checkout button */}
      {valid ? (
        <Link
          href="/checkout"
          onClick={onCheckoutClick}
          className="w-full inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold tracking-wide py-4 text-sm transition-colors"
        >
          Checkout — ${subtotal.toFixed(2)}
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="w-full inline-flex items-center justify-center bg-muted text-muted-foreground font-sans font-semibold tracking-wide py-4 text-sm cursor-not-allowed"
        >
          {MIN_BOWLS}-bowl minimum
        </button>
      )}

      <p className="text-center text-[11px] text-muted-foreground">
        Taxes calculated at checkout.
      </p>
    </div>
  );
}
