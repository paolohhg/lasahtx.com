import { z } from "zod";

/**
 * Catering form validation schemas. Shared by:
 * - Server actions in ./actions.ts (authoritative validation)
 * - Client form components for per-field blur validation
 *
 * Keep email/phone regex here matching Lovable's conventions so existing
 * inbound data shape stays compatible with what Paolo is used to seeing.
 */

const email = z
  .string()
  .trim()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email");

const phone = z
  .string()
  .trim()
  .regex(/^[\d\s()+-]{7,20}$/, "Enter a valid phone number");

const required = z.string().trim().min(1, "Required");

export const quickQuoteSchema = z.object({
  company: z.string().trim().optional(),
  name: required,
  email,
  phone,
  eventDate: required,
  guestCount: required,
  website_url_xz7: z.string().optional(), // honeypot; actions.ts handles
});

export const fullInquirySchema = quickQuoteSchema.extend({
  budgetRange: z.string().trim().optional(),
  eventType: z.string().trim().optional(),
  eventLocation: z.string().trim().optional(),
  notes: z.string().trim().max(5000).optional(),
});

export type QuickQuoteInput = z.infer<typeof quickQuoteSchema>;
export type FullInquiryInput = z.infer<typeof fullInquirySchema>;

export const guestCountOptions = [
  "25–50 guests",
  "50–100 guests",
  "100–200 guests",
  "200–500+ guests",
] as const;

export const budgetOptions = [
  "$1,000–$3,000",
  "$3,000–$7,500",
  "$7,500+",
  "Not sure yet",
] as const;

export const eventTypes = [
  "Corporate Lunch / Office",
  "Conference / Summit",
  "Medical / Pharma",
  "Grand Opening",
  "Private Event",
  "Wedding",
  "Real Estate Event",
  "Other",
] as const;
