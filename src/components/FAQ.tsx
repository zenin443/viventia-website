"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const faqs = [
  {
    q: "Do I need to be physically present to buy or sell a property?",
    a: "No. We handle the full transaction remotely. You can sign POA documents digitally, and our team manages due diligence, registration, and handover on your behalf from anywhere in the world.",
  },
  {
    q: "What currencies can I receive my rental income in?",
    a: "We disburse via USD wire (US and international banks), GBP/EUR via SWIFT, and USDT/USDC stablecoin to any wallet address globally. You choose the channel.",
  },
  {
    q: "How long does disbursement take?",
    a: "USD wire: same day to next business day. SWIFT: 1–3 business days. Stablecoin: within hours of receipt of cleared rental funds.",
  },
  {
    q: "Is stablecoin settlement legal for UAE real estate transactions?",
    a: "Yes. The UAE has a well-developed virtual asset regulatory framework under VARA. We operate in full compliance with AML/CFT Decree-Law No. 20 of 2018 and CBUAE guidelines.",
  },
  {
    q: "What are your management fees?",
    a: "Our management fee is typically 5–8% of annual rental income depending on the property type and services required. We provide a detailed fee schedule during onboarding.",
  },
  {
    q: "Can you manage short-term rentals (Airbnb/holiday homes)?",
    a: "Yes. We hold short-term rental permits and manage end-to-end STR operations including listing, guest management, cleaning, and full regulatory compliance.",
  },
  {
    q: "What areas do you cover?",
    a: "Across the UAE — including key districts in Dubai (Marina, Downtown, DIFC, JVC, Business Bay, Palm Jumeirah), Abu Dhabi (Yas Island, Al Reem Island), and expanding to Northern Emirates by Q4 2026.",
  },
  {
    q: "How does the onboarding process work?",
    a: "We run a 6-step KYC onboarding — client type, details, service selection, AML compliance declaration, document upload, and review. The whole process takes under 15 minutes online.",
  },
  {
    q: "Do you assist with the UAE Golden Visa?",
    a: "We partner with licensed immigration advisors who can guide property-linked Golden Visa applications. Property purchases of AED 2M+ qualify.",
  },
  {
    q: "What documents do I need to buy property as a foreigner?",
    a: "Valid passport, proof of funds, and a signed MOU. We guide you through the full process including regulatory no-objection, transfer fees, and title deed registration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      style={{
        background: "#000000",
        padding: "clamp(80px, 10vw, 140px) 32px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: "72px" }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>HAVE QUESTIONS</p>
          <h2 className="section-heading">
            FREQUENTLY ASKED{" "}
            <span style={{ color: "var(--gold)" }}>QUESTIONS</span>
          </h2>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid var(--border)",
                  borderLeft: isOpen ? "2px solid var(--gold)" : "2px solid transparent",
                  transition: "border-color 0.3s ease",
                  paddingLeft: isOpen ? "20px" : "0px",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(15px, 1.5vw, 17px)",
                      fontWeight: isOpen ? 600 : 400,
                      color: isOpen ? "var(--text)" : "rgba(245,240,232,0.8)",
                      lineHeight: 1.4,
                      transition: "color 0.2s, font-weight 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{
                      color: isOpen ? "var(--gold)" : "var(--text-2)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(14px, 1.4vw, 16px)",
                          fontWeight: 300,
                          color: "var(--text-2)",
                          lineHeight: 1.85,
                          paddingBottom: "24px",
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
