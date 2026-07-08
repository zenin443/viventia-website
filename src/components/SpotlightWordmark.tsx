"use client";
import { SpotlightState } from "@/lib/useSpotlight";

interface SpotlightWordmarkProps {
  spot: SpotlightState;
  verticalAlign?: string;
  /** opacity of wordmark at rest — white/grey */
  baseOpacity?: number;
  /** spotlight radius in px */
  radius?: number;
  scale?: number;
}

export default function SpotlightWordmark({
  spot,
  verticalAlign = "50%",
  baseOpacity = 0.06,
  radius = 520,
  scale = 1,
}: SpotlightWordmarkProps) {
  return (
    <>
      {/* ── Layer 1: VIVENTIA wordmark — white/grey, barely visible at rest ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: verticalAlign,
          transform: "translate(-50%, -50%)",
          width: "100%",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 900,
            fontSize: `clamp(80px, ${14 * scale}vw, ${260 * scale}px)`,
            lineHeight: 1,
            letterSpacing: `${0.18 * scale}em`,
            color: `rgba(255, 255, 255, ${baseOpacity})`,
            textAlign: "center",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          VIVENTIA
        </div>
      </div>

      {/* ── Layer 2: spotlight — white, only visible when mouse is in section ── */}
      {/* opacity: 0→1 toggle is far smoother than gradient→transparent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: `radial-gradient(${radius}px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)`,
          opacity: spot.active ? 1 : 0,
          transition: spot.active ? "opacity 0.1s linear" : "opacity 0.7s ease",
        }}
      />

      {/* ── Layer 3: tight bright core — crisp white at cursor centre ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: `radial-gradient(160px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.07) 0%, transparent 65%)`,
          opacity: spot.active ? 1 : 0,
          transition: spot.active ? "opacity 0.1s linear" : "opacity 0.7s ease",
        }}
      />
    </>
  );
}
