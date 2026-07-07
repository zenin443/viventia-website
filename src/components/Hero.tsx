"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { viewportOnce } from "@/lib/animations";

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
      {/* ── Background gradient layers ── */}
      {/* Deep navy base with radial gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(28,35,65,0.9) 0%, rgba(7,9,15,1) 70%)",
          zIndex: 0,
        }}
      />
      {/* Simulated skyline silhouette in the lower third */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background:
            "linear-gradient(0deg, rgba(7,9,15,1) 0%, rgba(7,9,15,0) 100%)",
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

      {/* ── Main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
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
            Dubai Real Estate Consultancy
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
            DUBAI{" "}
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
            MANAGED{" "}
            <span className="gold-text">GLOBALLY</span>
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
            fontSize: "clamp(16px, 2vw, 19px)",
            fontWeight: "300",
            color: "rgba(245,240,232,0.5)",
            lineHeight: "1.75",
            maxWidth: "500px",
            margin: "32px auto 0",
          }}
        >
          We buy, sell, and manage properties in Dubai for local and
          international clients — from listing to lease to cross-border
          disbursement.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={lineVariant}
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
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
    </section>
  );
}
