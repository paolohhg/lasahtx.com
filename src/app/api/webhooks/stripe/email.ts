import { Resend } from "resend";
import type Stripe from "stripe";

const FROM_ADDRESS = '"Lasa HTX" <notifications@lasahtx.com>';
/** Customer replies land with Paolo — inverted from session 4's catering
 * flow where the customer was the reply target. */
const REPLY_TO = "catering@lasahtx.com";

interface BowlsDetailEntry {
  bowl: string;
  variant: string;
  modifiers: string;
  addOns: string;
  quantity: number;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(args: {
  customerName: string;
  lineItems: Stripe.LineItem[];
  bowlsDetail: BowlsDetailEntry[];
  subtotal: number;
  tax: number;
  total: number;
}): string {
  const { customerName, lineItems, bowlsDetail, subtotal, tax, total } = args;

  const greeting = customerName
    ? `Thanks, ${escapeHtml(customerName)}!`
    : "Thanks for your order!";

  const lineItemsHtml = lineItems
    .map(
      (li) => `
    <tr>
      <td style="padding:10px 0;font-size:14px;color:#222;vertical-align:top;line-height:1.4;">
        ${escapeHtml(li.description ?? "Item")}
        <span style="color:#888;">&nbsp;&times; ${li.quantity}</span>
      </td>
      <td style="padding:10px 0;font-size:14px;font-weight:600;color:#222;text-align:right;vertical-align:top;white-space:nowrap;">
        $${((li.amount_total ?? 0) / 100).toFixed(2)}
      </td>
    </tr>
  `
    )
    .join("");

  const modifierLines = bowlsDetail.filter((d) => d.modifiers);
  const modifierNotesHtml =
    modifierLines.length > 0
      ? `
    <div style="padding:24px 32px;border-top:1px solid #eee;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:0 0 12px;font-weight:600;">
        Order Notes
      </div>
      ${modifierLines
        .map(
          (d) => `
        <p style="font-size:14px;margin:4px 0;color:#444;line-height:1.5;">
          <strong style="color:#141414;">${escapeHtml(d.bowl)} &mdash; ${escapeHtml(d.variant)}</strong>: ${escapeHtml(d.modifiers)}
        </p>
      `
        )
        .join("")}
    </div>
  `
      : "";

  const taxRow =
    tax > 0
      ? `
    <tr>
      <td style="padding:6px 0;font-size:14px;color:#666;">Tax</td>
      <td style="padding:6px 0;font-size:14px;text-align:right;color:#222;">$${tax.toFixed(2)}</td>
    </tr>
  `
      : "";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Lasa HTX Order &mdash; Confirmed</title>
</head>
<body style="margin:0;padding:24px;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#222;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e5e5;">

    <div style="padding:32px 32px 24px;border-bottom:1px solid #eee;text-align:center;">
      <div style="font-size:22px;font-weight:700;letter-spacing:0.18em;color:#141414;">
        LASA HTX
      </div>
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#888;margin-top:6px;">
        Modern Asian Hospitality
      </div>
    </div>

    <div style="padding:32px 32px 8px;">
      <h1 style="font-size:26px;font-weight:700;letter-spacing:0.02em;margin:0 0 12px;color:#141414;">
        ${greeting}
      </h1>
      <p style="font-size:16px;line-height:1.6;margin:0 0 8px;color:#444;">
        Your order is confirmed. We&rsquo;re prepping your bowls.
      </p>
    </div>

    <div style="padding:16px 32px 24px;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:16px 0 4px;font-weight:600;">
        Order Summary
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${lineItemsHtml}
      </table>
      <table style="width:100%;border-collapse:collapse;border-top:2px solid #141414;margin-top:12px;">
        <tr>
          <td style="padding:6px 0;font-size:14px;color:#666;">Subtotal</td>
          <td style="padding:6px 0;font-size:14px;text-align:right;color:#222;">$${subtotal.toFixed(2)}</td>
        </tr>
        ${taxRow}
        <tr>
          <td style="padding:12px 0 0;font-size:18px;font-weight:700;color:#141414;">Total</td>
          <td style="padding:12px 0 0;font-size:18px;font-weight:700;text-align:right;color:#141414;">$${total.toFixed(2)}</td>
        </tr>
      </table>
    </div>

    ${modifierNotesHtml}

    <div style="padding:24px 32px;border-top:1px solid #eee;background:#faf9f6;">
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:0 0 12px;font-weight:600;">
        Pickup Location
      </div>
      <p style="font-size:16px;font-weight:600;margin:0 0 4px;color:#141414;">The Deck Food Park</p>
      <p style="font-size:14px;margin:0 0 20px;color:#444;line-height:1.5;">
        5802 FM 1488<br>
        Magnolia, TX 77354
      </p>
      <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:0 0 8px;font-weight:600;">
        What to expect
      </div>
      <p style="font-size:14px;margin:0;color:#444;line-height:1.6;">
        We&rsquo;ll reach out via phone within 24 hours to coordinate your pickup window.
      </p>
    </div>

    <div style="padding:24px 32px;text-align:center;border-top:1px solid #eee;">
      <p style="font-size:13px;color:#666;margin:0;line-height:1.6;">
        Questions? Reply to this email or call
        <a href="tel:+18325108440" style="color:#B5391F;text-decoration:none;font-weight:600;">(832) 510-8440</a>.
      </p>
    </div>

    <div style="padding:24px 32px;background:#141414;color:#f4f2ed;text-align:center;">
      <p style="margin:0;font-size:12px;line-height:1.6;color:#a7a394;">
        Lasa HTX &mdash; Filipino-rooted modern Asian catering, pop-ups, and meal prep.<br>
        Built for Houston. Inspired by Asia.
      </p>
    </div>

  </div>
</body>
</html>`;
}

function buildText(args: {
  customerName: string;
  lineItems: Stripe.LineItem[];
  bowlsDetail: BowlsDetailEntry[];
  subtotal: number;
  tax: number;
  total: number;
}): string {
  const { customerName, lineItems, bowlsDetail, subtotal, tax, total } = args;
  const lines: string[] = [];

  lines.push("LASA HTX");
  lines.push("Modern Asian Hospitality");
  lines.push("");
  lines.push(customerName ? `Thanks, ${customerName}!` : "Thanks for your order!");
  lines.push("");
  lines.push("Your order is confirmed. We're prepping your bowls.");
  lines.push("");
  lines.push("ORDER SUMMARY");
  lines.push("-------------");
  for (const li of lineItems) {
    const price = ((li.amount_total ?? 0) / 100).toFixed(2);
    lines.push(
      `  ${li.description ?? "Item"} x ${li.quantity}    $${price}`
    );
  }
  lines.push("");
  lines.push(`Subtotal: $${subtotal.toFixed(2)}`);
  if (tax > 0) lines.push(`Tax:      $${tax.toFixed(2)}`);
  lines.push(`Total:    $${total.toFixed(2)}`);

  const modifierLines = bowlsDetail.filter((d) => d.modifiers);
  if (modifierLines.length > 0) {
    lines.push("");
    lines.push("ORDER NOTES");
    lines.push("-----------");
    for (const d of modifierLines) {
      lines.push(`  ${d.bowl} -- ${d.variant}: ${d.modifiers}`);
    }
  }

  lines.push("");
  lines.push("PICKUP LOCATION");
  lines.push("---------------");
  lines.push("The Deck Food Park");
  lines.push("5802 FM 1488");
  lines.push("Magnolia, TX 77354");
  lines.push("");
  lines.push("WHAT TO EXPECT");
  lines.push("--------------");
  lines.push(
    "We'll reach out via phone within 24 hours to coordinate your pickup window."
  );
  lines.push("");
  lines.push("Questions? Reply to this email or call (832) 510-8440.");
  lines.push("");
  lines.push("--");
  lines.push(
    "Lasa HTX -- Filipino-rooted modern Asian catering, pop-ups, and meal prep."
  );
  lines.push("Built for Houston. Inspired by Asia.");

  return lines.join("\n");
}

export async function sendOrderConfirmation(
  session: Stripe.Checkout.Session
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[webhook-email] RESEND_API_KEY not set; cannot send confirmation"
    );
    return;
  }

  const customerEmail = session.customer_details?.email;
  if (!customerEmail) {
    console.error(
      "[webhook-email] No customer email on session",
      session.id
    );
    return;
  }

  const customerName = session.customer_details?.name ?? "";
  const total = (session.amount_total ?? 0) / 100;
  const subtotal = (session.amount_subtotal ?? 0) / 100;
  const tax = total - subtotal;
  const lineItems = session.line_items?.data ?? [];

  let bowlsDetail: BowlsDetailEntry[] = [];
  try {
    bowlsDetail = JSON.parse(session.metadata?.bowlsDetail ?? "[]");
  } catch {
    // Malformed metadata — continue without modifier notes.
  }

  const html = buildHtml({
    customerName,
    lineItems,
    bowlsDetail,
    subtotal,
    tax,
    total,
  });
  const text = buildText({
    customerName,
    lineItems,
    bowlsDetail,
    subtotal,
    tax,
    total,
  });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: customerEmail,
    replyTo: REPLY_TO,
    subject: "Your Lasa HTX Order \u2014 Confirmed",
    html,
    text,
  });

  if (error) {
    console.error("[webhook-email] Resend send error:", error);
    throw new Error(error.message ?? "Resend send failed");
  }
}
