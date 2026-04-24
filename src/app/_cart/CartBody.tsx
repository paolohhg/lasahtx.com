"use client";

import { useEffect, useState } from "react";
import { useCartStore, priceCartItems } from "@/stores/cart-store";
import { CartItemRow } from "./CartItemRow";
import { CartFooter } from "./CartFooter";
import { CartEmpty } from "./CartEmpty";

interface CartBodyProps {
  context: "drawer" | "page";
  /** Drawer passes a close callback so checkout-click / clear-confirmed can
   * dismiss the sheet. /cart page passes nothing. */
  onClose?: () => void;
}

/** Shared cart body — renders the priced list + footer, or the empty state.
 * Used by both the drawer's SheetContent and the /cart page's <main>. */
export function CartBody({ context, onClose }: CartBodyProps) {
  const items = useCartStore((s) => s.items);

  // Avoid SSR/hydration flicker — store hydrates from localStorage after mount.
  // Until then, show nothing rather than flashing the empty state.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  if (!hydrated) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <span className="sr-only">Loading cart…</span>
      </div>
    );
  }

  const priced = priceCartItems(items);

  if (priced.length === 0) {
    return <CartEmpty showBrowseCTA={context === "page"} />;
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto min-h-0 px-4 py-2">
        {priced.map((p) => (
          <CartItemRow key={p.cartItem.localId} item={p} />
        ))}
      </div>
      <CartFooter
        showPageLink={context === "drawer"}
        onCheckoutClick={onClose}
        onClearConfirmed={onClose}
      />
    </>
  );
}
