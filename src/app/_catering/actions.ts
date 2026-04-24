"use server";

import { Resend } from "resend";
import type { ZodError } from "zod";
import {
  quickQuoteSchema,
  fullInquirySchema,
  type QuickQuoteInput,
  type FullInquiryInput,
} from "./schemas";

export type ActionResult = {
  status: "idle" | "ok" | "error";
  fieldErrors?: Record<string, string>;
  message?: string;
};

const FROM_ADDRESS = '"Lasa HTX" <notifications@lasahtx.com>';

function formDataToObject(fd: FormData): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of fd.entries()) {
    out[k] = typeof v === "string" ? v : "";
  }
  return out;
}

function flattenFieldErrors(err: ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    // Our schemas are flat (no nested fields), so path[0] is the field name.
    const field = String(issue.path[0] ?? "");
    if (field && !out[field]) out[field] = issue.message;
  }
  return out;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(opts: {
  subject: string;
  replyTo: string;
  html: string;
  text: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !to) {
    console.error(
      "Resend config missing: set RESEND_API_KEY and CONTACT_EMAIL_TO in Vercel env"
    );
    throw new Error("Email service not configured");
  }
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
  });
  if (error) {
    console.error("Resend send error:", error);
    throw new Error(error.message ?? "Resend send failed");
  }
}

/* ── Email templates ─────────────────────────────────────────────────── */

const emailWrapperOpen = `
<!DOCTYPE html>
<html><body style="margin:0; padding:24px; background:#f5f5f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px; margin:0 auto; background:#fff; padding:32px; border:1px solid #e5e5e5;">`;
const emailWrapperClose = `</div></body></html>`;

function row(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 16px 8px 0; border-bottom:1px solid #eee; vertical-align:top; width:140px; color:#666; font-size:12px; text-transform:uppercase; letter-spacing:0.05em;">${label}</td>
    <td style="padding:8px 0; border-bottom:1px solid #eee; color:#222; font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

function quickQuoteHtml(d: QuickQuoteInput): string {
  return `${emailWrapperOpen}
    <h1 style="font-size:20px; margin:0 0 24px; color:#222;">New Catering Quick Quote</h1>
    <table style="width:100%; border-collapse:collapse;">
      ${row("Name", d.name)}
      ${row("Company", d.company)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Event Date", d.eventDate)}
      ${row("Guest Count", d.guestCount)}
    </table>
    <p style="color:#999; font-size:12px; margin-top:24px; padding-top:16px; border-top:1px solid #eee;">
      Reply directly to this email to respond to ${escapeHtml(d.name)} at ${escapeHtml(d.email)}.
    </p>
  ${emailWrapperClose}`;
}

function quickQuoteText(d: QuickQuoteInput): string {
  const lines = [
    `New Catering Quick Quote`,
    ``,
    `Name: ${d.name}`,
  ];
  if (d.company) lines.push(`Company: ${d.company}`);
  lines.push(`Email: ${d.email}`);
  lines.push(`Phone: ${d.phone}`);
  lines.push(`Event Date: ${d.eventDate}`);
  lines.push(`Guest Count: ${d.guestCount}`);
  lines.push(``);
  lines.push(`Reply to this email to respond to ${d.name}.`);
  return lines.join("\n");
}

function fullInquiryHtml(d: FullInquiryInput): string {
  return `${emailWrapperOpen}
    <h1 style="font-size:20px; margin:0 0 24px; color:#222;">New Catering Full Inquiry</h1>
    <table style="width:100%; border-collapse:collapse;">
      ${row("Name", d.name)}
      ${row("Company", d.company)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Event Date", d.eventDate)}
      ${row("Guest Count", d.guestCount)}
      ${row("Budget Range", d.budgetRange)}
      ${row("Event Type", d.eventType)}
      ${row("Event Location", d.eventLocation)}
      ${row("Notes", d.notes)}
    </table>
    <p style="color:#999; font-size:12px; margin-top:24px; padding-top:16px; border-top:1px solid #eee;">
      Reply directly to this email to respond to ${escapeHtml(d.name)} at ${escapeHtml(d.email)}.
    </p>
  ${emailWrapperClose}`;
}

function fullInquiryText(d: FullInquiryInput): string {
  const lines = [`New Catering Full Inquiry`, ``, `Name: ${d.name}`];
  if (d.company) lines.push(`Company: ${d.company}`);
  lines.push(`Email: ${d.email}`);
  lines.push(`Phone: ${d.phone}`);
  lines.push(`Event Date: ${d.eventDate}`);
  lines.push(`Guest Count: ${d.guestCount}`);
  if (d.budgetRange) lines.push(`Budget Range: ${d.budgetRange}`);
  if (d.eventType) lines.push(`Event Type: ${d.eventType}`);
  if (d.eventLocation) lines.push(`Event Location: ${d.eventLocation}`);
  if (d.notes) lines.push(``, `Notes:`, d.notes);
  lines.push(``, `Reply to this email to respond to ${d.name}.`);
  return lines.join("\n");
}

/* ── Server actions ─────────────────────────────────────────────────── */

export async function submitQuickQuote(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const raw = formDataToObject(formData);

  // Honeypot — silently succeed so the bot thinks it worked
  if (raw.website_url_xz7 && raw.website_url_xz7.trim()) {
    return { status: "ok" };
  }

  const parsed = quickQuoteSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: flattenFieldErrors(parsed.error),
    };
  }

  const d = parsed.data;

  try {
    await sendEmail({
      subject: `Lasa HTX — Catering Quick Quote from ${d.name}`,
      replyTo: d.email,
      html: quickQuoteHtml(d),
      text: quickQuoteText(d),
    });
    return { status: "ok" };
  } catch (err) {
    console.error("submitQuickQuote send failed:", err);
    return {
      status: "error",
      message:
        "Something went wrong. Please try again or call us directly at 832-510-8440.",
    };
  }
}

export async function submitFullInquiry(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const raw = formDataToObject(formData);

  if (raw.website_url_xz7 && raw.website_url_xz7.trim()) {
    return { status: "ok" };
  }

  const parsed = fullInquirySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: flattenFieldErrors(parsed.error),
    };
  }

  const d = parsed.data;

  const subject =
    `Lasa HTX — Full Catering Inquiry from ${d.name}` +
    (d.eventType ? ` for ${d.eventType}` : "") +
    (d.eventDate ? ` on ${d.eventDate}` : "");

  try {
    await sendEmail({
      subject,
      replyTo: d.email,
      html: fullInquiryHtml(d),
      text: fullInquiryText(d),
    });
    return { status: "ok" };
  } catch (err) {
    console.error("submitFullInquiry send failed:", err);
    return {
      status: "error",
      message:
        "Something went wrong. Please try again or call us directly at 832-510-8440.",
    };
  }
}
