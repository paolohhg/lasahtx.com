"use client";

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCartStore, getTotalQuantity } from "@/stores/cart-store";
import { CartBody } from "./CartBody";

/** Navbar-mounted component: the cart icon button (with live quantity badge)
 * and the cart drawer share internal state. Bypasses SheetTrigger's render
 * prop entirely — we control `open` from the button's onClick, which works
 * the same whether the underlying primitive is Radix or Base UI. */
export function CartDrawerTrigger() {
  const [open, setOpen] = useState(false);
  const items = useCartStore((s) => s.items);

  // Avoid SSR/hydration flicker on the badge — store hydrates from
  // localStorage after mount.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const totalQty = hydrated ? getTotalQuantity(items) : 0;
  const itemLabel = totalQty === 1 ? "item" : "items";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={
          totalQty > 0
            ? `Open cart, ${totalQty} ${itemLabel}`
            : "Open cart"
        }
        className="relative h-10 w-10 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalQty > 0 && (
          <span
            aria-hidden="true"
            className="absolute -top-0.5 -right-0.5 min-w-[1.25rem] h-5 px-1 rounded-full flex items-center justify-center text-[10px] font-semibold bg-accent text-accent-foreground"
          >
            {totalQty}
          </span>
        )}
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-lg flex flex-col h-full p-0 gap-0"
        >
          <SheetHeader className="flex-shrink-0 px-4 py-4 border-b border-border">
            <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
            <SheetDescription>
              {totalQty === 0
                ? "Your cart is empty"
                : `${totalQty} ${itemLabel}`}
            </SheetDescription>
          </SheetHeader>
          <CartBody context="drawer" onClose={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
