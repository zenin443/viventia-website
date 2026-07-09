"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroGlobe from "@/components/HeroGlobe";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const lineVariant: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

/* ── Trust bar icons ── */
function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.25C16.5 22.15 20 17.25 20 12V6l-8-4z"/>
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M9 21V9h6v12"/>
      <path d="M9 12h6"/>
      <path d="M9 15h6"/>
    </svg>
  );
}
function GlobalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function SettleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M14.5 8.5C14 7.67 13.07 7 12 7c-1.66 0-3 1.12-3 2.5 0 1.38 1.34 2.5 3 2.5s3 1.12 3 2.5c0 1.38-1.34 2.5-3 2.5-1.07 0-2-.67-2.5-1.5"/>
      <path d="M12 5v1.5M12 17.5V19"/>
    </svg>
  );
}

const TRUST = [
  { Icon: ShieldIcon,   label: "RERA Registered — Dubai"     },
  { Icon: BuildingIcon, label: "DLD Registered"              },
  { Icon: GlobalIcon,   label: "International Owner Support" },
  { Icon: SettleIcon,   label: "Bank / SWIFT / Digital Asset" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Background ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "#000", zIndex: 0 }} />
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: "10%", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(201,168,76,0.055) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 70% 80% at 60% 40%, black, transparent)", WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 60% 40%, black, transparent)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── Main split layout ── */}
      <div
        className="hero-split"
        style={{
          position: "relative", zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "100px 56px 0",
          gap: "40px",
        }}
      >
        {/* ── Left: text column ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text"
          style={{ flex: "0 0 50%", minWidth: 0 }}
        >
          {/* Eyebrow */}
          <motion.div variants={lineVariant} style={{ marginBottom: "28px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-heading)", fontSize: "10px", fontWeight: 700, letterSpacing: "6px", textTransform: "uppercase", color: "var(--gold)" }}>
              <span style={{ width: "20px", height: "1px", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
              UAE Real Estate Operations
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={lineVariant} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(48px, 5.8vw, 90px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "2px", textTransform: "uppercase", color: "var(--text)", margin: 0 }}>
            UAE Property,
          </motion.h1>
          <motion.h1 variants={lineVariant} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(48px, 5.8vw, 90px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 32px" }}>
            <span className="gold-text">Operated Globally.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p variants={lineVariant} style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 1.35vw, 16px)", fontWeight: 400, lineHeight: 1.85, color: "var(--text-2)", maxWidth: "440px", marginBottom: "40px" }}>
            Own, sell, rent, and manage UAE real estate from anywhere in the world — with trusted on-ground execution, transparent reporting, and global settlement support.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariant} style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
              style={{ padding: "14px 36px", fontSize: "11px", letterSpacing: "1.5px" }}
            >
              Book Private Consultation
            </button>
            <button
              onClick={() => document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost"
              style={{ padding: "14px 30px", fontSize: "11px", letterSpacing: "1.5px" }}
            >
              Explore Services
            </button>
          </motion.div>
        </motion.div>

        {/* ── Right: globe ── */}
        <motion.div
          className="hero-globe"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.35 }}
          style={{ flex: "0 0 50%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <HeroGlobe />
        </motion.div>
      </div>

      {/* ── Trust bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 1.0, ease: EASE }}
        style={{
          position: "relative", zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          marginTop: "auto",
        }}
      >
        <div
          className="trust-bar"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {TRUST.map(({ Icon, label }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "18px 0",
                borderRight: i < TRUST.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                paddingLeft: i > 0 ? "28px" : "0",
                paddingRight: i < TRUST.length - 1 ? "28px" : "0",
              }}
            >
              <span style={{ color: "rgba(201,168,76,0.55)", flexShrink: 0 }}><Icon /></span>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--text-2)" }}>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => document.querySelector("#owner-hook")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        style={{ position: "absolute", bottom: "70px", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(201,168,76,0.35)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", zIndex: 3, padding: "8px" }}
      >
        <span style={{ fontFamily: "var(--font-heading)", fontSize: "8px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "inherit" }}>SCROLL</span>
        <ChevronDown size={14} />
      </motion.button>

      <style>{`
        @media (max-width: 900px) {
          .hero-split {
            flex-direction: column !important;
            padding: 100px 28px 40px !important;
            align-items: flex-start !important;
          }
          .hero-text { flex: unset !important; width: 100%; }
          .hero-globe { flex: unset !important; width: 100%; margin-top: 12px; }
          .trust-bar {
            grid-template-columns: 1fr 1fr !important;
            padding: 0 28px !important;
          }
          .trust-bar > div:nth-child(2) { border-right: none !important; }
          .trust-bar > div:nth-child(3) { padding-left: 0 !important; }
          .trust-bar > div:nth-child(4) { border-right: none !important; }
        }
        @media (max-width: 540px) {
          .trust-bar { grid-template-columns: 1fr !important; }
          .trust-bar > div { border-right: none !important; padding-left: 0 !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .trust-bar > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
