"use client";

import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  type StateStorage,
} from "zustand/middleware";
import {
  addOns,
  mealPrepBowls,
  type AddOn,
  type BowlModifier,
  type BowlVariant,
  type MealPrepBowl,
} from "@/content/meal-prep";

/** Minimum bowls across all cart items required to enable checkout.
 * Enforced client-side in 5b and re-enforced server-side in 5c. */
export const MIN_BOWLS = 4;

/** Cart is cleared after 24 hours of inactivity. Zustand's `persist`
 * middleware calls `setItem` on every state change, so this rolls forward
 * while the user is actively adding items. Coming back the next day → fresh. */
const TTL_MS = 24 * 60 * 60 * 1000;

/** A single line in the cart. Stores IDs only — prices are recomputed from
 * the content module on every read, so price changes propagate instantly and
 * the server (5c) has a single source of truth. */
export interface CartItem {
  /** Client-generated, unique per line. Used as React key + for updates. */
  localId: string;
  /** References `MealPrepBowl.id`. */
  bowlId: string;
  /** References `BowlVariant.id` within that bowl. */
  variantId: string;
  /** Usually empty; `["no-pork"]` for Pancit's opt-out. */
  modifierIds: string[];
  /** Subset of `addOns[*].id`. */
  addOnIds: string[];
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "localId">) => void;
  updateQuantity: (localId: string, quantity: number) => void;
  removeItem: (localId: string) => void;
  clearCart: () => void;
}

/** Expiring localStorage adapter for Zustand persist.
 *
 * Zustand's `createJSONStorage` expects a storage object whose getItem/setItem
 * operate on the JSON string Zustand serializes. This adapter wraps that
 * string inside an envelope `{ savedAt: number, value: string }`, drops
 * entries older than `TTL_MS` on read, and refreshes `savedAt` on every write. */
const expiringLocalStorage: StateStorage = {
  getItem: (name) => {
    if (typeof localStorage === "undefined") return null;
    const raw = localStorage.getItem(name);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as { savedAt: number; value: string };
      if (!parsed.savedAt || Date.now() - parsed.savedAt > TTL_MS) {
        localStorage.removeItem(name);
        return null;
      }
      return parsed.value;
    } catch {
      localStorage.removeItem(name);
      return null;
    }
  },
  setItem: (name, value) => {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(
      name,
      JSON.stringify({ savedAt: Date.now(), value })
    );
  },
  removeItem: (name) => {
    if (typeof localStorage === "undefined") return;
    localStorage.removeItem(name);
  },
};

function genLocalId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((s) => ({
          items: [...s.items, { ...item, localId: genLocalId() }],
        })),
      updateQuantity: (localId, quantity) =>
        set((s) => ({
          items:
            quantity <= 0
              ? s.items.filter((i) => i.localId !== localId)
              : s.items.map((i) =>
                  i.localId === localId ? { ...i, quantity } : i
                ),
        })),
      removeItem: (localId) =>
        set((s) => ({ items: s.items.filter((i) => i.localId !== localId) })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "lasa-cart",
      storage: createJSONStorage(() => expiringLocalStorage),
    }
  )
);

/* ── Pure pricing helpers (reference the content module for authority) ──── */

export interface PricedCartItem {
  cartItem: CartItem;
  bowl: MealPrepBowl;
  variant: BowlVariant;
  selectedModifiers: BowlModifier[];
  selectedAddOns: AddOn[];
  unitPriceUSD: number; // variant + modifiers + add-ons
  lineTotalUSD: number; // unit × quantity
}

/** Price every item in the cart. Items whose bowl or variant no longer exist
 * in the content module are dropped (orphan filter). Items referring to
 * variants with `available: false` STILL price normally — they got added while
 * available, and pricing is a pure lookup. Checkout-time availability
 * enforcement is the server's job (5c). */
export function priceCartItems(items: CartItem[]): PricedCartItem[] {
  return items.flatMap((ci) => {
    const bowl = mealPrepBowls.find((b) => b.id === ci.bowlId);
    if (!bowl) return [];
    const variant = bowl.variants.find((v) => v.id === ci.variantId);
    if (!variant) return [];
    const selectedModifiers =
      bowl.modifiers?.filter((m) => ci.modifierIds.includes(m.id)) ?? [];
    const selectedAddOns = addOns.filter((a) => ci.addOnIds.includes(a.id));
    const unitPriceUSD =
      variant.priceUSD +
      selectedModifiers.reduce((s, m) => s + m.priceUSD, 0) +
      selectedAddOns.reduce((s, a) => s + a.priceUSD, 0);
    return [
      {
        cartItem: ci,
        bowl,
        variant,
        selectedModifiers,
        selectedAddOns,
        unitPriceUSD,
        lineTotalUSD: unitPriceUSD * ci.quantity,
      },
    ];
  });
}

export function getTotalQuantity(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function getSubtotalUSD(items: CartItem[]): number {
  return priceCartItems(items).reduce((sum, p) => sum + p.lineTotalUSD, 0);
}

export function canCheckout(items: CartItem[]): boolean {
  return getTotalQuantity(items) >= MIN_BOWLS;
}
