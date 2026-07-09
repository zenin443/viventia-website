"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   HeroGlobe — Plexus globe + UAE skyline ground frame
   Right-column hero element for Viventia Realty Solutions
───────────────────────────────────────────────────────────── */

function PlexusGlobeSVG() {
  const cx = 210, cy = 195, r = 170;

  const latLines = [-60, -30, 0, 30, 60].map((lat) => {
    const rad = (lat * Math.PI) / 180;
    return { lat, y: cy - r * Math.sin(rad), rx: r * Math.cos(rad), ry: r * Math.cos(rad) * 0.28 };
  });

  const merOffsets = [22, 44, 66, 88];
  const meridians = merOffsets.map((deg) => ({
    deg,
    rx: r * Math.sin((deg * Math.PI) / 180),
  }));

  /* Plexus dots */
  const dots: [number, number, number][] = [
    [95,125,1.2],[112,155,1.0],[85,178,1.1],[130,168,1.0],[170,205,1.2],
    [195,218,0.9],[225,208,1.1],[258,218,1.0],[290,205,1.1],[308,192,0.9],
    [316,238,0.8],[105,210,1.0],[145,232,0.9],[175,168,1.1],[198,153,1.0],
    [230,175,0.9],[255,192,1.0],[86,148,1.0],[120,133,1.0],[302,170,1.0],
    [278,128,1.0],[78,228,0.8],[210,268,1.0],[175,258,1.0],[265,260,1.0],
    [135,275,0.8],[160,140,0.9],[190,185,0.9],[242,200,1.0],[294,186,1.0],
  ];

  /* Plexus lines */
  const lines: [number, number, number, number][] = [
    [95,125,112,155],[112,155,130,168],[130,168,170,205],[170,205,195,218],
    [195,218,225,208],[225,208,258,218],[258,218,290,205],[290,205,308,192],
    [85,178,95,125],[85,178,105,210],[105,210,145,232],[145,232,175,258],
    [175,258,210,268],[210,268,265,260],[198,153,175,168],[175,168,145,232],
    [198,153,230,175],[230,175,255,192],[255,192,258,218],[120,133,95,125],
    [302,170,308,192],[278,128,302,170],[86,148,85,178],[86,148,120,133],
    [160,140,120,133],[160,140,198,153],[190,185,175,168],[190,185,230,175],
    [242,200,225,208],[242,200,255,192],[294,186,302,170],[294,186,255,192],
  ];

  /* City arc connections — animated */
  const arcs = [
    { d: `M 240,125 Q 188,38 132,80`,    delay: "0s",    dur: "2.2s" },  // DXB → LON
    { d: `M 240,125 Q 296,108 325,195`,   delay: "0.4s",  dur: "2.5s" },  // DXB → SIN
    { d: `M 240,125 Q 260,60 308,110`,    delay: "0.2s",  dur: "2.0s" },  // DXB → Mumbai
    { d: `M 132,80  Q 96,46  60,108`,     delay: "0.8s",  dur: "2.8s" },  // LON → NYC
    { d: `M 240,125 Q 200,60 158,97`,     delay: "0.6s",  dur: "2.3s" },  // DXB → Zurich
    { d: `M 325,195 Q 338,175 345,160`,   delay: "1.0s",  dur: "2.1s" },  // SIN → HK
    { d: `M 325,195 Q 332,240 315,270`,   delay: "1.2s",  dur: "2.6s" },  // SIN → SYD
  ];

  /* City nodes */
  const cities = [
    { x: 132, y: 80,  label: "LON", off: [-18,-8] },
    { x: 60,  y: 108, label: "NYC", off: [-26,-8] },
    { x: 325, y: 195, label: "SIN", off: [8,-8]   },
    { x: 315, y: 270, label: "SYD", off: [8,-5]   },
    { x: 308, y: 110, label: "",    off: [0,0]     },
    { x: 158, y: 97,  label: "",    off: [0,0]     },
    { x: 345, y: 160, label: "",    off: [0,0]     },
  ];

  /* Animated arc path length approximations for dasharray */
  const ARC_LEN = 200;

  return (
    <svg viewBox="0 0 420 395" width="100%" height="100%" fill="none" style={{ display: "block" }}>
      <defs>
        <clipPath id="gc">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
        <filter id="glow1" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow2" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="gf" cx="52%" cy="38%" r="55%">
          <stop offset="0%"   stopColor="rgba(201,168,76,0.09)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0.01)" />
        </radialGradient>
        {/* Animated arc gradient */}
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(201,168,76,0)" />
          <stop offset="50%"  stopColor="rgba(201,168,76,0.6)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
        </linearGradient>
      </defs>

      {/* Globe ambient fill */}
      <circle cx={cx} cy={cy} r={r} fill="url(#gf)" />

      {/* Globe rings */}
      <circle cx={cx} cy={cy} r={r}   stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={r-3} stroke="rgba(201,168,76,0.06)" strokeWidth="0.4" />

      {/* Latitude lines */}
      <g clipPath="url(#gc)" stroke="rgba(201,168,76,0.09)" strokeWidth="0.6" fill="none">
        {latLines.map(({ lat, y, rx, ry }) => (
          <ellipse key={lat} cx={cx} cy={y} rx={rx} ry={ry} />
        ))}
      </g>

      {/* Meridian lines */}
      <g clipPath="url(#gc)" stroke="rgba(201,168,76,0.09)" strokeWidth="0.6" fill="none">
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} />
        {meridians.map(({ deg, rx }) => (
          <ellipse key={deg} cx={cx} cy={cy} rx={rx} ry={r} />
        ))}
      </g>

      {/* Plexus dots */}
      <g clipPath="url(#gc)">
        {dots.map(([x, y, s], i) => (
          <circle key={i} cx={x} cy={y} r={s} fill="rgba(201,168,76,0.28)" />
        ))}
      </g>

      {/* Plexus connection lines */}
      <g clipPath="url(#gc)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" fill="none">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* Animated city arc connections */}
      {arcs.map((arc, i) => (
        <path key={i} d={arc.d} stroke="rgba(201,168,76,0.0)" strokeWidth="0" fill="none">
          {/* invisible base */}
        </path>
      ))}
      {arcs.map((arc, i) => (
        <path
          key={`anim-${i}`}
          d={arc.d}
          stroke="rgba(201,168,76,0.45)"
          strokeWidth="0.9"
          strokeDasharray={`${ARC_LEN} ${ARC_LEN}`}
          strokeDashoffset={ARC_LEN}
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values={`${ARC_LEN};0;-${ARC_LEN}`}
            dur={arc.dur}
            begin={arc.delay}
            repeatCount="indefinite"
          />
        </path>
      ))}

      {/* Secondary city nodes */}
      <g filter="url(#glow1)">
        {cities.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={2.2} fill="rgba(201,168,76,0.55)" />
        ))}
      </g>

      {/* City labels */}
      {cities.filter(c => c.label).map((c, i) => (
        <text
          key={i}
          x={c.x + c.off[0]}
          y={c.y + c.off[1]}
          fill="rgba(201,168,76,0.55)"
          fontSize="7.5"
          fontWeight="700"
          fontFamily="var(--font-heading, system-ui, sans-serif)"
          letterSpacing="1"
        >
          {c.label}
        </text>
      ))}

      {/* ── DXB — main glowing hub ── */}
      <g filter="url(#glow2)">
        <circle cx={240} cy={125} r={18} stroke="rgba(201,168,76,0.12)" strokeWidth="0.7" fill="none" />
        <circle cx={240} cy={125} r={10} stroke="rgba(201,168,76,0.30)" strokeWidth="0.8" fill="none" />
        <circle cx={240} cy={125} r={4.5} fill="#C9A84C" />
      </g>
      <text x={252} y={122} fill="#C9A84C" fontSize="8.5" fontWeight="700"
        fontFamily="var(--font-heading, system-ui, sans-serif)" letterSpacing="1.5">DXB</text>
      <text x={252} y={133} fill="rgba(201,168,76,0.50)" fontSize="5.5"
        fontFamily="var(--font-body, system-ui, sans-serif)" letterSpacing="0.4">25.2°N · 55.3°E</text>

      {/* DXB pulse rings */}
      <circle cx={240} cy={125} r={10} stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0">
        <animate attributeName="r"       values="10;28;10"  dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={240} cy={125} r={10} stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0">
        <animate attributeName="r"       values="10;22;10"  dur="3s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0;0"  dur="3s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ── Main exported component ── */
export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cfg = { stiffness: 70, damping: 22, mass: 1 };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), cfg);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), cfg);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={(e) => {
        const r = containerRef.current?.getBoundingClientRect();
        if (!r) return;
        mouseX.set((e.clientX - r.left) / r.width - 0.5);
        mouseY.set((e.clientY - r.top)  / r.height - 0.5);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
      style={{ width: "clamp(360px, 46vw, 560px)", position: "relative", perspective: 1000, cursor: "default" }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Ambient halo */}
        <div aria-hidden="true" style={{ position: "absolute", top: "8%", left: "50%", transform: "translateX(-50%)", width: "75%", height: "75%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 65%)", pointerEvents: "none", filter: "blur(22px)" }} />

        {/* Globe SVG */}
        <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <PlexusGlobeSVG />
        </div>
      </motion.div>
    </motion.div>
  );
}
