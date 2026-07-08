"use client";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import SpotlightWordmark from "@/components/SpotlightWordmark";
import HeroGlobe from "@/components/HeroGlobe";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const goldLineVariant: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 120,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.05 },
  },
};

/* ─── V-Mark with mouse-follow spotlight ──────────────────── */
function HeroMark() {
  const markRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = markRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    setSpot({ x: ((e.clientX - left) / width) * 100, y: ((e.clientY - top) / height) * 100, active: true });
  }, []);

  const onLeave = useCallback(() => setSpot(s => ({ ...s, active: false })), []);

  return (
    <div
      ref={markRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ position: "relative", display: "inline-block", cursor: "default", marginBottom: "32px" }}
    >
      {/* Outer glow ring */}
      <motion.div
        animate={{ opacity: spot.active ? 1 : 0, scale: spot.active ? 1 : 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", inset: "-16px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* SVG V-mark */}
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" style={{ display: "block", filter: spot.active ? "drop-shadow(0 0 24px rgba(201,168,76,0.55))" : "drop-shadow(0 0 8px rgba(201,168,76,0.2))", transition: "filter 0.3s ease" }}>
        <defs>
          <linearGradient id="vMarkGrad" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e2c570" />
            <stop offset="40%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
          {/* Mouse-follow spotlight gradient */}
          <radialGradient id="vMarkSpot" cx={`${spot.x}%`} cy={`${spot.y}%`} r="55%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#fff" stopOpacity={spot.active ? 0.25 : 0} />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="vMarkGradHover" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f0d880" />
            <stop offset="50%" stopColor="#e2c570" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx="48" cy="48" r="47" fill="rgba(12,15,24,0.95)" stroke="rgba(201,168,76,0.22)" strokeWidth="1.5" />

        {/* Spotlight overlay on circle */}
        <circle cx="48" cy="48" r="47" fill="url(#vMarkSpot)" style={{ transition: "all 0.1s" }} />

        {/* V strokes — main */}
        <path d="M22 26 L48 70 L74 26" stroke={spot.active ? "url(#vMarkGradHover)" : "url(#vMarkGrad)"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ transition: "stroke 0.2s" }} />
        {/* V strokes — inner thin echo */}
        <path d="M29 26 L48 64 L67 26" stroke="url(#vMarkGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={spot.active ? 0.5 : 0.2} style={{ transition: "opacity 0.2s" }} />

        {/* Diamond tip at base of V */}
        <polygon points="48,72 51.5,65 48,58.5 44.5,65" fill={spot.active ? "#e2c570" : "#C9A84C"} style={{ transition: "fill 0.2s" }} />

        {/* Top horizontal bar */}
        <line x1="14" y1="26" x2="30" y2="26" stroke="url(#vMarkGrad)" strokeWidth="4" strokeLinecap="round" />
        <line x1="66" y1="26" x2="82" y2="26" stroke="url(#vMarkGrad)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollDown = () => {
    const next = sectionRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 32px 100px",
      }}
    >
      {/* ── VIVENTIA background wordmark + spotlight ── */}
      <SpotlightWordmark
        verticalAlign="62%"
        restOpacity={0.03}
        radius={420}
      />
      {/* ── Background gradient layers ── */}
      {/* Pure black base */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "#000000",
          zIndex: 0,
        }}
      />
      {/* Bottom fade to black */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background: "linear-gradient(0deg, #000000 0%, transparent 100%)",
          zIndex: 1,
        }}
      />
      {/* Gold ambient light from top center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Gold architectural highlights (building-like silhouettes) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1100px",
          height: "200px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.025) 50%, rgba(201,168,76,0.04) 100%)",
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1100 200'%3E%3Crect x='0' y='60' width='40' height='140'/%3E%3Crect x='50' y='20' width='30' height='180'/%3E%3Crect x='90' y='40' width='50' height='160'/%3E%3Crect x='150' y='10' width='25' height='190'/%3E%3Crect x='185' y='50' width='35' height='150'/%3E%3Crect x='230' y='30' width='60' height='170'/%3E%3Crect x='300' y='0' width='20' height='200'/%3E%3Crect x='330' y='35' width='45' height='165'/%3E%3Crect x='385' y='55' width='30' height='145'/%3E%3Crect x='425' y='15' width='55' height='185'/%3E%3Crect x='490' y='40' width='40' height='160'/%3E%3Crect x='540' y='25' width='30' height='175'/%3E%3Crect x='580' y='0' width='20' height='200'/%3E%3Crect x='610' y='45' width='50' height='155'/%3E%3Crect x='670' y='20' width='35' height='180'/%3E%3Crect x='715' y='60' width='45' height='140'/%3E%3Crect x='770' y='30' width='25' height='170'/%3E%3Crect x='805' y='10' width='60' height='190'/%3E%3Crect x='875' y='45' width='30' height='155'/%3E%3Crect x='915' y='25' width='40' height='175'/%3E%3Crect x='965' y='50' width='50' height='150'/%3E%3Crect x='1025' y='15' width='35' height='185'/%3E%3Crect x='1070' y='35' width='30' height='165'/%3E%3C/svg%3E\")",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1100 200'%3E%3Crect x='0' y='60' width='40' height='140'/%3E%3Crect x='50' y='20' width='30' height='180'/%3E%3Crect x='90' y='40' width='50' height='160'/%3E%3Crect x='150' y='10' width='25' height='190'/%3E%3Crect x='185' y='50' width='35' height='150'/%3E%3Crect x='230' y='30' width='60' height='170'/%3E%3Crect x='300' y='0' width='20' height='200'/%3E%3Crect x='330' y='35' width='45' height='165'/%3E%3Crect x='385' y='55' width='30' height='145'/%3E%3Crect x='425' y='15' width='55' height='185'/%3E%3Crect x='490' y='40' width='40' height='160'/%3E%3Crect x='540' y='25' width='30' height='175'/%3E%3Crect x='580' y='0' width='20' height='200'/%3E%3Crect x='610' y='45' width='50' height='155'/%3E%3Crect x='670' y='20' width='35' height='180'/%3E%3Crect x='715' y='60' width='45' height='140'/%3E%3Crect x='770' y='30' width='25' height='170'/%3E%3Crect x='805' y='10' width='60' height='190'/%3E%3Crect x='875' y='45' width='30' height='155'/%3E%3Crect x='915' y='25' width='40' height='175'/%3E%3Crect x='965' y='50' width='50' height='150'/%3E%3Crect x='1025' y='15' width='35' height='185'/%3E%3Crect x='1070' y='35' width='30' height='165'/%3E%3C/svg%3E\")",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          zIndex: 0,
        }}
      />

      {/* ── Main content — split layout ── */}
      <div
        className="hero-split"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          padding: "0 32px",
        }}
      >
        {/* Left: text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-text-col"
          style={{ flex: "1 1 0", minWidth: 0 }}
        >
        {/* Hero V-mark */}
        <motion.div variants={lineVariant} style={{ display: "flex" }}>
          <HeroMark />
        </motion.div>

        {/* Identity badge */}
        <motion.div variants={lineVariant}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 18px",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "100px",
              marginBottom: "44px",
              fontSize: "11px",
              color: "var(--gold)",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--gold)",
                boxShadow: "0 0 8px rgba(201,168,76,0.6)",
                flexShrink: 0,
              }}
            />
            UAE Real Estate Consultancy
          </span>
        </motion.div>

        {/* Headline line 1 */}
        <motion.div variants={lineVariant}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(58px, 8.5vw, 118px)",
              fontWeight: "900",
              lineHeight: "0.95",
              letterSpacing: "-3px",
              color: "var(--text)",
              marginBottom: "0",
            }}
          >
            UAE{" "}
            <span className="gold-text">PROPERTY</span>
          </h1>
        </motion.div>

        {/* Headline line 2 */}
        <motion.div variants={lineVariant}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(58px, 8.5vw, 118px)",
              fontWeight: "900",
              lineHeight: "0.95",
              letterSpacing: "-3px",
              color: "var(--text)",
              marginBottom: "0",
            }}
          >
            GET IT{" "}
            <span className="gold-text">SETTLED</span>
          </h1>
        </motion.div>

        {/* Animated gold line */}
        <motion.div
          variants={lineVariant}
          style={{ display: "flex", justifyContent: "center", margin: "28px 0 0" }}
        >
          <motion.div
            variants={goldLineVariant}
            style={{
              height: "2px",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
              borderRadius: "2px",
              boxShadow: "0 0 12px rgba(201,168,76,0.4)",
            }}
          />
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          variants={lineVariant}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            fontWeight: "300",
            color: "rgba(245,240,232,0.5)",
            lineHeight: "1.75",
            maxWidth: "480px",
            margin: "32px 0 0",
          }}
        >
          We buy, sell, and manage properties across the UAE for local and
          international clients — from listing to lease to cross-border
          settlement in any currency.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={lineVariant}
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "48px",
          }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold"
            style={{ padding: "15px 36px", fontSize: "13px" }}
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost"
            style={{ padding: "15px 36px", fontSize: "13px" }}
          >
            Our Services
          </button>
        </motion.div>
        </motion.div>

        {/* Right: plexus globe + skyline */}
        <div className="hero-diamond-col" style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <HeroGlobe />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={scrollDown}
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(201,168,76,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 2,
          padding: "8px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.9)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,168,76,0.5)")}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            fontWeight: "600",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "inherit",
          }}
        >
          SCROLL
        </span>
        <div className="animate-bounce-slow">
          <ChevronDown size={18} />
        </div>
      </motion.button>

      <style>{`
        @media (max-width: 860px) {
          .hero-split {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 0 20px !important;
          }
          .hero-text-col { align-items: center; }
          .hero-diamond-col { order: -1; margin-bottom: 24px; }
        }
        @media (max-width: 520px) {
          .hero-diamond-col { transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
