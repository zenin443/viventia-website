"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const PILLARS = [
  {
    n: "01",
    label: "Acquire",
    body: "Source and secure UAE property across ready, off-plan, residential, and investment-grade opportunities.",
    cta: "Explore Acquisition",
    href: "#pillars",
  },
  {
    n: "02",
    label: "Operate",
    body: "Tenant placement, lease execution, rent collection, inspections, maintenance, renewals, and reporting.",
    cta: "Explore Management",
    href: "#pillars",
  },
  {
    n: "03",
    label: "Exit",
    body: "Sell your UAE property with market positioning, qualified buyer handling, and transfer coordination.",
    cta: "Explore Sales Support",
    href: "#contact",
  },
  {
    n: "04",
    label: "Settle",
    body: "Route rental income or sale proceeds through AED, USD wire, SWIFT, or approved digital asset settlement.",
    cta: "Explore Settlement",
    href: "#international",
  },
];

export default function ServicePillars() {
  return (
    <section
      id="pillars"
      style={{
        position: "relative",
        padding: "var(--section-pad)",
        background: "var(--bg)",
        borderTop: "1px solid rgba(216,184,90,0.1)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow">SERVICE MODEL</span>
          <h2
            className="section-heading"
            style={{ maxWidth: "760px", margin: "0 auto" }}
          >
            One partner for the full{" "}
            <span className="gold-text">UAE property lifecycle.</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
            marginTop: "clamp(48px,7vw,76px)",
            textAlign: "left",
          }}
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.n}
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
              <span
                className="gold-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                {p.n}
              </span>
              <span
                aria-hidden="true"
                style={{
                  width: "20px",
                  height: "1px",
                  background: "rgba(201,168,76,0.4)",
                  display: "block",
                  marginBottom: "18px",
                }}
              />
              <h3
                className="gold-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "18px",
                  letterSpacing: "0.2px",
                  marginBottom: "14px",
                }}
              >
                {p.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "13.5px",
                  lineHeight: 1.8,
                  color: "var(--text-2)",
                  flexGrow: 1,
                }}
              >
                {p.body}
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector(p.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="pillar-cta"
                style={{
                  marginTop: "22px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(216,184,90,0.12)",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "1.3px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "none",
                  borderTopColor: "rgba(216,184,90,0.12)",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {p.cta}
                <ArrowRight size={13} className="pillar-cta-arrow" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .pillar-cta:hover .pillar-cta-arrow {
          transform: translateX(4px);
        }
        .pillar-cta-arrow {
          transition: transform 0.3s ease;
        }
        @media (max-width: 860px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
