"use client";
import { motion } from "framer-motion";
import { Globe, Shield, Building2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const valueProps = [
  {
    icon: Globe,
    title: "Global Settlement",
    desc: "USD, SWIFT, USDT/USDC — your proceeds reach you in 24 hours.",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    desc: "AML/CFT, UAE PDPL, and DLD-aligned processes end to end.",
  },
  {
    icon: Building2,
    title: "UAE Coverage",
    desc: "Dubai, Abu Dhabi, Sharjah and the Northern Emirates.",
  },
];

function AboutMark() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 96 96"
      fill="none"
      style={{
        display: "block",
        filter: "drop-shadow(0 0 32px rgba(201,168,76,0.28)) drop-shadow(0 0 8px rgba(201,168,76,0.14))",
      }}
    >
      <defs>
        <linearGradient id="aboutVGrad" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e2c570" />
          <stop offset="40%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="47" fill="rgba(0,0,0,0.95)" stroke="rgba(201,168,76,0.22)" strokeWidth="1.5" />
      <path d="M22 26 L48 70 L74 26" stroke="url(#aboutVGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M29 26 L48 64 L67 26" stroke="url(#aboutVGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.25} />
      <polygon points="48,72 51.5,65 48,58.5 44.5,65" fill="#C9A84C" />
      <line x1="14" y1="26" x2="30" y2="26" stroke="url(#aboutVGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="66" y1="26" x2="82" y2="26" stroke="url(#aboutVGrad)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#000000",
        padding: "clamp(80px, 10vw, 140px) 32px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Eyebrow + Heading — centered above columns */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: "72px" }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>WHO WE ARE</p>
          <h2 className="section-heading">
            VIVENTIA REALTY{" "}
            <span style={{ color: "var(--gold)" }}>SOLUTIONS</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="about-grid">
          {/* Left column — text */}
          <div className="about-text-col">
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 300,
                color: "var(--text-2)",
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              Viventia Realty Solutions is a UAE-based real estate consultancy founded to serve a new generation of international property owners. We specialise in the full property lifecycle — buying, selling, managing, and settling — across the UAE and beyond.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 300,
                color: "var(--text-2)",
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              What sets us apart is our approach to settlement. In a market where international landlords routinely wait weeks for rental income, we offer same-day to next-day disbursement via USD wire, SWIFT, and stablecoin — in the currency and wallet of your choice.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                fontWeight: 400,
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "40px",
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "20px",
              }}
            >
              We are built for owners who are never in the room — and need a team that operates as if they were.
            </motion.p>

            {/* Value prop cards */}
            <div className="value-cards">
              {valueProps.map((vp, i) => {
                const Icon = vp.icon;
                return (
                  <motion.div
                    key={vp.title}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.32 + i * 0.1 }}
                    className="value-card"
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid var(--border-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--gold)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: "4px",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {vp.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          fontWeight: 300,
                          color: "var(--text-2)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {vp.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right column — V-mark visual */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="about-visual-col"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                padding: "48px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-gold)",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background radial glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <AboutMark />

              <div
                style={{
                  width: "80px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                  opacity: 0.5,
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--text-2)",
                  textAlign: "center",
                }}
              >
                Est. 2024 · Dubai, UAE
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: start;
        }
        .value-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .value-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: border-color 0.25s ease;
        }
        .value-card:hover {
          border-color: var(--border-gold);
        }
        .about-visual-col {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-visual-col {
            position: static;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
