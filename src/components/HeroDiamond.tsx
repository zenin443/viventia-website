"use client";
import { useState, useCallback, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   3-D ARCHITECTURAL DIAMOND
   • CSS perspective + rotateX/Y driven by mouse position
   • "Royalty" material: dark base, gold gradient edges, inner glow
   • Auto slow-spin when idle, snaps to mouse on enter
───────────────────────────────────────────────────────────── */

const SIZE = 180; // px — outer bounding box
const HALF = SIZE / 2;

// Spring config for buttery smooth follow
const SPRING = { stiffness: 120, damping: 22, mass: 0.8 };

export default function HeroDiamond() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Raw target rotation
  const rotX = useSpring(12, SPRING);
  const rotY = useSpring(-18, SPRING);

  // Auto-rotation offset (CSS animation handles this separately)
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = ((e.clientX - left) / width - 0.5) * 2;   // -1 → +1
    const ny = ((e.clientY - top) / height - 0.5) * 2;
    rotY.set(nx * 28);
    rotX.set(-ny * 22);
  }, [rotX, rotY]);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
    rotX.set(12);
    rotY.set(-18);
  }, [rotX, rotY]);

  const onMouseEnter = useCallback(() => setHovered(true), []);

  // Build rotateX/Y strings for motion style
  const rotXStr = useTransform(rotX, v => `${v}deg`);
  const rotYStr = useTransform(rotY, v => `${v}deg`);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{ width: SIZE, height: SIZE, perspective: "800px", cursor: "none", flexShrink: 0 }}
    >
      {/* Outer glow halo */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.4, scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          inset: "-28px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* 3-D scene */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          rotateX: rotXStr,
          rotateY: rotYStr,
        }}
        animate={hovered ? {} : { rotateY: ["-18deg", "10deg", "-18deg"] }}
        transition={hovered ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* ── Six faces of the diamond cube ── */}
        {FACES.map(({ name, transform, gradient, edgeGlow }) => (
          <div
            key={name}
            style={{
              position: "absolute",
              width: SIZE,
              height: SIZE,
              transform,
              background: gradient,
              border: "1px solid rgba(201,168,76,0.18)",
              boxSizing: "border-box",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Edge glow inset */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: edgeGlow,
              pointerEvents: "none",
            }} />
            {/* Fine grid texture */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              pointerEvents: "none",
            }} />
          </div>
        ))}

        {/* Inner V-mark on front face */}
        <div style={{
          position: "absolute",
          width: SIZE,
          height: SIZE,
          transform: `translateZ(${HALF}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backfaceVisibility: "hidden",
          pointerEvents: "none",
        }}>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <defs>
              <linearGradient id="dFaceGrad" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f0d880" />
                <stop offset="50%" stopColor="#C9A84C" />
                <stop offset="100%" stopColor="#7a5c18" />
              </linearGradient>
            </defs>
            <path d="M16 20 L36 52 L56 20" stroke="url(#dFaceGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M22 20 L36 46 L50 20" stroke="url(#dFaceGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35" />
            <line x1="8" y1="20" x2="22" y2="20" stroke="url(#dFaceGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="20" x2="64" y2="20" stroke="url(#dFaceGrad)" strokeWidth="3" strokeLinecap="round" />
            <polygon points="36,54 38.8,48.5 36,43 33.2,48.5" fill="#C9A84C" />
          </svg>
        </div>
      </motion.div>

      {/* Floor shadow */}
      <motion.div
        animate={{ opacity: hovered ? 0.5 : 0.25, scaleX: hovered ? 0.85 : 0.7 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "-24px",
          left: "50%",
          transform: "translateX(-50%)",
          width: SIZE * 0.7,
          height: "20px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ─── Face definitions ────────────────────────────────────── */
const BASE_DARK = "linear-gradient(135deg, #08090e 0%, #111520 50%, #0a0c14 100%)";
const BASE_MID  = "linear-gradient(135deg, #0c0f1a 0%, #141828 50%, #0d1020 100%)";
const BASE_SIDE = "linear-gradient(135deg, #0a0c18 0%, #0f1322 50%, #090b14 100%)";

const FACES = [
  {
    name: "front",
    transform: `translateZ(${HALF}px)`,
    gradient: BASE_DARK,
    edgeGlow: "linear-gradient(135deg, rgba(201,168,76,0.22) 0%, transparent 45%), linear-gradient(315deg, rgba(201,168,76,0.10) 0%, transparent 45%)",
  },
  {
    name: "back",
    transform: `rotateY(180deg) translateZ(${HALF}px)`,
    gradient: BASE_MID,
    edgeGlow: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%)",
  },
  {
    name: "right",
    transform: `rotateY(90deg) translateZ(${HALF}px)`,
    gradient: BASE_SIDE,
    edgeGlow: "linear-gradient(90deg, rgba(201,168,76,0.20) 0%, transparent 40%), linear-gradient(270deg, rgba(201,168,76,0.06) 0%, transparent 40%)",
  },
  {
    name: "left",
    transform: `rotateY(-90deg) translateZ(${HALF}px)`,
    gradient: BASE_SIDE,
    edgeGlow: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 40%), linear-gradient(270deg, rgba(201,168,76,0.20) 0%, transparent 40%)",
  },
  {
    name: "top",
    transform: `rotateX(90deg) translateZ(${HALF}px)`,
    gradient: "linear-gradient(180deg, rgba(230,195,100,0.18) 0%, rgba(12,15,24,0.95) 60%)",
    edgeGlow: "linear-gradient(180deg, rgba(201,168,76,0.35) 0%, transparent 35%)",
  },
  {
    name: "bottom",
    transform: `rotateX(-90deg) translateZ(${HALF}px)`,
    gradient: BASE_DARK,
    edgeGlow: "linear-gradient(0deg, rgba(201,168,76,0.12) 0%, transparent 40%)",
  },
];
