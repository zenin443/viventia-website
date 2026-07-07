"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

type TabKey = 0 | 1 | 2;

const TABS = ["Buy & Sell", "Property Management", "International Owners"];

const TAB_STEPS: Record<TabKey, { num: string; title: string; desc: string }[]> = {
  0: [
    {
      num: "01",
      title: "Search & Shortlist",
      desc: "We assess your requirements, budget, and preferred areas, then shortlist the best matching properties across all Dubai neighborhoods and developer projects.",
    },
    {
      num: "02",
      title: "Due Diligence",
      desc: "We verify title deeds, check for encumbrances, review service charge history, and confirm all DLD records before you make any commitment.",
    },
    {
      num: "03",
      title: "Offer & Negotiate",
      desc: "Our team negotiates directly with sellers or developers to achieve the best price and payment terms on your behalf.",
    },
    {
      num: "04",
      title: "DLD Transfer",
      desc: "We coordinate the full DLD transfer process — from MOU and NOC through to registration and title deed issuance in your name.",
    },
  ],
  1: [
    {
      num: "01",
      title: "Sign Agreement",
      desc: "We agree on a management scope, fee structure, and timeline. One simple agreement covers your entire Dubai portfolio.",
    },
    {
      num: "02",
      title: "Tenant Placement",
      desc: "We market your property, screen applicants, verify employment and references, and execute fully compliant tenancy contracts.",
    },
    {
      num: "03",
      title: "Monthly Collection",
      desc: "Rent is collected, maintenance coordinated, and all property operations handled. You receive a detailed monthly statement.",
    },
    {
      num: "04",
      title: "Disbursement",
      desc: "Your net rental income is disbursed to your bank account — locally or internationally — on a fixed monthly schedule.",
    },
  ],
  2: [
    {
      num: "01",
      title: "Onboarding & KYC",
      desc: "We complete a streamlined KYC process remotely. You provide identification and proof of property ownership — we handle the rest.",
    },
    {
      num: "02",
      title: "Property Setup",
      desc: "We inspect, photograph, list, and prepare your property for tenancy. All licences, DEWA, and maintenance are coordinated by our team.",
    },
    {
      num: "03",
      title: "Tenant Management",
      desc: "Full tenancy lifecycle managed on your behalf — tenant selection, lease execution, rent collection, and ongoing property care.",
    },
    {
      num: "04",
      title: "Global Disbursement",
      desc: "Your rental income is sent to your account abroad — USD wire to the US, SWIFT to UK/EU, or stablecoins to your crypto wallet.",
    },
  ],
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabKey>(0);

  return (
    <section
      id="how-it-works"
      style={{
        padding: "clamp(80px,10vw,140px) 32px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)" }}
        >
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 className="section-heading">Your journey with us</h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "clamp(48px,6vw,72px)",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i as TabKey)}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: activeTab === i ? "600" : "500",
                color:
                  activeTab === i
                    ? "var(--text)"
                    : "var(--text-2)",
                letterSpacing: "0.5px",
                transition: "color 0.2s",
                borderRadius: "0",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== i) e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                if (activeTab !== i) e.currentTarget.style.color = "var(--text-2)";
              }}
            >
              {tab}
              {/* Active underline with layoutId for smooth animation */}
              {activeTab === i && (
                <motion.div
                  layoutId="tabUnderline"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "24px",
                    right: "24px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-light))",
                    borderRadius: "2px",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 36 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2px",
              position: "relative",
            }}
            className="hiw-steps"
          >
            {TAB_STEPS[activeTab].map((step, i) => (
              <div
                key={step.num}
                style={{
                  position: "relative",
                  padding: "clamp(28px,3vw,40px) clamp(20px,2.5vw,32px)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0",
                  borderRight: i < TAB_STEPS[activeTab].length - 1 ? "none" : "1px solid var(--border)",
                  borderLeft: i === 0 ? "1px solid var(--border)" : "none",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.28)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >
                {/* Top gold accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(90deg, var(--gold) 0%, transparent 80%)",
                  opacity: 0.55,
                }} />

                {/* Step number — ultra-thin Raleway */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(52px, 5.5vw, 76px)",
                    fontWeight: "100",
                    color: "rgba(201,168,76,0.18)",
                    lineHeight: "1",
                    letterSpacing: "4px",
                    marginBottom: "20px",
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </div>

                {/* Step title */}
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "var(--text)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  color: "var(--text-2)",
                  lineHeight: "1.8",
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA below */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginTop: "clamp(40px,5vw,56px)" }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold"
            style={{ cursor: "pointer" }}
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hiw-steps {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2px !important;
          }
          .hiw-steps > div {
            border-right: none !important;
            border-left: none !important;
            border: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 600px) {
          .hiw-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
