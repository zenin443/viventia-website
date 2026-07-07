"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, slideFromLeft, stagger, viewportOnce } from "@/lib/animations";

/* ─── Custom SVG icons ────────────────────────────────────── */
function USDWireIcon() {
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

function StablecoinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" />
      <path d="M12 6v12" />
      <path d="M9 8.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5S10.7 16 12 16s3-1.1 3-2.5" />
    </svg>
  );
}

/* ─── Settlement options ──────────────────────────────────── */
const SETTLEMENT_OPTIONS = [
  {
    Icon: USDWireIcon,
    label: "USD Wire Transfer",
    sublabel: "United States",
    desc: "Direct disbursement to US bank accounts. Same-day or next-day settlement via domestic wire.",
    tag: "US MARKET",
  },
  {
    Icon: SwiftIcon,
    label: "SWIFT International",
    sublabel: "UK · Europe · Global",
    desc: "GBP and EUR transfers to UK and European banks via SWIFT. Full cross-border coverage.",
    tag: "SWIFT NETWORK",
  },
  {
    Icon: StablecoinIcon,
    label: "USDT · USDC",
    sublabel: "On-Rail & Off-Rail Stablecoin Services",
    desc: "Full stablecoin settlement infrastructure — on-rail receipt from tenants and off-rail disbursement to any wallet globally.",
    tag: "DIGITAL ASSETS",
  },
];

const FLOW_STEPS = [
  {
    number: "01",
    title: "Tenant Pays Rent",
    desc: "Your tenant pays in AED, USDT, or USDC — from Dubai or abroad.",
    detail: "AED · USDT · USDC",
  },
  {
    number: "02",
    title: "Viventia Processes",
    desc: "We collect, verify, convert, and prepare your income for disbursement.",
    detail: "Collect · Convert · Prepare",
  },
  {
    number: "03",
    title: "You Receive Abroad",
    desc: "Funds arrive in your preferred currency at your chosen account or wallet.",
    detail: "Wire · SWIFT · Stablecoin",
  },
];

export default function International() {
  return (
    <section
      id="international"
      style={{
        position: "relative",
        padding: "clamp(80px,10vw,140px) 32px",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "900px", height: "700px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 65%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(60px,8vw,90px)" }}
        >
          <span className="eyebrow">INTERNATIONAL OWNERS</span>
          <h2 className="section-heading" style={{ whiteSpace: "pre-line" }}>
            {"Your Dubai income.\nYour account. Anywhere."}
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Two-column layout */}
        <div
          className="intl-layout"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,7vw,100px)", alignItems: "start" }}
        >

          {/* ── Left — settlement options ── */}
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "15.5px", color: "var(--text-2)", lineHeight: "1.9", marginBottom: "16px" }}>
              We built Viventia Realty Solutions for the international Dubai property owner.
              Whether you are based in New York, London, Paris, or Singapore — we collect
              your rental income and deliver it to you in the currency you use, through the
              channel you prefer.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15.5px", color: "var(--text-2)", lineHeight: "1.9", marginBottom: "48px" }}>
              Every disbursement is processed through regulated banking partners with
              transparent FX rates and detailed monthly statements for every property
              in your portfolio.
            </p>

            {/* Settlement option cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SETTLEMENT_OPTIONS.map(({ Icon, label, sublabel, desc, tag }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "20px",
                    padding: "22px 0",
                    borderBottom: i < SETTLEMENT_OPTIONS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: "48px", height: "48px",
                    borderRadius: "10px",
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--gold)", flexShrink: 0,
                  }}>
                    <Icon />
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "13.5px", fontWeight: "700",
                        color: "var(--text)", letterSpacing: "1px", textTransform: "uppercase",
                      }}>
                        {label}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "8.5px", fontWeight: "700",
                        color: "var(--gold)", letterSpacing: "1.5px", textTransform: "uppercase",
                        background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "4px", padding: "2px 7px",
                      }}>
                        {tag}
                      </span>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: "600",
                      color: "var(--gold)", letterSpacing: "0.5px", marginBottom: "6px", opacity: 0.8,
                    }}>
                      {sublabel}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "13px",
                      color: "var(--text-2)", lineHeight: "1.7", margin: 0,
                    }}>
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: "40px" }}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold"
                style={{ cursor: "pointer" }}
              >
                Get Started
              </button>
            </div>
          </motion.div>

          {/* ── Right — 3-step flow ── */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", paddingTop: "8px" }}
          >
            {FLOW_STEPS.map((step, i) => (
              <div key={step.number} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                <motion.div
                  variants={fadeUp}
                  className="glass"
                  style={{
                    width: "100%",
                    padding: "28px 32px",
                    border: "1px solid rgba(201,168,76,0.14)",
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{
                    borderColor: "rgba(201,168,76,0.35)",
                    y: -3,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: "linear-gradient(90deg, var(--gold) 0%, transparent 100%)",
                    opacity: 0.5,
                  }} />

                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "var(--font-body)", fontSize: "9px", fontWeight: "800",
                        color: "var(--gold)", letterSpacing: "3px", textTransform: "uppercase",
                        marginBottom: "10px", opacity: 0.9,
                      }}>
                        STEP {step.number}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: "600",
                        color: "var(--text)", letterSpacing: "1.5px", textTransform: "uppercase",
                        marginBottom: "10px",
                      }}>
                        {step.title}
                      </div>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "13.5px",
                        color: "var(--text-2)", lineHeight: "1.75", margin: 0,
                      }}>
                        {step.desc}
                      </p>
                    </div>
                    <div style={{
                      padding: "5px 11px",
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.16)",
                      borderRadius: "6px",
                      fontFamily: "var(--font-body)", fontSize: "9.5px", fontWeight: "700",
                      color: "var(--gold)", letterSpacing: "0.5px",
                      whiteSpace: "nowrap", flexShrink: 0, alignSelf: "flex-start",
                    }}>
                      {step.detail}
                    </div>
                  </div>
                </motion.div>

                {i < FLOW_STEPS.length - 1 && (
                  <motion.div
                    variants={fadeUp}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "10px 0", color: "var(--gold)", opacity: 0.45,
                    }}
                  >
                    <ArrowDown size={16} />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .intl-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
