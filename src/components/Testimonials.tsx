"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const TESTIMONIALS = [
  {
    quote:
      "Viventia Realty Solutions handled everything — finding tenants, collecting rent, and wiring the money to my Chase account every month. I haven't had to worry about my Dubai apartment in two years.",
    author: "J.M. — New York, USA",
    title: "Property Investor",
    country: "🇺🇸 New York",
  },
  {
    quote:
      "We purchased our first Dubai property through Viventia and the entire process was seamless. Their knowledge of the off-plan market saved us significant money.",
    author: "S. & M. — Paris, France",
    title: "First-Time Buyers",
    country: "🇫🇷 Paris",
  },
  {
    quote:
      "As a landlord based in London, I needed someone I could trust completely. Viventia sends my rental income to my UK account every month — no fuss, no delays.",
    author: "E.T. — London, UK",
    title: "Landlord",
    country: "🇬🇧 London",
  },
  {
    quote:
      "Viventia handled the entire transaction remotely. From shortlisting in Abu Dhabi to completing the transfer paperwork — zero friction. The stablecoin disbursement option was a game changer for us.",
    author: "K.A. — Riyadh, Saudi Arabia",
    title: "Investment Buyer",
    country: "🇸🇦 Riyadh",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
          <span className="eyebrow">CLIENT STORIES</span>
          <h2 className="section-heading">What our clients say</h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeUp}
              className="glass"
              style={{
                padding: "36px",
                border: "1px solid var(--border-gold)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.2)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Opening quote mark */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "80px",
                  fontWeight: "900",
                  color: "var(--gold)",
                  lineHeight: "0.7",
                  marginBottom: "20px",
                  opacity: 0.7,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14.5px",
                  fontStyle: "italic",
                  fontWeight: "300",
                  color: "rgba(245,240,232,0.65)",
                  lineHeight: "1.85",
                  flex: 1,
                  marginBottom: "28px",
                }}
              >
                {testimonial.quote}
              </p>

              {/* Gold divider */}
              <div
                style={{
                  width: "36px",
                  height: "1px",
                  background: "rgba(201,168,76,0.35)",
                  marginBottom: "18px",
                }}
              />

              {/* Author */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "var(--text)",
                    letterSpacing: "0.5px",
                    marginBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--gold)",
                      boxShadow: "0 0 6px rgba(201,168,76,0.5)",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {testimonial.author}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{testimonial.title}</span>
                  <span style={{ color: "var(--text-3)" }}>·</span>
                  <span>{testimonial.country}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
