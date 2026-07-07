"use client";
import { SpotlightState } from "@/lib/useSpotlight";

interface SpotlightWordmarkProps {
  spot: SpotlightState;
  /** vertical position of wordmark within the container, default 50% */
  verticalAlign?: string;
  /** base gold opacity of wordmark at rest */
  baseOpacity?: number;
  /** gold opacity boost at spotlight center */
  spotOpacity?: number;
  /** spotlight radius in px */
  radius?: number;
  /** scale factor — how much the text overflows, default 1 */
  scale?: number;
}

export default function SpotlightWordmark({
  spot,
  verticalAlign = "50%",
  baseOpacity = 0.13,
  spotOpacity = 0.28,
  radius = 520,
  scale = 1,
}: SpotlightWordmarkProps) {
  return (
    <>
      {/* ── Layer 1: VIVENTIA wordmark ── */}
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
            color: `rgba(201,168,76,${baseOpacity})`,
            textAlign: "center",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            /* Slightly sharper rendering */
            WebkitFontSmoothing: "antialiased",
            transition: "color 0.4s",
          }}
        >
          VIVENTIA
        </div>
      </div>

      {/* ── Layer 2: Spotlight radial gradient ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: spot.active
            ? `radial-gradient(${radius}px circle at ${spot.x}% ${spot.y}%, rgba(201,168,76,${spotOpacity}) 0%, rgba(201,168,76,0.06) 40%, transparent 70%)`
            : "transparent",
          transition: spot.active ? "background 0.05s linear" : "background 0.6s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* ── Layer 3: Secondary warm glow at cursor centre ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: spot.active
            ? `radial-gradient(180px circle at ${spot.x}% ${spot.y}%, rgba(255,220,120,0.10) 0%, transparent 60%)`
            : "transparent",
          transition: spot.active ? "background 0.05s linear" : "background 0.6s ease",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
