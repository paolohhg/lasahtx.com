/**
 * Pop-up drops and private events.
 *
 * Paolo edits this file directly to announce new drops. The /pop-ups page UI
 * and the Event JSON-LD both read from `popUps` below.
 *
 * `status` is the source of truth for UI state — NEVER derive it from
 * `Date.now()` comparisons. The Lovable site's previous countdown got stuck
 * in "Sold Out" for two months because of that mistake.
 */

export interface PopUp {
  /** Stable slug — safe to reference from URLs, schema @id, etc. */
  id: string;
  title: string;
  description: string;
  /** ISO 8601 start datetime, e.g. "2026-05-02T16:00:00-05:00" */
  date: string;
  /** ISO 8601 end datetime */
  endDate: string;
  location: {
    name: string;
    address: string;
  };
  /** Set explicitly by Paolo. Do not compute from `date`. */
  status: "upcoming" | "sold_out" | "past";
  /** Empty string means the Stripe Payment Link has not been created yet. */
  stripePaymentLinkUrl?: string;
  /** Path under /public or an imported asset */
  image?: string;
}

export const popUps: PopUp[] = [];
