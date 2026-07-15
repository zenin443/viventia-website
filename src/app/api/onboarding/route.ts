import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const rawData = formData.get("data");
    if (!rawData || typeof rawData !== "string") {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const data = JSON.parse(rawData);

    // Collect uploaded file names
    const fileEntries: string[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("file_") && value instanceof File) {
        fileEntries.push(`${value.name} (${(value.size / 1024).toFixed(0)} KB)`);
      }
    }

    // Build email HTML
    const html = buildEmailHtml(data, fileEntries);
    const text = buildEmailText(data, fileEntries);

    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "info@viventiarealty.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Viventia Onboarding <onboarding@viventiarealty.com>",
        to: notifyEmail,
        subject: `New Client Application — ${data.clientType === "individual" ? data.fullName : data.companyName} (${new Date().toLocaleDateString("en-GB")})`,
        html,
        text,
      });

      // Auto-reply to the applicant
      if (data.email) {
        await resend.emails.send({
          from: "Viventia Realty Solutions <onboarding@viventiarealty.com>",
          to: data.email,
          subject: "Your application has been received — Viventia Realty Solutions",
          html: autoReplyHtml(data),
        });
      }
    } else {
      // Development fallback — log to console
      console.log("\n━━━ NEW ONBOARDING SUBMISSION ━━━");
      console.log(JSON.stringify(data, null, 2));
      if (fileEntries.length) console.log("Files:", fileEntries.join(", "));
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      console.log("[INFO] Set RESEND_API_KEY in .env.local to enable email notifications.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Onboarding API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

/* ─── Email templates ─────────────────────────────────────── */
function buildEmailHtml(data: Record<string, unknown>, files: string[]): string {
  const isIndividual = data.clientType === "individual";
  const rows = [
    ["Client Type", isIndividual ? "Individual" : "Corporate / Entity"],
    ...(isIndividual
      ? [["Full Name", data.fullName], ["Nationality", data.nationality], ["Date of Birth", data.dob], ["Country of Residence", data.countryOfResidence], ["Passport Number", data.passportNumber]]
      : [["Company Name", data.companyName], ["Registration Number", data.registrationNumber], ["Country of Incorporation", data.countryOfIncorporation], ["Contact Person", data.contactPerson], ["Job Title", data.jobTitle]]),
    ["Email", data.email],
    ["Phone", data.phone],
    ["Services Required", (data.services as string[]).join(", ") || "—"],
    ["Budget / Value", data.propertyBudget || "—"],
    ["Property Type", data.propertyType || "—"],
    ["Timeline", data.timeline || "—"],
    ["Source of Funds", data.sourceOfFunds || "—"],
    ["Source of Funds (detail)", data.sourceOfFundsOther || "—"],
    ["PEP Declaration", data.isPEP || "—"],
    ["Sanctions", data.isSanctioned || "—"],
    ["Data Consent", data.consentData ? "✓ Accepted" : "✗ Not accepted"],
    ["AML Consent", data.consentAML ? "✓ Accepted" : "✗ Not accepted"],
    ["Documents Uploaded", files.length ? files.join(", ") : "None"],
  ] as [string, unknown][];

  const tableRows = rows.map(([label, val]) =>
    `<tr><td style="padding:9px 14px;font-family:'Arial',sans-serif;font-size:12px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;border-bottom:1px solid #f0e9d6;">${label}</td><td style="padding:9px 14px;font-family:'Arial',sans-serif;font-size:13px;color:#1a1a2e;border-bottom:1px solid #f0e9d6;">${val || "—"}</td></tr>`
  ).join("");

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f1eb;">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,0.08);">
  <div style="background:#07090F;padding:28px 32px;text-align:center;">
    <div style="font-family:'Arial',sans-serif;font-size:18px;font-weight:300;color:#F5F0E8;letter-spacing:6px;text-transform:uppercase;">VIVENTIA</div>
    <div style="font-family:'Arial',sans-serif;font-size:9px;font-weight:700;color:#C9A84C;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">REALTY SOLUTIONS · NEW CLIENT APPLICATION</div>
  </div>
  <div style="padding:24px 32px 8px;">
    <p style="font-family:'Arial',sans-serif;font-size:13px;color:#666;margin:0 0 20px;">Received: <strong>${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} GST</strong></p>
  </div>
  <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
  <div style="padding:20px 32px;border-top:2px solid #C9A84C;margin-top:8px;">
    <p style="font-family:'Arial',sans-serif;font-size:11px;color:#999;margin:0;text-align:center;">Viventia Realty Solutions · Dubai, UAE · Confidential</p>
  </div>
</div>
</body></html>`;
}

function buildEmailText(data: Record<string, unknown>, files: string[]): string {
  return `NEW CLIENT APPLICATION — Viventia Realty Solutions
Received: ${new Date().toISOString()}

CLIENT TYPE: ${data.clientType === "individual" ? "Individual" : "Corporate"}
NAME: ${data.clientType === "individual" ? data.fullName : data.companyName}
EMAIL: ${data.email}
PHONE: ${data.phone}
SERVICES: ${(data.services as string[]).join(", ")}
SOURCE OF FUNDS: ${data.sourceOfFunds}
PEP: ${data.isPEP}
SANCTIONS: ${data.isSanctioned}
DOCUMENTS: ${files.join(", ") || "None"}
`;
}

function autoReplyHtml(data: Record<string, unknown>): string {
  const name = data.clientType === "individual" ? (data.fullName as string).split(" ")[0] : (data.contactPerson as string).split(" ")[0];
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f1eb;">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,0.08);">
  <div style="background:#07090F;padding:28px 32px;text-align:center;">
    <div style="font-family:'Arial',sans-serif;font-size:18px;font-weight:300;color:#F5F0E8;letter-spacing:6px;text-transform:uppercase;">VIVENTIA</div>
    <div style="font-family:'Arial',sans-serif;font-size:9px;font-weight:700;color:#C9A84C;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">REALTY SOLUTIONS</div>
  </div>
  <div style="padding:36px 36px 28px;">
    <p style="font-family:'Arial',sans-serif;font-size:15px;color:#1a1a2e;margin:0 0 16px;">Dear ${name || "Client"},</p>
    <p style="font-family:'Arial',sans-serif;font-size:14px;color:#444;line-height:1.8;margin:0 0 16px;">
      Thank you for submitting your onboarding application to <strong>Viventia Realty Solutions</strong>. We have received your information and our team is currently reviewing your submission.
    </p>
    <p style="font-family:'Arial',sans-serif;font-size:14px;color:#444;line-height:1.8;margin:0 0 16px;">
      You can expect to hear from us within <strong style="color:#8B6914;">1 business day</strong>. If you have any immediate questions, please reply to this email or contact us directly.
    </p>
    <div style="border-left:3px solid #C9A84C;padding:14px 20px;background:#faf8f3;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="font-family:'Arial',sans-serif;font-size:13px;color:#666;margin:0;line-height:1.7;">
        <strong style="color:#1a1a2e;">Viventia Realty Solutions</strong><br>
        Dubai, United Arab Emirates<br>
        www.viventiarealty.com
      </p>
    </div>
    <p style="font-family:'Arial',sans-serif;font-size:11px;color:#aaa;margin:0;">This is a confidential communication. All data is handled under UAE PDPL.</p>
  </div>
</div>
</body></html>`;
}
