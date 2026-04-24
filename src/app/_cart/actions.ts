"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { siteUrl } from "@/lib/site";
import { addOns, mealPrepBowls } from "@/content/meal-prep";
import { MIN_BOWLS, type CartItem } from "@/stores/cart-store";

export type CheckoutActionResult = { ok: false; message: string };

interface BowlsDetailEntry {
  bowl: string;
  variant: string;
  modifiers: string;
  addOns: string;
  quantity: number;
}

const GENERIC_ERROR =
  "Something went wrong. Please try again or call us at (832) 510-8440.";

/** Create a Stripe Checkout Session from the client-submitted cart.
 *
 * Authoritative data flow: client sends IDs only → server resolves everything
 * from the content module → server references pre-registered Stripe price IDs.
 * Never trust client-submitted prices; they're only for display.
 *
 * On success: throws NEXT_REDIRECT via `redirect(session.url)` — client never
 * receives a return value. On failure: returns `{ ok: false, message }` for
 * the client to toast. */
export async function createCheckoutSession(
  items: CartItem[]
): Promise<CheckoutActionResult | never> {
  // Validation ─────────────────────────────────────────────────────────
  if (!items || items.length === 0) {
    return { ok: false, message: "Your cart is empty." };
  }

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  if (totalQty < MIN_BOWLS) {
    return {
      ok: false,
      message: `Minimum ${MIN_BOWLS} bowls per order. Please add more.`,
    };
  }

  const lineItems: { price: string; quantity: number }[] = [];
  const bowlsDetail: BowlsDetailEntry[] = [];

  for (const item of items) {
    if (item.quantity <= 0) continue;

    const bowl = mealPrepBowls.find((b) => b.id === item.bowlId);
    if (!bowl) {
      return {
        ok: false,
        message:
          "One of your items is no longer available. Please refresh and try again.",
      };
    }

    const variant = bowl.variants.find((v) => v.id === item.variantId);
    if (!variant) {
      return {
        ok: false,
        message:
          "One of your items is no longer available. Please refresh and try again.",
      };
    }

    if (variant.available === false) {
      return {
        ok: false,
        message: "One of your items sold out. Please refresh the page.",
      };
    }

    if (!variant.stripePriceId) {
      console.error(
        `[checkout] Stripe price ID missing on ${bowl.id} / ${variant.id}`
      );
      return { ok: false, message: GENERIC_ERROR };
    }

    lineItems.push({
      price: variant.stripePriceId,
      quantity: item.quantity,
    });

    // Add-on line items — quantity mirrors bowl quantity
    for (const addOnId of item.addOnIds) {
      const addOn = addOns.find((a) => a.id === addOnId);
      if (!addOn) {
        return {
          ok: false,
          message:
            "One of your add-ons is no longer available. Please refresh and try again.",
        };
      }
      if (!addOn.stripePriceId) {
        console.error(`[checkout] Stripe price ID missing on add-on ${addOn.id}`);
        return { ok: false, message: GENERIC_ERROR };
      }
      lineItems.push({
        price: addOn.stripePriceId,
        quantity: item.quantity,
      });
    }

    // Validate modifier IDs (defensive — they don't become line items)
    const selectedModifierLabels: string[] = [];
    for (const modifierId of item.modifierIds) {
      const modifier = bowl.modifiers?.find((m) => m.id === modifierId);
      if (!modifier) {
        return {
          ok: false,
          message:
            "One of your options is no longer available. Please refresh and try again.",
        };
      }
      selectedModifierLabels.push(modifier.label);
    }

    const selectedAddOnLabels = item.addOnIds
      .map((id) => addOns.find((a) => a.id === id)?.label)
      .filter((x): x is string => Boolean(x));

    bowlsDetail.push({
      bowl: bowl.title,
      variant: variant.label,
      modifiers: selectedModifierLabels.join(", "),
      addOns: selectedAddOnLabels.join(", "),
      quantity: item.quantity,
    });
  }

  if (lineItems.length === 0) {
    return { ok: false, message: "Your cart is empty." };
  }

  // Stripe Session ─────────────────────────────────────────────────────
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("[checkout] STRIPE_SECRET_KEY not set in environment");
    return { ok: false, message: GENERIC_ERROR };
  }

  let session: Stripe.Checkout.Session;
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      // ui_mode omitted — "hosted" (redirect to stripe.com) is the default.
      // Stripe's TypeScript union for ui_mode accepts "embedded" | "custom"
      // but not the literal "hosted" since that's the implicit default.
      line_items: lineItems,
      customer_creation: "if_required",
      phone_number_collection: { enabled: true },
      metadata: {
        bowlsDetail: JSON.stringify(bowlsDetail),
        source: "lasahtx.com/meal-prep",
      },
      success_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
      custom_text: {
        submit: {
          message:
            "Pickup at The Deck Food Park, 5802 FM 1488, Magnolia, TX. We'll email you when your order is ready.",
        },
      },
    });
  } catch (err) {
    console.error("[checkout] Stripe session create failed:", err);
    return { ok: false, message: GENERIC_ERROR };
  }

  if (!session.url) {
    console.error(
      "[checkout] Stripe session returned without URL:",
      session.id
    );
    return { ok: false, message: GENERIC_ERROR };
  }

  // Never returns — Next catches the NEXT_REDIRECT throw and navigates.
  redirect(session.url);
}
