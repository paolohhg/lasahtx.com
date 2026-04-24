"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore, type PricedCartItem } from "@/stores/cart-store";

interface CartItemRowProps {
  item: PricedCartItem;
}

/** One priced line item in the cart. Rendered inside both the drawer and
 * the /cart page. Reads cart actions from the store directly (no callback
 * plumbing from parent). */
export function CartItemRow({ item }: CartItemRowProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const {
    cartItem,
    bowl,
    variant,
    selectedModifiers,
    selectedAddOns,
    unitPriceUSD,
  } = item;

  // Only show variant label if the bowl has more than one variant (avoids
  // redundant "Pancit — Pancit" on single-variant bowls).
  const hasMultipleVariants = bowl.variants.length > 1;

  const modifierSummary = selectedModifiers.map((m) => m.label).join(" · ");
  const addOnSummary = selectedAddOns.map((a) => a.label).join(", ");

  return (
    <div className="flex gap-4 p-3 border-b border-border last:border-b-0">
      {/* Image placeholder */}
      <div className="w-16 h-16 shrink-0 overflow-hidden bg-muted flex items-center justify-center text-muted-foreground/40 text-[10px] uppercase tracking-wider text-center leading-tight">
        Photo
        <br />
        Soon
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{bowl.title}</h4>
        {hasMultipleVariants && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {variant.label}
          </p>
        )}
        {modifierSummary && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {modifierSummary}
          </p>
        )}
        {addOnSummary && (
          <p className="text-xs text-muted-foreground mt-0.5">
            + {addOnSummary}
          </p>
        )}
        <p className="font-semibold text-sm mt-1">
          ${unitPriceUSD.toFixed(2)}
        </p>
      </div>

      {/* Remove + qty controls */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <button
          type="button"
          onClick={() => removeItem(cartItem.localId)}
          aria-label={`Remove ${bowl.title}`}
          className="h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() =>
              updateQuantity(cartItem.localId, cartItem.quantity - 1)
            }
            aria-label="Decrease quantity"
            className="h-6 w-6 flex items-center justify-center border border-border hover:border-accent/50 transition-colors"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span
            className="w-6 text-center text-xs tabular-nums"
            aria-live="polite"
            aria-label={`Quantity: ${cartItem.quantity}`}
          >
            {cartItem.quantity}
          </span>
          <button
            type="button"
            onClick={() =>
              updateQuantity(cartItem.localId, cartItem.quantity + 1)
            }
            aria-label="Increase quantity"
            className="h-6 w-6 flex items-center justify-center border border-border hover:border-accent/50 transition-colors"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
