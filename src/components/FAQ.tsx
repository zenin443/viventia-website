"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const faqs = [
  {
    q: "Can Viventia help if I live outside the UAE?",
    a: "Yes. Viventia is built for investors and owners who need UAE-side execution while living abroad.",
  },
  {
    q: "Do I need to be in the UAE to start?",
    a: "No. You can start with an enquiry and consultation call. Private onboarding begins after your property, ownership, and settlement requirements are reviewed.",
  },
  {
    q: "Does Viventia manage tenants and rent collection?",
    a: "Viventia supports tenant coordination, leasing, rent collection coordination, maintenance handling, renewals, and investor updates.",
  },
  {
    q: "Can rental income be settled internationally?",
    a: "Viventia helps coordinate approved banking or digital asset settlement routes where applicable, subject to transaction structure, regulatory requirements, and approval checks.",
  },
  {
    q: "Does Viventia work only in Dubai?",
    a: "No. Viventia is positioned as a UAE-wide property operations partner. Dubai-specific processes may involve Dubai-specific authorities, while other emirates may have separate requirements.",
  },
  {
    q: "Is digital asset settlement guaranteed?",
    a: "No. Digital asset settlement is available only where applicable and approved. All settlement options are subject to transaction structure, regulatory requirements, and approval checks.",
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
        background: "var(--bg)",
        padding: "var(--section-pad)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}
        >
          <span className="eyebrow">HAVE QUESTIONS</span>
          <h2 className="section-heading">
            Frequently Asked <span style={{ color: "var(--gold)" }}>Questions</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "860px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                style={{
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "26px 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(15px, 1.5vw, 16.5px)",
                      fontWeight: 700,
                      letterSpacing: "0.1px",
                      color: isOpen ? "var(--gold)" : "var(--text)",
                      lineHeight: 1.4,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? "var(--gold)" : "var(--border-gold)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      flexShrink: 0,
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <ChevronDown size={13} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "var(--text-2)",
                          lineHeight: 1.85,
                          maxWidth: "720px",
                          padding: "0 4px 26px",
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
