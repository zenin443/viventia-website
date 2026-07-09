"use client";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  FileText,
  ShieldCheck,
  FileSignature,
  UserCheck,
  LineChart,
  ClipboardCheck,
  Lock,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const TRUST_ITEMS = [
  {
    Icon: BadgeCheck,
    title: "RERA Registered — Dubai",
    sub: "Real Estate Regulatory Agency, Dubai Land Department · Buying & selling of real estate",
    featured: true,
  },
  {
    Icon: FileText,
    title: "Property Documentation Support",
    sub: "Assistance organizing title, ownership, and transaction paperwork.",
  },
  {
    Icon: ShieldCheck,
    title: "Ownership Checks",
    sub: "Verification of title and ownership status before any transaction proceeds.",
  },
  {
    Icon: FileSignature,
    title: "NOC and Transfer Coordination",
    sub: "Coordination of no-objection certificates and transfer procedures.",
  },
  {
    Icon: UserCheck,
    title: "Tenant Screening",
    sub: "Structured review of prospective tenants ahead of placement.",
  },
  {
    Icon: LineChart,
    title: "Investor Reporting",
    sub: "Clear, regular updates on property status and income.",
  },
  {
    Icon: ClipboardCheck,
    title: "Settlement Review",
    sub: "Assessment of the appropriate route before any funds are disbursed.",
  },
  {
    Icon: Lock,
    title: "Private Client Handling",
    sub: "Discreet, dedicated coordination for high-net-worth and family office clients.",
  },
];

export default function TrustCompliance() {
  return (
    <section
      id="trust-compliance"
      style={{
        position: "relative",
        padding: "var(--section-pad)",
        background: "var(--bg)",
        borderTop: "1px solid rgba(216,184,90,0.1)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center" }}
        >
          <span className="eyebrow">TRUST &amp; COMPLIANCE</span>
          <h2
            className="section-heading"
            style={{ maxWidth: "780px", margin: "0 auto" }}
          >
            Built on documentation, compliance, and{" "}
            <span className="gold-text">transparent execution.</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15.5px",
              lineHeight: "1.85",
              color: "var(--text-2)",
              maxWidth: "660px",
              margin: "8px auto 0",
            }}
          >
            UAE property decisions require careful documentation, ownership checks,
            transaction coordination, and settlement review. Viventia supports
            investors through a structured process before onboarding begins.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="trust-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "clamp(56px,7vw,72px)",
            textAlign: "left",
          }}
        >
          {TRUST_ITEMS.map((item) => (
            <TrustTile key={item.title} item={item} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TrustTile({ item }: { item: (typeof TRUST_ITEMS)[number] }) {
  const { Icon, title, sub, featured } = item;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        borderColor: "rgba(216,184,90,0.55)",
        boxShadow:
          "0 20px 50px -20px rgba(201,168,76,0.26), 0 0 0 1px rgba(216,184,90,0.1) inset",
        transition: { duration: 0.3 },
      }}
      style={{
        padding: "28px 24px 26px",
        border: featured
          ? "1px solid rgba(216,184,90,0.4)"
          : "1px solid rgba(216,184,90,0.16)",
        borderRadius: "8px",
        background: featured
          ? "linear-gradient(180deg, rgba(201,168,76,0.07), rgba(255,255,255,0.008))"
          : "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "9px",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          color: "var(--gold)",
        }}
      >
        <Icon size={16} aria-hidden="true" />
      </div>
      <h3
        className="gold-text"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "15px",
          letterSpacing: "0.1px",
          lineHeight: "1.3",
          marginBottom: "11px",
        }}
      >
        {title}
      </h3>
      <span
        aria-hidden="true"
        style={{
          width: "18px",
          height: "1px",
          background: "rgba(201,168,76,0.4)",
          display: "block",
          marginBottom: "13px",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "12.5px",
          lineHeight: "1.7",
          color: "var(--text-2)",
        }}
      >
        {sub}
      </p>
    </motion.div>
  );
}
