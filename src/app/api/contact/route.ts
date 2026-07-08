import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail =
      process.env.NOTIFY_EMAIL || "info@viventiarealtysolutions.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Viventia Contact <contact@viventiarealtysolutions.com>",
        to: notifyEmail,
        subject: `New Contact Enquiry — ${name}`,
        html: notificationHtml({ name, email, phone, service, message }),
      });

      if (email) {
        await resend.emails.send({
          from: "Viventia Realty Solutions <contact@viventiarealtysolutions.com>",
          to: email,
          subject: "We received your message — Viventia Realty Solutions",
          html: autoReplyHtml(name),
        });
      }
    } else {
      console.log("\n━━━ NEW CONTACT ENQUIRY ━━━");
      console.log({ name, email, phone, service, message });
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      console.log("[INFO] Set RESEND_API_KEY in .env.local to enable email notifications.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

/* ─── Email templates ─────────────────────────────────────── */

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
}

function notificationHtml({ name, email, phone, service, message }: ContactData): string {
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Service Interest", service || "—"],
    ["Message", message || "—"],
    ["Received", new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" }) + " GST"],
  ];

  const tableRows = rows
    .map(
      ([label, val]) =>
        `<tr><td style="padding:9px 14px;font-family:'Arial',sans-serif;font-size:12px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;border-bottom:1px solid #f0e9d6;">${label}</td><td style="padding:9px 14px;font-family:'Arial',sans-serif;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f0e9d6;">${val}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f1eb;">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,0.08);">
  <div style="background:#07090F;padding:28px 32px;text-align:center;">
    <div style="font-family:'Arial',sans-serif;font-size:18px;font-weight:300;color:#F5F0E8;letter-spacing:6px;text-transform:uppercase;">VIVENTIA</div>
    <div style="font-family:'Arial',sans-serif;font-size:9px;font-weight:700;color:#C9A84C;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">REALTY SOLUTIONS · NEW CONTACT ENQUIRY</div>
  </div>
  <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
  <div style="padding:20px 32px;border-top:2px solid #C9A84C;margin-top:8px;">
    <p style="font-family:'Arial',sans-serif;font-size:11px;color:#999;margin:0;text-align:center;">Viventia Realty Solutions · Dubai, UAE · Confidential</p>
  </div>
</div>
</body></html>`;
}

function autoReplyHtml(name: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#000;color:#f5f0e8;padding:40px;">
  <div style="border-bottom:1px solid rgba(201,168,76,0.3);padding-bottom:24px;margin-bottom:24px;">
    <p style="color:#c9a84c;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;margin:0 0 8px;">VIVENTIA REALTY SOLUTIONS</p>
    <h1 style="font-size:24px;font-weight:700;margin:0;">Thank you, ${name}.</h1>
  </div>
  <p style="color:rgba(245,240,232,0.7);line-height:1.7;">We have received your enquiry and a member of our team will be in touch within one business day.</p>
  <p style="color:rgba(245,240,232,0.7);line-height:1.7;">For urgent matters, you can reach us directly on WhatsApp: <a href="https://wa.me/971541921968" style="color:#c9a84c;">+971 54 192 1968</a></p>
  <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07);">
    <p style="color:rgba(245,240,232,0.4);font-size:12px;margin:0;">Viventia Realty Solutions · Dubai, UAE · <a href="https://www.viventiarealty.com" style="color:#c9a84c;">viventiarealty.com</a></p>
  </div>
</div>`;
}
