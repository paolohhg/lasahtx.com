import Stripe from "stripe";
import type { NextRequest } from "next/server";
import { sendOrderConfirmation } from "./email";

/** Stripe webhook receiver. Currently handles only checkout.session.completed;
 * other event types are acknowledged with 200 and ignored.
 *
 * Response discipline: return 200 fast. If the downstream email send fails,
 * log it but still return 200 — otherwise Stripe retries and we get duplicate
 * confirmation emails. Session ID + error are logged so Paolo can manually
 * resend from the dashboard if something actually breaks.
 *
 * Signature verification uses the raw request body, which Next 16's route
 * handlers expose via `req.text()`. */
export async function POST(req: NextRequest): Promise<Response> {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!secret || !stripeKey) {
    console.error(
      "[webhook] Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET"
    );
    return new Response("Webhook not configured", { status: 500 });
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    const stripe = new Stripe(stripeKey);
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    // Acknowledge silently — Stripe stops retrying once we return 2xx.
    return new Response(null, { status: 200 });
  }

  const sessionFromEvent = event.data.object as Stripe.Checkout.Session;

  // The event's session object doesn't include expanded line_items.
  // Re-retrieve with expand for the email template.
  let fullSession: Stripe.Checkout.Session;
  try {
    const stripe = new Stripe(stripeKey);
    fullSession = await stripe.checkout.sessions.retrieve(
      sessionFromEvent.id,
      { expand: ["line_items"] }
    );
  } catch (err) {
    console.error(
      "[webhook] Failed to retrieve session for email:",
      sessionFromEvent.id,
      err
    );
    // Return 200 — Stripe-retrying won't fix a retrieval problem.
    // Paolo can manually resend confirmation via the dashboard if needed.
    return new Response(null, { status: 200 });
  }

  // Fire-and-log the email. Do NOT await — we want to return 200 fast.
  // If the send fails, it's logged but Stripe doesn't retry (which would
  // cause duplicate emails on transient Resend blips).
  sendOrderConfirmation(fullSession).catch((err) => {
    console.error(
      "[webhook] Confirmation email failed for session",
      fullSession.id,
      err
    );
  });

  return new Response(null, { status: 200 });
}
