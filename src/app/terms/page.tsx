import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Viventia Realty Solutions",
  description: "Terms and conditions governing the use of Viventia Realty Solutions' real estate consultancy services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing the Viventia Realty Solutions website (viventiarealtysolutions.com) or engaging our real estate consultancy services, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.

If you do not agree to these Terms, please do not use our website or services. We reserve the right to amend these Terms at any time. Continued use of our services following such amendments constitutes acceptance of the revised Terms.`,
  },
  {
    title: "2. About Viventia Realty Solutions",
    body: `Viventia Realty Solutions is a real estate consultancy firm operating in Dubai, United Arab Emirates. We provide services including property brokerage, property management, international settlement facilitation, and real estate advisory for residential and commercial properties across Dubai.

Our services are conducted in compliance with Dubai Land Department (DLD) regulations and applicable UAE law.`,
  },
  {
    title: "3. Services Provided",
    body: `Viventia Realty Solutions offers the following real estate services:

**Property Brokerage — Buy & Sell:** We act as intermediary between buyers and sellers of residential and commercial properties in Dubai. Our brokerage services are provided on a commission basis agreed in writing prior to engagement.

**Property Management:** We provide full-service property management including tenant sourcing, lease negotiation, rent collection, maintenance coordination, and periodic reporting.

**Short-Term Rental Management:** We manage short-term and holiday rental listings on behalf of property owners, including pricing, guest management, and cleaning coordination.

**International Settlement Services:** We facilitate the receipt and disbursement of property-related funds in preferred currencies, including USD wire transfers, SWIFT, and stablecoin settlement where applicable and agreed in writing.

The scope of services for each engagement is defined in a signed Service Agreement between Viventia Realty Solutions and the client.`,
  },
  {
    title: "4. Client Obligations",
    body: `As a client of Viventia Realty Solutions, you agree to:

— Provide accurate, complete, and up-to-date personal and financial information as required for KYC/AML compliance.
— Promptly produce any documentation requested for due diligence, including valid identity documents, proof of address, and source of funds evidence.
— Notify us immediately of any material changes to your personal circumstances, ownership status, or financial situation.
— Not use our services for any illegal, fraudulent, or money laundering purposes.
— Comply with all applicable UAE property laws, DLD regulations, and financial regulations.

We reserve the right to terminate our services immediately and report suspicious activity to the appropriate UAE authorities if we have reasonable grounds to believe any of the above obligations have been breached.`,
  },
  {
    title: "5. Fees and Commissions",
    body: `Our fee structure is as follows:

**Brokerage Commission:** Standard brokerage commission applies as per DLD guidelines and as agreed in the signed mandate or service agreement. Commissions are typically payable upon completion of the property transaction.

**Property Management Fees:** Monthly management fees are charged as a percentage of rental income collected, as specified in the management agreement.

**Additional Charges:** Fees for specific services such as legal documentation, DLD registration, maintenance supervision, or international payment processing may be quoted separately.

All fees are exclusive of applicable taxes unless stated otherwise. VAT may apply as per UAE Federal Decree-Law No. 8 of 2017.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `Viventia Realty Solutions acts as an intermediary and consultant. While we exercise professional care and diligence in all our services, we do not provide legal, financial, or investment advice.

We shall not be liable for:
— Any loss of value, rental income, or capital gain resulting from property market fluctuations.
— Actions or omissions of third parties including developers, landlords, tenants, legal counsel, or financial institutions.
— Force majeure events including government actions, regulatory changes, natural disasters, or pandemics.
— Inaccuracies in property listings provided by third parties or developers.

Our total liability to any client shall not exceed the fees paid to us in connection with the specific transaction giving rise to the claim.`,
  },
  {
    title: "7. Intellectual Property",
    body: `All content on the Viventia Realty Solutions website, including text, graphics, logos, design elements, and code, is the exclusive intellectual property of Viventia Realty Solutions and protected under applicable copyright and intellectual property laws.

You may not reproduce, distribute, modify, or commercially exploit any content without our prior written consent.`,
  },
  {
    title: "8. AML and Compliance Obligations",
    body: `Viventia Realty Solutions is subject to UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism (AML/CFT). As a Designated Non-Financial Business and Profession (DNFBP), we are required to:

— Conduct Customer Due Diligence (CDD) on all clients.
— Verify the identity and source of funds of all parties to property transactions.
— Screen clients against international sanctions lists and PEP databases.
— Report Suspicious Transaction Reports (STRs) to the UAE Financial Intelligence Unit (FIU) where required.
— Maintain records of all transactions and client data for a minimum of 5 years.

By engaging our services, you acknowledge and consent to these obligations. Refusal to provide required documentation will result in termination of the engagement.`,
  },
  {
    title: "9. Data Protection",
    body: `We handle your personal data in accordance with our Privacy Policy and the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL). Please review our Privacy Policy for full details on how we collect, use, and protect your data.`,
  },
  {
    title: "10. Website Use",
    body: `You agree to use our website only for lawful purposes and in accordance with these Terms. You must not:

— Use the website in any way that violates applicable UAE or international laws.
— Transmit any unsolicited commercial communications or spam.
— Attempt to gain unauthorised access to any part of our systems.
— Introduce viruses, malware, or other harmful code.

We reserve the right to suspend or terminate access to the website at our discretion.`,
  },
  {
    title: "11. Third-Party Services",
    body: `Our website may link to third-party platforms or services. These links are provided for convenience only and do not constitute endorsement. Viventia Realty Solutions has no control over and accepts no responsibility for the content or practices of any third-party websites.`,
  },
  {
    title: "12. Governing Law and Disputes",
    body: `These Terms are governed by the laws of the Emirate of Dubai and the United Arab Emirates. Any dispute arising out of or in connection with these Terms or our services shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    title: "13. Termination",
    body: `Either party may terminate a service engagement by providing written notice as specified in the relevant service agreement. We reserve the right to terminate immediately where:

— A client breaches these Terms or their obligations under a service agreement.
— We are required to do so by law or a regulatory authority.
— Continued engagement would expose us to legal, regulatory, or reputational risk.

Upon termination, all outstanding fees become immediately payable.`,
  },
  {
    title: "14. Contact",
    body: `For any questions regarding these Terms of Service, please contact:

**Viventia Realty Solutions**
Dubai, United Arab Emirates
Email: info@viventiarealtysolutions.com
Website: www.viventiarealtysolutions.com`,
  },
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="9" fill="#0d1117" />
            <rect width="38" height="38" rx="9" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
            <path d="M10 13 L19 27 L28 13" stroke="url(#tpChev)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <defs><linearGradient id="tpChev" x1="10" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#c9a84c" /><stop offset="1" stopColor="#e2c570" /></linearGradient></defs>
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
            Terms of Service
          </h1>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.4)" }}>Last Updated: July 2026</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.4)" }}>Governing Law: Dubai, UAE</span>
          </div>
          <div style={{ marginTop: "24px", height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }} />
        </div>

        {/* Intro callout */}
        <div style={{ padding: "20px 24px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "10px", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13.5px", color: "rgba(245,240,232,0.6)", lineHeight: 1.8, margin: 0 }}>
            These Terms govern your use of Viventia Realty Solutions' website and services. By engaging our services or using this website, you agree to these Terms. All services are subject to a separate signed Service Agreement where applicable.
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
          <Link href="/privacy" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(201,168,76,0.7)", letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
            ← Privacy Policy
          </Link>
          <Link href="/" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(245,240,232,0.4)", letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
            ← Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
