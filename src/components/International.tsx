"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

/* ─── Settlement route icons — institutional line art only ─── */
/* No coin imagery, no blockchain node graphics, no neon. */

function BankTransferIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9L12 4L21 9V10H3V9Z" />
      <rect x="5" y="10" width="2.5" height="7" />
      <rect x="10.75" y="10" width="2.5" height="7" />
      <rect x="16.5" y="10" width="2.5" height="7" />
      <rect x="2" y="17" width="20" height="2" rx="0.5" />
      <line x1="1" y1="21" x2="23" y2="21" />
    </svg>
  );
}

function USDWireIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11" />
      <path d="M9.4 9.3c0-1.4 1.1-2.3 2.6-2.3s2.6.9 2.6 2.1c0 3-5.2 1.5-5.2 4.4 0 1.3 1.2 2.2 2.6 2.2s2.6-.9 2.6-2.2" />
    </svg>
  );
}

function SwiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
      <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
    </svg>
  );
}

function DigitalAssetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.2L19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.8Z" />
      <path d="M8.5 12.1l2.4 2.4 4.6-5" />
    </svg>
  );
}

/* ─── Settlement routes ───────────────────────────────────── */
const SETTLEMENT_ROUTES = [
  {
    n: "01",
    Icon: BankTransferIcon,
    label: "AED / Bank Transfer",
    desc: "Local UAE bank transfer or manager's cheque where required by transaction structure.",
  },
  {
    n: "02",
    Icon: USDWireIcon,
    label: "USD Wire",
    desc: "USD payment support to approved international banking routes where applicable.",
  },
  {
    n: "03",
    Icon: SwiftIcon,
    label: "SWIFT",
    desc: "International bank transfer coordination through supported global banking channels.",
  },
  {
    n: "04",
    Icon: DigitalAssetIcon,
    label: "Digital Asset Settlement",
    desc: "USDT / USDC settlement support through approved channels where applicable and permitted.",
  },
];

export default function International() {
  return (
    <section
      id="international"
      style={{
        position: "relative",
        padding: "clamp(80px,10vw,140px) 32px",
        borderTop: "1px solid rgba(216,184,90,0.1)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.02) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <span className="eyebrow">SETTLEMENT SUPPORT</span>
          <h2 className="section-heading" style={{ maxWidth: "760px", margin: "0 auto" }}>
            Settlement routes built around{" "}
            <span className="gold-text">global ownership.</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "15.5px",
              lineHeight: 1.85,
              color: "var(--text-2)",
              maxWidth: "620px",
              margin: "28px auto 0",
            }}
          >
            Whether you are collecting rental income or receiving sale proceeds, Viventia
            helps coordinate settlement through the appropriate approved route for your
            transaction.
          </p>
        </motion.div>

        {/* Settlement route cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="settlement-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
            marginTop: "clamp(48px,7vw,76px)",
            textAlign: "left",
          }}
        >
          {SETTLEMENT_ROUTES.map(({ n, Icon, label, desc }) => (
            <motion.div
              key={n}
              variants={fadeUp}
              whileHover={{
                y: -8,
                borderColor: "rgba(216,184,90,0.55)",
                boxShadow:
                  "0 24px 60px -20px rgba(201,168,76,0.28), 0 0 0 1px rgba(216,184,90,0.1) inset",
                transition: { duration: 0.3 },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "36px 28px 32px",
                border: "1px solid rgba(216,184,90,0.16)",
                borderRadius: "8px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                  marginBottom: "20px",
                }}
              >
                <Icon />
              </div>
              <h3
                className="gold-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "17.5px",
                  letterSpacing: "0.2px",
                  marginBottom: "14px",
                }}
              >
                {label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "13.5px",
                  lineHeight: 1.8,
                  color: "var(--text-2)",
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mandatory compliance disclaimer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            maxWidth: "760px",
            margin: "56px auto 0",
            paddingTop: "28px",
            borderTop: "1px solid rgba(216,184,90,0.1)",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: 1.8,
            letterSpacing: "0.2px",
            color: "var(--text-3)",
          }}
        >
          All settlement options are subject to transaction structure, regulatory
          requirements, and approval checks.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .settlement-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .settlement-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
