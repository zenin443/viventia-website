"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { slideFromLeft, slideFromRight, viewportOnce } from "@/lib/animations";

const SERVICE_OPTIONS = [
  "Buy UAE Property",
  "Sell UAE Property",
  "Manage My Property",
  "International Owner Services",
  "Rental Income Settlement",
  "Sale Proceeds Settlement",
  "General Enquiry",
];

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  color: "var(--text)",
  fontSize: "14px",
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  boxSizing: "border-box" as const,
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "10.5px",
  fontWeight: "700",
  color: "var(--text-3)",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  marginBottom: "8px",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close the service dropdown when clicking outside it
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try WhatsApp or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const onFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.style.borderColor = "rgba(201,168,76,0.45)";
    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.06)";
  };

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.boxShadow = "none";
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      document.getElementById("contact-name")?.focus();
    }, 400);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px,10vw,140px) 32px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(48px,7vw,100px)",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* ── Left column ── */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ paddingTop: "10px" }}
          >
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(30px, 3.8vw, 44px)",
                fontWeight: 800,
                letterSpacing: "0.2px",
                lineHeight: "1.24",
                color: "var(--text)",
                margin: "0",
              }}
            >
              Ready to operate your UAE property{" "}
              <span className="gold-text">without being in the UAE?</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15.5px",
                color: "var(--text-2)",
                lineHeight: "1.85",
                maxWidth: "460px",
                margin: "28px 0 40px",
              }}
            >
              Start with a private consultation. We review your property,
              ownership goals, management needs, and preferred settlement
              route before onboarding begins.
            </p>

            <div
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-gold"
                style={{ cursor: "pointer" }}
              >
                Book Private Consultation
              </button>
              <a
                href="https://wa.me/971541921968"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* ── Right column — form ── */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  padding: "60px 40px",
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "var(--gold)",
                  }}
                >
                  <CheckCircle size={48} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "var(--text)",
                    letterSpacing: "-0.2px",
                    marginBottom: "12px",
                  }}
                >
                  Enquiry received
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-2)",
                    lineHeight: "1.75",
                    maxWidth: "340px",
                    margin: "0 auto 24px",
                  }}
                >
                  Our team will review your requirement and be in touch
                  within one business day to arrange your private
                  consultation. You can also reach us directly at{" "}
                  <a
                    href="mailto:info@viventiarealtysolutions.com"
                    style={{ color: "var(--gold)", cursor: "pointer" }}
                  >
                    info@viventiarealtysolutions.com
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  className="btn-ghost"
                  style={{ cursor: "pointer", fontSize: "12px" }}
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  padding: "40px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
                  border: "1px solid rgba(201,168,76,0.16)",
                  borderRadius: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "19px",
                    fontWeight: "800",
                    color: "var(--text)",
                    letterSpacing: "0.1px",
                    margin: "0",
                  }}
                >
                  Tell us about your UAE property requirement.
                </h3>

                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                  className="form-row"
                >
                  <div>
                    <label style={LABEL_STYLE} htmlFor="contact-name">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      style={INPUT_STYLE}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label style={LABEL_STYLE} htmlFor="contact-email">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      style={INPUT_STYLE}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label style={LABEL_STYLE} htmlFor="contact-phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    style={INPUT_STYLE}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {/* Service Interest — custom-styled dropdown (native <select> popups
                    cannot be themed and rendered as an unstyled browser list against
                    this dark UI) */}
                <div ref={selectRef} style={{ position: "relative" }}>
                  <label style={LABEL_STYLE} htmlFor="contact-service">
                    Service Interest
                  </label>
                  <div
                    id="contact-service"
                    role="button"
                    tabIndex={0}
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                    onClick={() => setServiceOpen((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setServiceOpen((v) => !v);
                      } else if (e.key === "Escape") {
                        setServiceOpen(false);
                      }
                    }}
                    style={{
                      ...INPUT_STYLE,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      borderColor: serviceOpen
                        ? "rgba(201,168,76,0.45)"
                        : "rgba(255,255,255,0.1)",
                      background: serviceOpen
                        ? "rgba(201,168,76,0.06)"
                        : "rgba(255,255,255,0.04)",
                      boxShadow: serviceOpen
                        ? "0 0 0 3px rgba(201,168,76,0.06)"
                        : "none",
                    }}
                  >
                    <span
                      style={{
                        color: form.service ? "var(--text)" : "var(--text-3)",
                      }}
                    >
                      {form.service || "Select a service"}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRight: "1.5px solid var(--gold)",
                        borderBottom: "1.5px solid var(--gold)",
                        transform: serviceOpen
                          ? "rotate(-135deg) translate(1px, 1px)"
                          : "rotate(45deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {serviceOpen && (
                    <div
                      role="listbox"
                      aria-label="Service Interest"
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: "calc(100% + 8px)",
                        background: "#0a0a0a",
                        border: "1px solid rgba(201,168,76,0.25)",
                        borderRadius: "10px",
                        boxShadow: "0 20px 44px -12px rgba(0,0,0,0.6)",
                        overflow: "hidden",
                        zIndex: 20,
                      }}
                    >
                      {SERVICE_OPTIONS.map((opt) => {
                        const active = form.service === opt;
                        return (
                          <div
                            key={opt}
                            role="option"
                            aria-selected={active}
                            tabIndex={0}
                            onClick={() => {
                              setForm((f) => ({ ...f, service: opt }));
                              setServiceOpen(false);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setForm((f) => ({ ...f, service: opt }));
                                setServiceOpen(false);
                              }
                            }}
                            style={{
                              padding: "12px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              color: active ? "#f5e296" : "var(--text-2)",
                              background: active
                                ? "rgba(201,168,76,0.12)"
                                : "transparent",
                              cursor: "pointer",
                              transition: "background 0.15s ease, color 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "rgba(201,168,76,0.14)";
                              e.currentTarget.style.color = "#f5e296";
                            }}
                            onMouseLeave={(e) => {
                              if (!active) {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "var(--text-2)";
                              }
                            }}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label style={LABEL_STYLE} htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us a little about your property or requirement..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      ...INPUT_STYLE,
                      resize: "vertical",
                      minHeight: "100px",
                      lineHeight: "1.6",
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "15px",
                    fontSize: "13px",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? "SENDING..." : "Submit Enquiry"}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--text-3)",
                    textAlign: "center",
                  }}
                >
                  We respond within one business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
