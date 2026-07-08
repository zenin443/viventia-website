"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { fadeUp, slideFromLeft, slideFromRight, viewportOnce } from "@/lib/animations";

const INFO_ROWS = [
  {
    icon: Mail,
    label: "Email",
    value: "info@viventiarealtysolutions.com",
    href: "mailto:info@viventiarealtysolutions.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, United Arab Emirates",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 54 192 1968",
    href: "https://wa.me/971541921968",
  },
  {
    icon: Clock,
    label: "Response",
    value: "Within one business day",
    href: null,
  },
];

const SERVICE_OPTIONS = [
  "Buy a Property",
  "Sell a Property",
  "Long-Term Management",
  "Short-Term / Holiday",
  "International Owner Services",
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
  transition: "border-color 0.2s",
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
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.target.style.borderColor = "rgba(201,168,76,0.45)";
    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.06)";
  };

  const onBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px,10vw,140px) 32px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
          >
            <span className="eyebrow">GET IN TOUCH</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "700",
                letterSpacing: "-1.5px",
                color: "var(--text)",
                lineHeight: "1.08",
                margin: "0 0 20px",
              }}
            >
              Let&apos;s work together
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "var(--text-2)",
                lineHeight: "1.85",
                marginBottom: "48px",
              }}
            >
              Whether you are looking to buy, sell, or hand over management of
              your UAE property — our team is ready to help. Reach out and we
              will respond within one business day.
            </p>

            {/* Info rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginBottom: "40px",
              }}
            >
              {INFO_ROWS.map(({ icon: Icon, label, value, href }, i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom:
                      i < INFO_ROWS.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "9px",
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        fontWeight: "700",
                        color: "var(--text-3)",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "var(--text)",
                          transition: "color 0.2s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text)")
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "var(--text-2)",
                        }}
                      >
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971541921968"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
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
                  borderRadius: "16px",
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
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--text)",
                    letterSpacing: "-0.5px",
                    marginBottom: "12px",
                  }}
                >
                  Message received
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-2)",
                    lineHeight: "1.75",
                    maxWidth: "320px",
                    margin: "0 auto 24px",
                  }}
                >
                  Our team will be in touch within one business day. You can
                  also reach us directly at{" "}
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
                  Send another message
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "40px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
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
                      placeholder="Your name"
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

                {/* Phone */}
                <div>
                  <label style={LABEL_STYLE} htmlFor="contact-phone">
                    Phone
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

                {/* Service dropdown */}
                <div>
                  <label style={LABEL_STYLE} htmlFor="contact-service">
                    Service
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    style={{ ...INPUT_STYLE, cursor: "pointer" }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  >
                    <option value="" style={{ background: "#111520" }}>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        style={{ background: "#111520" }}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={LABEL_STYLE} htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your property or requirements..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      ...INPUT_STYLE,
                      resize: "vertical",
                      minHeight: "120px",
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
                  {submitting ? "SENDING..." : "Send Message"}
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
