"use client";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Layers,
  TrendingUp,
  Key,
  Star,
  CreditCard,
  Wrench,
} from "lucide-react";
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewportOnce } from "@/lib/animations";

const PROPERTY_TYPES = [
  { icon: Home, label: "Residential", desc: "Apartments, villas, and townhouses across Dubai's most sought-after communities." },
  { icon: Building2, label: "Commercial", desc: "Office spaces, retail units, and warehouses for businesses in Dubai." },
  { icon: Layers, label: "Off-Plan", desc: "Pre-launch and off-plan inventory from Dubai's leading developers." },
  { icon: TrendingUp, label: "Investment", desc: "Investment-grade sourcing for funds, family offices, and HNW individuals." },
];

const MGMT_SERVICES = [
  { icon: Key, label: "Long-Term Rentals", desc: "Tenant sourcing, lease execution, rent collection, and renewals." },
  { icon: Star, label: "Short-Term & Holiday", desc: "DTCM-licensed holiday home management on Airbnb and Booking.com." },
  { icon: CreditCard, label: "Rent Collection", desc: "AED, USD, or digital assets — disbursed to your bank monthly." },
  { icon: Wrench, label: "Maintenance", desc: "Preventive and reactive maintenance, utilities, and inspections." },
];

const SETTLEMENT_OPTIONS = [
  {
    flag: "🇺🇸",
    currency: "USD Wire",
    desc: "Direct wire to US bank accounts — Chase, BoA, Wells Fargo.",
  },
  {
    flag: "🇬🇧 🇪🇺",
    currency: "SWIFT",
    desc: "GBP and EUR transfers to UK and European banks.",
  },
  {
    flag: "◈",
    currency: "USDT · USDC",
    desc: "Stablecoin disbursement directly to your wallet.",
  },
];

const OUTLINED_NUM_STYLE = {
  fontFamily: "var(--font-heading)",
  fontSize: "clamp(80px, 10vw, 130px)",
  fontWeight: "900",
  WebkitTextStroke: "1.5px rgba(201,168,76,0.25)",
  color: "transparent",
  lineHeight: "1",
  letterSpacing: "-4px",
  userSelect: "none" as const,
  pointerEvents: "none" as const,
};

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "clamp(80px,10vw,140px) 32px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(60px,8vw,100px)" }}
        >
          <span className="eyebrow">WHAT WE DO</span>
          <h2 className="section-heading" style={{ marginTop: "0" }}>
            Our Services
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "20px auto 0" }}
          />
        </motion.div>

        {/* ══════════════════ PILLAR 01 — Buy & Sell ══════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,90px)",
            alignItems: "center",
            marginBottom: "clamp(80px,12vw,160px)",
            paddingBottom: "clamp(80px,12vw,160px)",
            borderBottom: "1px solid var(--border)",
          }}
          className="svc-pillar"
        >
          {/* Left — text */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div style={OUTLINED_NUM_STYLE} aria-hidden="true">01</div>
            <div style={{ marginTop: "24px" }}>
              <span className="eyebrow">BROKERAGE</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                  color: "var(--text)",
                  lineHeight: "1.1",
                  margin: "0 0 18px",
                }}
              >
                Buy and sell UAE property
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-2)",
                  lineHeight: "1.8",
                  maxWidth: "420px",
                }}
              >
                Our brokerage team guides you from initial search through to
                DLD transfer — with deep market knowledge, transparent
                negotiation, and end-to-end transaction management.
              </p>
            </div>
          </motion.div>

          {/* Right — 2x2 pill grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
          >
            {PROPERTY_TYPES.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                style={{
                  padding: "28px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  cursor: "default",
                  transition: "border-color 0.25s, transform 0.25s",
                }}
                whileHover={{
                  borderColor: "rgba(201,168,76,0.35)",
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    color: "var(--gold)",
                  }}
                >
                  <Icon size={18} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "var(--text)",
                    marginBottom: "8px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {label}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12.5px",
                    color: "var(--text-2)",
                    lineHeight: "1.7",
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════ PILLAR 02 — Management ══════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,90px)",
            alignItems: "center",
            marginBottom: "clamp(80px,12vw,160px)",
            paddingBottom: "clamp(80px,12vw,160px)",
            borderBottom: "1px solid var(--border)",
          }}
          className="svc-pillar"
        >
          {/* Left — vertical services list */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {MGMT_SERVICES.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  padding: "22px 0",
                  borderBottom: i < MGMT_SERVICES.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {/* Gold dot + vertical line connector */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--gold)",
                      boxShadow: "0 0 8px rgba(201,168,76,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  {i < MGMT_SERVICES.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "40px",
                        background: "linear-gradient(180deg, rgba(201,168,76,0.3), transparent)",
                        marginTop: "4px",
                      }}
                    />
                  )}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "var(--text)",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--text-2)",
                      lineHeight: "1.7",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — text (reversed) */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div style={OUTLINED_NUM_STYLE} aria-hidden="true">02</div>
            <div style={{ marginTop: "24px" }}>
              <span className="eyebrow">MANAGEMENT</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                  color: "var(--text)",
                  lineHeight: "1.1",
                  margin: "0 0 18px",
                }}
              >
                Full-service property management
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-2)",
                  lineHeight: "1.8",
                  maxWidth: "420px",
                }}
              >
                From tenant placement to monthly disbursement, we manage your
                UAE property as if it were our own. You own it. We run it —
                with complete transparency and zero guesswork.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════ PILLAR 03 — International ══════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,90px)",
            alignItems: "center",
          }}
          className="svc-pillar"
        >
          {/* Left — text */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div style={OUTLINED_NUM_STYLE} aria-hidden="true">03</div>
            <div style={{ marginTop: "24px" }}>
              <span className="eyebrow">INTERNATIONAL</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                  color: "var(--text)",
                  lineHeight: "1.12",
                  margin: "0 0 18px",
                }}
              >
                Your Dubai income.{" "}
                <br />
                Your bank account.{" "}
                <br />
                <span className="gold-text">Anywhere.</span>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-2)",
                  lineHeight: "1.8",
                  maxWidth: "420px",
                }}
              >
                We manage Dubai properties for US, EU, and UK-based owners and
                disburse rental income in their currency, to their bank — via
                wire, SWIFT, or stablecoin.
              </p>
            </div>
          </motion.div>

          {/* Right — stacked settlement option cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {SETTLEMENT_OPTIONS.map(({ flag, currency, desc }) => (
              <motion.div
                key={currency}
                variants={fadeUp}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  padding: "22px 26px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "12px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  cursor: "default",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 32px rgba(201,168,76,0.12)",
                  transition: { duration: 0.2 },
                }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0, lineHeight: "1" }}>
                  {flag}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "var(--gold)",
                      marginBottom: "4px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {currency}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--text-2)",
                      lineHeight: "1.6",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-pillar {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
