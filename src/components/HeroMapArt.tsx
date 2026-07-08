"use client";
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   UAE TERRITORY MAP — Option A
   · Clean UAE silhouette (SVG path)
   · Dotted grid inside the territory
   · Dubai gold pulse node · Abu Dhabi · Sharjah
   · Subtle mouse parallax tilt
   · No arcs, no axis labels — minimal, premium
───────────────────────────────────────────────────────────── */

const UAE_PATH = `
  M 52,108
  L 68,88  L 92,72  L 128,60  L 162,52
  L 198,46 L 228,40 L 260,35  L 292,28
  L 318,22 L 342,18 L 362,20  L 378,30
  L 390,50 L 394,76 L 392,104 L 386,130
  L 382,160 L 378,196 L 370,228 L 358,258
  L 340,280 L 310,296 L 270,305 L 225,308
  L 178,304 L 130,292 L 88,272  L 54,248
  L 34,220 L 24,188  L 20,156  L 24,128
  L 38,112 Z
`;

/* ── Dot grid clipped inside UAE ── */
function DotGrid() {
  const dots = [];
  for (let y = 28; y <= 320; y += 18) {
    for (let x = 28; x <= 420; x += 18) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="rgba(201,168,76,0.28)" />);
    }
  }
  return <g>{dots}</g>;
}

/* ── City node ── */
function CityNode({
  cx, cy, label, labelDx = 12, labelDy = -10,
  size = 3, gold = false, pulse = false,
}: {
  cx: number; cy: number; label: string;
  labelDx?: number; labelDy?: number;
  size?: number; gold?: boolean; pulse?: boolean;
}) {
  return (
    <g>
      {/* outer ring */}
      <circle
        cx={cx} cy={cy} r={size + 7}
        fill="none"
        stroke={gold ? "rgba(201,168,76,0.35)" : "rgba(245,240,232,0.18)"}
        strokeWidth="0.8"
      />
      {/* core dot */}
      <circle cx={cx} cy={cy} r={size} fill={gold ? "#C9A84C" : "rgba(245,240,232,0.6)"} />

      {/* pulse rings — Dubai only */}
      {pulse && (
        <>
          <circle cx={cx} cy={cy} r={size} fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1">
            <animate attributeName="r" from={size + 4} to={size + 24} dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.55" to="0" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r={size} fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.7">
            <animate attributeName="r" from={size + 4} to={size + 18} dur="2.6s" begin="1.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
          </circle>
        </>
      )}

      {/* label */}
      <text
        x={cx + labelDx} y={cy + labelDy}
        fill={gold ? "rgba(201,168,76,0.9)" : "rgba(245,240,232,0.5)"}
        fontSize="8" fontFamily="'Raleway', sans-serif"
        fontWeight="700" letterSpacing="1.8"
      >
        {label}
      </text>

      {/* thin connector from label to dot */}
      <line
        x1={cx + labelDx} y1={cy + labelDy + 2}
        x2={cx + (gold ? 5 : 4)} y2={cy - (size + 1)}
        stroke={gold ? "rgba(201,168,76,0.25)" : "rgba(245,240,232,0.15)"}
        strokeWidth="0.5"
      />
    </g>
  );
}

/* ── Main ── */
export default function HeroMapArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 70, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 70, damping: 22 });
  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const rotateY = useTransform(springX, [-1, 1], [-7, 7]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set(((e.clientX - left) / width - 0.5) * 2);
    rawY.set(((e.clientY - top) / height - 0.5) * 2);
  }, [rawX, rawY]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0); rawY.set(0);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ width: 460, height: 380, flexShrink: 0, position: "relative" }}
    >
      {/* Ambient gold halo behind the map */}
      <div style={{
        position: "absolute",
        inset: "-60px",
        background: "radial-gradient(ellipse 55% 45% at 52% 48%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          width: "100%", height: "100%",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <svg viewBox="0 0 440 360" width="460" height="380" fill="none">
          <defs>
            <clipPath id="uaeClip2">
              <path d={UAE_PATH} />
            </clipPath>

            {/* Glow filter for outline */}
            <filter id="outlineGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Territory interior gradient */}
            <radialGradient id="territoryFill" cx="48%" cy="38%" r="52%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.055)" />
              <stop offset="70%" stopColor="rgba(201,168,76,0.018)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
          </defs>

          {/* ── Clipped content (grid + fill) ── */}
          <g clipPath="url(#uaeClip2)">
            {/* Interior glow fill */}
            <path d={UAE_PATH} fill="url(#territoryFill)" />
            {/* Dot grid */}
            <DotGrid />
          </g>

          {/* ── UAE border — two layers for depth ── */}
          {/* soft wide glow */}
          <path d={UAE_PATH} stroke="rgba(201,168,76,0.20)" strokeWidth="6" fill="none" />
          {/* sharp border */}
          <path
            d={UAE_PATH}
            stroke="rgba(201,168,76,0.60)"
            strokeWidth="1.4"
            fill="none"
            filter="url(#outlineGlow)"
          />

          {/* ── City nodes ── */}
          {/* Dubai — gold, pulsing */}
          <CityNode
            cx={318} cy={58} label="DUBAI"
            labelDx={12} labelDy={-14}
            size={4.5} gold pulse
          />
          {/* Abu Dhabi */}
          <CityNode
            cx={190} cy={116} label="ABU DHABI"
            labelDx={-70} labelDy={-12}
            size={3}
          />
          {/* Sharjah */}
          <CityNode
            cx={348} cy={46} label="SHARJAH"
            labelDx={10} labelDy={-10}
            size={2.5}
          />

          {/* ── Dubai coordinates — subtle pin ── */}
          <text
            x={318} y={290}
            fill="rgba(201,168,76,0.25)"
            fontSize="7" fontFamily="'Raleway', sans-serif"
            fontWeight="700" letterSpacing="1.2" textAnchor="middle"
          >
            25.2°N · 55.3°E
          </text>

          {/* ── "UAE" watermark in territory ── */}
          <text
            x={185} y={195}
            fill="rgba(201,168,76,0.06)"
            fontSize="52" fontFamily="'Raleway', sans-serif"
            fontWeight="900" letterSpacing="12" textAnchor="middle"
          >
            UAE
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
