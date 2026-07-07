"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewportOnce } from "@/lib/animations";

const SETTLEMENT_OPTIONS = [
  {
    flag: "🇺🇸",
    currency: "USD Wire",
    desc: "Direct to US bank accounts via wire transfer",
  },
  {
    flag: "🇬🇧 🇪🇺",
    currency: "SWIFT",
    desc: "GBP and EUR transfers to UK and European banks",
  },
  {
    flag: "◈",
    currency: "USDT · USDC",
    desc: "Stablecoin disbursement to your wallet",
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
    desc: "We collect, verify, convert, and prepare for disbursement.",
    detail: "Collect · Convert · Prepare",
  },
  {
    number: "03",
    title: "You Receive Abroad",
    desc: "Funds arrive in your preferred currency at your account.",
    detail: "USD Wire · SWIFT · Crypto Wallet",
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
      {/* Radial gold glow background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(60px,8vw,90px)" }}
        >
          <span className="eyebrow">INTERNATIONAL OWNERS</span>
          <h2
            className="section-heading"
            style={{ whiteSpace: "pre-line" }}
          >
            {"Your Dubai income.\nYour bank account. Anywhere."}
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px,7vw,100px)",
            alignItems: "center",
          }}
          className="intl-layout"
        >
          {/* ── Left — info ── */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-2)",
                lineHeight: "1.85",
                marginBottom: "18px",
              }}
            >
              We built Viventia Realty Solutions for the international Dubai property owner.
              Whether you are based in New York, London, Paris, or
              Singapore — we collect your rental income and deliver it to
              you in the currency you use, through the channel you prefer.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-2)",
                lineHeight: "1.85",
                marginBottom: "40px",
              }}
            >
              Every disbursement is processed through regulated banking
              partners with transparent FX rates and detailed monthly
              statements for every property in your portfolio.
            </p>

            {/* Settlement option rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginBottom: "40px",
              }}
            >
              {SETTLEMENT_OPTIONS.map(({ flag, currency, desc }, i) => (
                <div
                  key={currency}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "18px 0",
                    borderBottom:
                      i < SETTLEMENT_OPTIONS.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      flexShrink: 0,
                      width: "32px",
                      textAlign: "center",
                      lineHeight: "1",
                    }}
                  >
                    {flag}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--gold)",
                        marginBottom: "3px",
                      }}
                    >
                      {currency}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-2)",
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold"
              style={{ cursor: "pointer" }}
            >
              Get Started
            </button>
          </motion.div>

          {/* ── Right — animated 3-step flow ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0",
            }}
          >
            {FLOW_STEPS.map((step, i) => (
              <div
                key={step.number}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Step card */}
                <motion.div
                  variants={fadeUp}
                  className="glass"
                  style={{
                    width: "100%",
                    padding: "28px 32px",
                    border: "1px solid var(--border-gold)",
                    borderRadius: "14px",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px rgba(201,168,76,0.12)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "var(--gold)",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        STEP {step.number}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "var(--text)",
                          letterSpacing: "0.2px",
                          marginBottom: "8px",
                        }}
                      >
                        {step.title}
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13.5px",
                          color: "var(--text-2)",
                          lineHeight: "1.7",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                    {/* Detail badge */}
                    <div
                      style={{
                        padding: "6px 12px",
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.18)",
                        borderRadius: "8px",
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: "600",
                        color: "var(--gold)",
                        letterSpacing: "0.5px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        alignSelf: "flex-start",
                      }}
                    >
                      {step.detail}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                {i < FLOW_STEPS.length - 1 && (
                  <motion.div
                    variants={fadeUp}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 0",
                      color: "var(--gold)",
                      opacity: 0.6,
                    }}
                  >
                    <ArrowDown size={18} />
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
