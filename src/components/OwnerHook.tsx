"use client";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const CARDS = [
  {
    n: "01",
    title: "Remote Ownership",
    body: "Operate your UAE property while living abroad. Full visibility, reporting, and control — without stepping off a plane.",
  },
  {
    n: "02",
    title: "On-Ground Execution",
    body: "Viewings, tenants, documentation, maintenance, and transfer coordination handled locally by our UAE team.",
  },
  {
    n: "03",
    title: "Global Disbursement",
    body: "Rental income and sale proceeds routed through your preferred approved settlement channel — AED, USD, SWIFT, or stablecoin where applicable.",
  },
];

export default function OwnerHook() {
  return (
    <section
      id="owner-hook"
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading block */}
        <motion.div
          {...viewportOnce}
          transition={{ duration: 0.65 }}
          style={{ maxWidth: "740px", marginBottom: "52px" }}
        >
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "10px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
            International Owners
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 300, letterSpacing: "2px", color: "var(--text)", lineHeight: 1.14, marginBottom: "18px" }}>
            Your UAE asset should not depend<br />on your physical presence.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 400, lineHeight: 1.72, color: "var(--text-2)", maxWidth: "600px" }}>
            Viventia helps international owners buy, sell, lease, manage, and receive income from UAE property without needing to be in the country for every step.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="owner-hook-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.n}
              {...viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "var(--gold)" }}>{card.n}</p>
              <div style={{ width: "28px", height: "1px", background: "var(--border-gold)" }} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 600, letterSpacing: "0.5px", color: "var(--text)" }}>{card.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, lineHeight: 1.68, color: "var(--text-2)" }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .owner-hook-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) {
          .owner-hook-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
