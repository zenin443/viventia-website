"use client";
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   UAE TERRITORY MAP ART
   · Simplified but recognisable UAE SVG outline
   · Coordinate grid clipped inside the territory
   · City nodes: Dubai (gold pulse), Abu Dhabi, Sharjah, RAK
   · International arc connections: London · Mumbai · New York · Moscow
   · Mouse parallax — slight depth tilt on hover
───────────────────────────────────────────────────────────── */

// UAE simplified outline — clockwise from NW Gulf coast
// ViewBox: 0 0 440 360
const UAE_PATH = `
  M 52,108
  L 68,88
  L 92,72
  L 128,60
  L 162,52
  L 198,46
  L 228,40
  L 260,35
  L 292,28
  L 318,22
  L 342,18
  L 362,20
  L 378,30
  L 390,50
  L 394,76
  L 392,104
  L 386,130
  L 382,160
  L 378,196
  L 370,228
  L 358,258
  L 340,280
  L 310,296
  L 270,305
  L 225,308
  L 178,304
  L 130,292
  L 88,272
  L 54,248
  L 34,220
  L 24,188
  L 20,156
  L 24,128
  L 38,112
  Z
`;

// Grid lines (horizontal + vertical), will be clipped to UAE
function GridLines() {
  const hLines = [];
  const vLines = [];
  for (let y = 20; y <= 340; y += 22) {
    hLines.push(<line key={`h${y}`} x1="0" y1={y} x2="440" y2={y} />);
  }
  for (let x = 20; x <= 440; x += 22) {
    vLines.push(<line key={`v${x}`} x1={x} y1="0" x2={x} y2="360" />);
  }
  return (
    <g stroke="rgba(201,168,76,0.13)" strokeWidth="0.6" fill="none">
      {hLines}
      {vLines}
    </g>
  );
}

