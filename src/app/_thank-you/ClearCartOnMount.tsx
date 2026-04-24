"use client";

import { useEffect } from "react";
import { useCartStore } from "@/stores/cart-store";

/** Side-effect-only client component rendered on /thank-you.
 * Clears the cart once on mount so the user returning to /meal-prep
 * doesn't see already-paid-for bowls still in their drawer.
 *
 * Zustand's `clearCart` has stable identity, so the effect runs exactly
 * once per mount. Safe against double-renders in dev strict mode. */
export function ClearCartOnMount() {
  const clearCart = useCartStore((s) => s.clearCart);
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return null;
}
