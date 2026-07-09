"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const CARDS = [
  {
    n: "01",
    title: "Remote Ownership",
    body: "Operate your UAE property while living abroad, with full visibility into leasing, income, and reporting at every stage.",
  },
  {
    n: "02",
    title: "On-Ground Execution",
    body: "Viewings, tenants, documentation, maintenance, and transfer coordination handled directly by our local UAE-based team.",
  },
  {
    n: "03",
    title: "Global Settlement",
    body: "Rental income and sale proceeds routed through your preferred approved banking or digital asset channel where applicable.",
  },
];

export default function OwnerHook() {
  return (
    <section
      id="owner-hook"
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)", textAlign: "center" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ maxWidth: "840px", margin: "0 auto" }}
        >
          <span className="eyebrow">Built for Global Investors</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 800,
              letterSpacing: "0.2px",
              lineHeight: 1.28,
              color: "var(--text)",
            }}
          >
            Your UAE property should not depend on{" "}
            <span className="gold-text">your physical presence.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15.5px",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "var(--text-2)",
              maxWidth: "620px",
              margin: "28px auto 0",
            }}
          >
            Viventia supports investors and owners who need trusted local execution for UAE property decisions, management, documentation, income collection, and approved settlement coordination.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="owner-hook-grid"
          style={{ textAlign: "left", marginTop: "72px" }}
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.n}
              variants={fadeUp}
              style={{
                flex: 1,
                padding: "40px 34px 42px",
                border: "1px solid rgba(216,184,90,0.16)",
                borderRadius: "8px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
              }}
              whileHover={{
                y: -8,
                borderColor: "rgba(216,184,90,0.55)",
                boxShadow: "0 24px 60px -20px rgba(201,168,76,0.28), 0 0 0 1px rgba(216,184,90,0.1) inset",
                transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              <span
                className="gold-text"
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                {card.n}
              </span>
              <span
                aria-hidden="true"
                style={{ display: "block", width: "20px", height: "1px", background: "rgba(201,168,76,0.4)", marginBottom: "18px" }}
              />
              <h3
                className="gold-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "19px",
                  letterSpacing: "0.2px",
                  marginBottom: "14px",
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, lineHeight: 1.8, color: "var(--text-2)" }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .owner-hook-grid {
          display: flex;
          gap: 28px;
        }
        @media (max-width: 860px) {
          .owner-hook-grid { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