// City node with optional pulse ring
function CityNode({
  cx, cy, label, labelDx = 10, labelDy = -8,
  size = 3, gold = false, pulse = false,
}: {
  cx: number; cy: number; label: string;
  labelDx?: number; labelDy?: number;
  size?: number; gold?: boolean; pulse?: boolean;
}) {
  const fill = gold ? "#C9A84C" : "rgba(245,240,232,0.55)";
  const stroke = gold ? "rgba(201,168,76,0.4)" : "rgba(245,240,232,0.2)";
  return (
    <g>
      {/* outer ring */}
      <circle cx={cx} cy={cy} r={size + 6} fill="none" stroke={stroke} strokeWidth="0.8" />
      {/* dot */}
      <circle cx={cx} cy={cy} r={size} fill={fill} />
      {/* pulse animation — gold only */}
      {pulse && (
        <>
          <circle cx={cx} cy={cy} r={size + 14} fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8">
            <animate attributeName="r" from={size + 8} to={size + 22} dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r={size + 8} fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.6">
            <animate attributeName="r" from={size + 4} to={size + 16} dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      {/* label */}
      <text
        x={cx + labelDx} y={cy + labelDy}
        fill={gold ? "rgba(201,168,76,0.85)" : "rgba(245,240,232,0.45)"}
        fontSize="7.5" fontFamily="'Raleway', sans-serif"
        fontWeight="700" letterSpacing="1.5" textAnchor="start"
      >
        {label}
      </text>
    </g>
  );
}

// Dashed arc from a UAE point to an off-canvas destination
function ArcLine({
  x1, y1, x2, y2, label, labelX, labelY,
}: {
  x1: number; y1: number; x2: number; y2: number;
  label: string; labelX: number; labelY: number;
}) {
  const mx = (x1 + x2) / 2 + (y2 - y1) * 0.25;
  const my = (y1 + y2) / 2 - (x2 - x1) * 0.18;
  return (
    <g>
      <path
        d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
        fill="none"
        stroke="rgba(201,168,76,0.28)"
        strokeWidth="0.9"
        strokeDasharray="4 5"
      />
      {/* arrival dot */}
      <circle cx={x2} cy={y2} r="2" fill="rgba(201,168,76,0.5)" />
      <text
        x={labelX} y={labelY}
        fill="rgba(201,168,76,0.55)"
        fontSize="7" fontFamily="'Raleway', sans-serif"
        fontWeight="700" letterSpacing="1.5"
      >
        {label}
      </text>
    </g>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function HeroMapArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-1, 1], [6, -6]);
  const rotateY = useTransform(springX, [-1, 1], [-8, 8]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set(((e.clientX - left) / width - 0.5) * 2);
    rawY.set(((e.clientY - top) / height - 0.5) * 2);
  }, [rawX, rawY]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ width: "440px", height: "360px", flexShrink: 0, position: "relative" }}
    >
      {/* Outer ambient glow */}
      <div style={{
        position: "absolute", inset: "-40px",
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "900px", width: "100%", height: "100%" }}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <svg
          viewBox="0 0 440 360"
          width="440"
          height="360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Clip path = UAE territory shape */}
            <clipPath id="uaeClip">
              <path d={UAE_PATH} />
            </clipPath>

            {/* Glow filter for border */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for UAE fill */}
            <radialGradient id="mapFill" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.06)" />
              <stop offset="100%" stopColor="rgba(7,9,15,0)" />
            </radialGradient>
          </defs>

          {/* ── Coordinate grid clipped to UAE shape ── */}
          <g clipPath="url(#uaeClip)">
            {/* Territory fill */}
            <path d={UAE_PATH} fill="url(#mapFill)" />
            {/* Grid */}
            <GridLines />
          </g>

          {/* ── UAE border outline ── */}
          <path
            d={UAE_PATH}
            stroke="rgba(201,168,76,0.55)"
            strokeWidth="1.2"
            fill="none"
            filter="url(#goldGlow)"
          />
          {/* Subtle inner border glow layer */}
          <path
            d={UAE_PATH}
            stroke="rgba(201,168,76,0.18)"
            strokeWidth="4"
            fill="none"
          />

          {/* ── International arc connections (outside UAE) ── */}
          {/* Dubai to London (off-canvas left-up) */}
          <ArcLine x1={310} y1={55} x2={-10} y2={30} label="LONDON" labelX={-5} labelY={22} />
          {/* Dubai to Moscow (off-canvas top) */}
          <ArcLine x1={318} y1={48} x2={200} y2={-10} label="MOSCOW" labelX={182} labelY={-2} />
          {/* Dubai to New York (off-canvas top-left) */}
          <ArcLine x1={305} y1={60} x2={-8} y2={130} label="NEW YORK" labelX={-5} labelY={122} />
          {/* Dubai to Mumbai (off-canvas right) */}
          <ArcLine x1={330} y1={62} x2={450} y2={100} label="MUMBAI" labelX={420} labelY={92} />

          {/* ── City nodes ── */}
          {/* Dubai — gold, pulsing, largest */}
          <CityNode cx={316} cy={60} label="DXB" labelDx={11} labelDy={-10} size={4} gold pulse />

          {/* Abu Dhabi */}
          <CityNode cx={188} cy={118} label="AUH" labelDx={10} labelDy={-7} size={2.8} />

          {/* Sharjah */}
          <CityNode cx={345} cy={48} label="SHJ" labelDx={9} labelDy={-6} size={2.2} />

          {/* RAK */}
          <CityNode cx={380} cy={55} label="RAK" labelDx={8} labelDy={-5} size={1.8} />

          {/* Coordinate label — subtle */}
          <text x={306} y={298} fill="rgba(201,168,76,0.30)" fontSize="7"
            fontFamily="'Raleway',sans-serif" fontWeight="700" letterSpacing="1" textAnchor="middle">
            25.2°N  55.3°E
          </text>

          {/* ── Subtle latitude labels on right edge ── */}
          {[
            { y: 50, label: "26°N" }, { y: 120, label: "25°N" },
            { y: 195, label: "24°N" }, { y: 268, label: "23°N" },
          ].map(({ y, label }) => (
            <text key={label} x={418} y={y}
              fill="rgba(201,168,76,0.20)" fontSize="6.5"
              fontFamily="'Raleway',sans-serif" fontWeight="600" letterSpacing="0.8" textAnchor="end">
              {label}
            </text>
          ))}
          {[
            { x: 60, label: "52°E" }, { x: 150, label: "53°E" },
            { x: 240, label: "54°E" }, { x: 328, label: "55°E" },
          ].map(({ x, label }) => (
            <text key={label} x={x} y={348}
              fill="rgba(201,168,76,0.20)" fontSize="6.5"
              fontFamily="'Raleway',sans-serif" fontWeight="600" letterSpacing="0.8" textAnchor="middle">
              {label}
            </text>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
