"use client";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const PILLARS = [
  {
    n: "01",
    label: "Acquire",
    body: "Source and secure UAE property across ready, off-plan, residential, commercial, and investment-grade opportunities.",
  },
  {
    n: "02",
    label: "Operate",
    body: "Tenant placement, lease execution, rent collection, inspections, maintenance, renewals, and owner reporting.",
  },
  {
    n: "03",
    label: "Exit",
    body: "Sell your UAE property with market positioning, qualified buyer handling, negotiation, and transfer coordination.",
  },
  {
    n: "04",
    label: "Settle",
    body: "Receive rental income or sale proceeds through AED, USD wire, SWIFT, or digital asset settlement where applicable.",
  },
];

export default function ServicePillars() {
  return (
    <section
      id="pillars"
      style={{ padding: "var(--section-pad)", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          {...viewportOnce}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "10px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
            Service Model
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3.4vw, 44px)", fontWeight: 300, letterSpacing: "2px", color: "var(--text)", lineHeight: 1.14 }}>
            One partner for the full UAE property{" "}
            <span className="gold-text">lifecycle.</span>
          </h2>
        </motion.div>

        {/* Pillar grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--border)" }} className="pillars-grid">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              {...viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{
                padding: "40px 32px",
                borderRight: i < PILLARS.length - 1 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.03)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "var(--gold)" }}>{p.n}</p>
              <div style={{ width: "24px", height: "1px", background: "var(--border-gold)" }} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 300, letterSpacing: "2px", color: "var(--text)", lineHeight: 1.1 }}>{p.label}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, lineHeight: 1.68, color: "var(--text-2)" }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .pillars-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
        }
        @media (max-width: 540px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
