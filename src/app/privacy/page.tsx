import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Viventia Realty Solutions",
  description: "How Viventia Realty Solutions collects, uses, and protects your personal data under UAE law.",
};

const SECTIONS = [
  {
    title: "1. Introduction",
    body: `Viventia Realty Solutions ("we", "us", "our") is a real estate consultancy operating in Dubai, United Arab Emirates. We are committed to protecting the privacy and confidentiality of all personal data we collect in connection with the provision of our real estate services.

This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information in accordance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL), the Dubai Land Department (DLD) regulations, and applicable international data protection principles.

By accessing our website or engaging our services, you agree to the terms of this Privacy Policy.`,
  },
  {
    title: "2. Data We Collect",
    body: `We may collect the following categories of personal data:

**Identity Data:** Full legal name, date of birth, nationality, passport number, Emirates ID number, or other government-issued identification.

**Contact Data:** Email address, telephone number, residential or business address, postal address.

**Financial Data:** Bank account details, source of funds declarations, income information, and proof of financial capacity relevant to real estate transactions.

**Transaction Data:** Details of properties you have enquired about, purchased, sold, leased, or instructed us to manage on your behalf.

**Compliance Data:** Information required for Know Your Customer (KYC), Anti-Money Laundering (AML), and Customer Due Diligence (CDD) purposes, including Politically Exposed Person (PEP) declarations and sanctions screening data.

**Communication Data:** Records of your correspondence with us via email, telephone, WhatsApp, or our website contact form.

**Technical Data:** IP address, browser type, device information, and website usage data collected via cookies and analytics tools.`,
  },
  {
    title: "3. How We Collect Your Data",
    body: `We collect personal data through the following channels:

— Directly from you when you complete our onboarding form, contact form, or written instructions.
— From third parties such as property developers, landlords, tenants, or legal representatives acting on your behalf.
— From publicly available sources such as the Dubai Land Department (DLD) property registry.
— Automatically through our website via cookies and analytics technologies.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal data on one or more of the following legal bases:

**Contractual Necessity:** Processing is necessary for the performance of a real estate services agreement between you and Viventia Realty Solutions.

**Legal Obligation:** Processing is required to comply with UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering (AML), the Dubai Land Department registration requirements, and other applicable regulatory obligations.

**Legitimate Interests:** Processing is necessary for our legitimate business interests, including fraud prevention, business development, and service improvement, provided such interests are not overridden by your rights.

**Consent:** Where required by law, we will obtain your explicit consent before processing your data.`,
  },
  {
    title: "5. How We Use Your Data",
    body: `We use your personal data for the following purposes:

— To provide real estate brokerage, management, and consultancy services as agreed.
— To conduct identity verification, KYC, and AML due diligence as required by UAE law.
— To register property transactions with the Dubai Land Department (DLD) and other relevant authorities.
— To communicate with you regarding your property interests, transactions, and our services.
— To process payments and manage financial transactions in your preferred currency.
— To comply with applicable legal, regulatory, and reporting obligations.
— To improve our website, services, and internal operations.
— To send you relevant market insights or service updates (where you have opted in).`,
  },
  {
    title: "6. Data Sharing and Disclosure",
    body: `We do not sell, rent, or trade your personal data to third parties for marketing purposes. We may share your data only in the following circumstances:

**Service Providers:** With trusted third parties who assist us in delivering our services, including property management systems, legal counsel, banking institutions, payment processors, and IT service providers. All such parties are bound by data processing agreements.

**Regulatory Authorities:** With the Dubai Land Department (DLD), Real Estate Regulatory Authority (RERA), UAE Financial Intelligence Unit (FIU), and other governmental or regulatory bodies where required by law.

**Property Transaction Parties:** With counterparties to a property transaction (buyers, sellers, landlords, tenants, or their representatives) to the extent necessary to complete the transaction.

**Professional Advisors:** With lawyers, accountants, or auditors engaged in connection with our services.

**Business Transfer:** In the event of a merger, acquisition, or sale of our business, subject to appropriate confidentiality obligations.`,
  },
  {
    title: "7. International Data Transfers",
    body: `Viventia Realty Solutions serves international clients, and your data may be processed by or shared with parties located outside the UAE. We ensure that any international transfer of personal data is made in accordance with the UAE PDPL and only to jurisdictions or organisations that provide an adequate level of data protection, or where appropriate safeguards (such as contractual clauses) are in place.`,
  },
  {
    title: "8. Data Retention",
    body: `We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including for legal, regulatory, and accounting requirements.

Specifically:
— Client KYC and transaction records are retained for a minimum of 5 years from the date of the transaction or the end of the business relationship, as required by UAE AML legislation.
— Website analytics data is retained for up to 24 months.
— Marketing communications data is retained until you withdraw consent.

Following the retention period, data is securely deleted or anonymised.`,
  },
  {
    title: "9. Your Rights",
    body: `Under the UAE Federal Decree-Law No. 45 of 2021, you have the following rights regarding your personal data:

**Right of Access:** You may request a copy of the personal data we hold about you.

**Right to Rectification:** You may request correction of inaccurate or incomplete data.

**Right to Erasure:** You may request deletion of your data where we no longer have a lawful basis to retain it, subject to overriding legal obligations.

**Right to Restriction:** You may request that we restrict processing in certain circumstances.

**Right to Data Portability:** You may request your data in a structured, machine-readable format.

**Right to Object:** You may object to processing based on legitimate interests or for direct marketing purposes.

**Right to Withdraw Consent:** Where processing is based on consent, you may withdraw it at any time without affecting prior processing.

To exercise any of these rights, please contact us at: info@viventiarealtysolutions.com. We will respond within 30 days.`,
  },
  {
    title: "10. Cookies and Tracking Technologies",
    body: `Our website uses cookies and similar technologies to improve functionality and analyse usage. Cookies are small data files stored on your browser. We use:

**Essential Cookies:** Required for the website to function correctly.
**Analytics Cookies:** To understand how visitors use the website (e.g., Google Analytics). These are anonymised.

You may disable cookies through your browser settings; however, some features of the website may not function as intended.`,
  },
  {
    title: "11. Data Security",
    body: `We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission (SSL/TLS), access controls, and regular security assessments.

However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "12. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their respective privacy policies.`,
  },
  {
    title: "13. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated policy will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "14. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact:

**Viventia Realty Solutions**
Dubai, United Arab Emirates
Email: info@viventiarealtysolutions.com
Website: www.viventiarealtysolutions.com

You also have the right to lodge a complaint with the UAE Data Office (dataoffice.gov.ae) if you believe your rights under the PDPL have been infringed.`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="9" fill="#0d1117" />
            <rect width="38" height="38" rx="9" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
            <path d="M10 13 L19 27 L28 13" stroke="url(#lpChev)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <defs><linearGradient id="lpChev" x1="10" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#c9a84c" /><stop offset="1" stopColor="#e2c570" /></linearGradient></defs>
          </svg>
          <div>
            <div style={{ fontFamily: "'Copperplate Gothic Light', Copperplate, serif", fontSize: "14px", color: "#F5F0E8", letterSpacing: "3.5px" }}>VIVENTIA</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "7.5px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "2.5px", textTransform: "uppercase" }}>REALTY SOLUTIONS</div>
          </div>
        </Link>
        <Link href="/" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "64px 32px 96px" }}>
        {/* Title block */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9A84C", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "14px" }}>
            LEGAL
          </div>
          <h1 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 200, fontSize: "clamp(32px, 5vw, 52px)", color: "#F5F0E8", letterSpacing: "5px", textTransform: "uppercase", marginBottom: "14px" }}>
            Privacy Policy
          </h1>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.4)" }}>Last Updated: July 2026</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.4)" }}>Governing Law: UAE Federal Decree-Law No. 45 of 2021 (PDPL)</span>
          </div>
          <div style={{ marginTop: "24px", height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
        </div>

        {/* Intro callout */}
        <div style={{ padding: "20px 24px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "10px", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13.5px", color: "rgba(245,240,232,0.6)", lineHeight: 1.8, margin: 0 }}>
            This document governs the collection and use of personal data by Viventia Realty Solutions in connection with our real estate consultancy services in Dubai, UAE. We process data in compliance with the UAE Personal Data Protection Law (PDPL) and applicable AML/CFT regulations.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {SECTIONS.map((s) => (
            <div key={s.title} style={{ paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", fontWeight: 700, color: "#C9A84C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                {s.title}
              </h2>
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.85, marginBottom: "12px" }}>
                  {para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
                    j % 2 === 1
                      ? <strong key={j} style={{ color: "rgba(245,240,232,0.85)", fontWeight: 600 }}>{chunk}</strong>
                      : chunk
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid rgba(201,168,76,0.15)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/terms" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
            Terms of Service →
          </Link>
          <Link href="/" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(245,240,232,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
            ← Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
