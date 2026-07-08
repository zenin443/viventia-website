"use client";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const STEPS = [
  {
    n: "01",
    label: "Brief",
    body: "Tell us your objective: buy, sell, list, lease, manage, or receive income abroad.",
  },
  {
    n: "02",
    label: "Verify",
    body: "We review property details, ownership documents, tenant status, market position, and settlement requirements.",
  },
  {
    n: "03",
    label: "Execute",
    body: "Our UAE team handles viewings, negotiations, leasing, maintenance, documentation, and transfer coordination.",
  },
  {
    n: "04",
    label: "Report",
    body: "You receive clear updates, income visibility, operational status, and next-step recommendations.",
  },
  {
    n: "05",
    label: "Settle",
    body: "Funds disbursed through your preferred approved route: AED, USD wire, SWIFT, USDT, or USDC where applicable.",
  },
];

export default function OperatingProcess() {
  return (
    <section
      id="process"
      style={{ padding: "var(--section-pad)", background: "var(--bg-2)" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          {...viewportOnce}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: "56px" }}
        >
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "10px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
            Operating Model
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px, 3.4vw, 44px)", fontWeight: 300, letterSpacing: "2px", color: "var(--text)", lineHeight: 1.14 }}>
            A clear process from first brief to{" "}
            <span className="gold-text">final settlement.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="process-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              {...viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className={`process-step${i < STEPS.length - 1 ? " process-step--border" : ""}`}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {/* Step number with connecting line */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-gold)", background: "rgba(201,168,76,0.07)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 800, color: "var(--gold)", letterSpacing: "1px" }}>{step.n}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--border-gold), transparent)" }} />
                )}
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 600, letterSpacing: "0.5px", color: "var(--text)" }}>{step.label}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 400, lineHeight: 1.68, color: "var(--text-2)" }}>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        .process-step {
          padding: 0 28px 0 0;
        }
        .process-step--border {
          border-right: 1px solid var(--border);
          padding-right: 28px;
          margin-right: 0;
        }
        .process-step:not(:first-child) {
          padding-left: 28px;
        }
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px 24px;
          }
          .process-step--border { border-right: none; padding-right: 0; }
          .process-step:not(:first-child) { padding-left: 0; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
