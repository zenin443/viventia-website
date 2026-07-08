"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   HeroGlobe — Plexus globe + Dubai skyline ground frame
   Right-column hero element for Viventia Realty Solutions
───────────────────────────────────────────────────────────── */

/* ── Plexus Globe SVG ─────────────────────────────────────── */
function PlexusGlobeSVG() {
  const cx = 175, cy = 162, r = 140;

  /* Latitude lines */
  const latLines = [-60, -30, 0, 30, 60].map((lat) => {
    const rad = (lat * Math.PI) / 180;
    return { lat, y: cy - r * Math.sin(rad), rx: r * Math.cos(rad), ry: r * Math.cos(rad) * 0.28 };
  });

  /* Meridian offsets (absolute degrees from centre) */
  const merOffsets = [15, 30, 45, 60, 75, 90];
  const meridians = merOffsets.map((deg) => ({
    deg,
    rx: r * Math.sin((deg * Math.PI) / 180),
  }));

  /* Scattered plexus dots inside globe */
  const dots: [number, number, number][] = [
    [78,102,1.1],[92,128,0.9],[58,148,1.2],[105,155,0.9],[140,170,1.1],
    [158,195,0.8],[185,188,1.0],[215,200,0.9],[240,188,1.1],[255,170,0.9],
    [262,205,0.8],[88,175,1.0],[120,192,0.9],[145,140,1.1],[165,128,0.9],
    [190,145,0.8],[210,165,1.0],[72,120,0.9],[100,110,1.0],[250,142,0.9],
    [230,105,1.0],[64,188,0.8],[175,230,0.9],[145,218,1.0],[220,225,0.9],
    [112,228,0.8],[134,112,0.9],[158,155,0.8],[200,170,1.0],[242,155,0.9],
  ];

  /* Plexus connection lines */
  const lines: [number, number, number, number][] = [
    [78,102,92,128],[92,128,105,155],[105,155,140,170],[140,170,158,195],
    [158,195,185,188],[185,188,215,200],[215,200,240,188],[240,188,255,170],
    [58,148,78,102],[58,148,88,175],[88,175,120,192],[120,192,145,218],
    [145,218,175,230],[175,230,220,225],[165,128,145,140],[145,140,120,192],
    [165,128,190,145],[190,145,210,165],[210,165,215,200],[100,110,78,102],
    [250,142,255,170],[230,105,250,142],[72,120,58,148],[72,120,100,110],
    [134,112,100,110],[134,112,165,128],[158,155,145,140],[158,155,190,145],
    [200,170,185,188],[200,170,210,165],[242,155,250,142],[242,155,210,165],
  ];

  /* City arc connections (quadratic bezier: x1,y1 → cpx,cpy → x2,y2) */
  const arcs: [number,number,number,number,number,number][] = [
    [200,104, 155,30, 110,66],    // Dubai → London
    [200,104, 248,88, 270,162],   // Dubai → Singapore
    [200,104, 218,94, 234,122],   // Dubai → Mumbai
    [110,66,  80,38,  50,88],     // London → NYC
    [200,104, 166,50, 130,80],    // Dubai → Zurich
    [270,162, 280,145, 284,138],  // Singapore → HK
  ];

  /* City node data */
  const cities = [
    { x:110, y:66,  label:"LON", main:false },
    { x:50,  y:88,  label:"NYC", main:false },
    { x:270, y:162, label:"SIN", main:false },
    { x:234, y:122, label:"",    main:false },
    { x:130, y:80,  label:"",    main:false },
    { x:284, y:138, label:"",    main:false },
    { x:168, y:52,  label:"",    main:false },
  ];

  return (
    <svg
      viewBox="0 0 350 325"
      width="100%"
      height="100%"
      fill="none"
      style={{ display: "block", maxWidth: 420, maxHeight: 420 }}
    >
      <defs>
        <clipPath id="globeClip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
        <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mainGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="globeFill" cx="55%" cy="40%" r="55%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.07)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0.01)" />
        </radialGradient>
      </defs>

      {/* Globe ambient fill */}
      <circle cx={cx} cy={cy} r={r} fill="url(#globeFill)" />

      {/* Globe boundary ring */}
      <circle cx={cx} cy={cy} r={r}   stroke="rgba(201,168,76,0.22)" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={r-2} stroke="rgba(201,168,76,0.06)" strokeWidth="0.4" />

      {/* Latitude grid lines */}
      <g clipPath="url(#globeClip)" stroke="rgba(201,168,76,0.10)" strokeWidth="0.6" fill="none">
        {latLines.map(({ lat, y, rx, ry }) => (
          <ellipse key={lat} cx={cx} cy={y} rx={rx} ry={ry} />
        ))}
      </g>

      {/* Meridian grid lines */}
      <g clipPath="url(#globeClip)" stroke="rgba(201,168,76,0.10)" strokeWidth="0.6" fill="none">
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} />
        {meridians.map(({ deg, rx }) => (
          <ellipse key={deg} cx={cx} cy={cy} rx={rx} ry={r} />
        ))}
      </g>

      {/* Plexus dots */}
      <g clipPath="url(#globeClip)">
        {dots.map(([x, y, s], i) => (
          <circle key={i} cx={x} cy={y} r={s} fill="rgba(201,168,76,0.30)" />
        ))}
      </g>

      {/* Plexus connection lines */}
      <g clipPath="url(#globeClip)" stroke="rgba(201,168,76,0.13)" strokeWidth="0.55" fill="none">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* City arc connections */}
      <g fill="none">
        {arcs.map(([x1,y1,cpx,cpy,x2,y2], i) => (
          <path
            key={i}
            d={`M ${x1},${y1} Q ${cpx},${cpy} ${x2},${y2}`}
            stroke="rgba(201,168,76,0.38)"
            strokeWidth="0.9"
            strokeDasharray="3 4"
          />
        ))}
      </g>

      {/* Secondary city nodes */}
      <g filter="url(#nodeGlow)">
        {cities.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={2.0} fill="rgba(201,168,76,0.55)" />
        ))}
      </g>

      {/* City labels */}
      {cities.filter(c => c.label).map((c, i) => (
        <text
          key={i}
          x={c.x + 4}
          y={c.y - 4}
          fill="rgba(201,168,76,0.45)"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="var(--font-body, system-ui, sans-serif)"
          letterSpacing="0.8"
        >
          {c.label}
        </text>
      ))}

      {/* ── Dubai — main glowing node ── */}
      <g filter="url(#mainGlow)">
        <circle cx={200} cy={104} r={13} stroke="rgba(201,168,76,0.18)" strokeWidth="0.6" fill="none" />
        <circle cx={200} cy={104} r={7}  stroke="rgba(201,168,76,0.40)" strokeWidth="0.8" fill="none" />
        <circle cx={200} cy={104} r={3.5} fill="#C9A84C" />
      </g>
      {/* DXB label */}
      <text x={208} y={101} fill="#C9A84C" fontSize="7.5" fontWeight="700"
        fontFamily="var(--font-body, system-ui, sans-serif)" letterSpacing="1.2">DXB</text>
      {/* Coordinates */}
      <text x={208} y={112} fill="rgba(201,168,76,0.45)" fontSize="5.5"
        fontFamily="var(--font-body, system-ui, sans-serif)" letterSpacing="0.4">
        25.2°N · 55.3°E
      </text>

      {/* Dubai pulse animation ring */}
      <circle cx={200} cy={104} r={9}>
        <animate attributeName="r" values="9;18;9" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="stroke" values="#C9A84C;#C9A84C;#C9A84C" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={200} cy={104} r={9} stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0">
        <animate attributeName="r"       values="9;20;9"    dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ── Dubai Skyline — ground frame band ────────────────────── */
function SkylineFrame() {
  return (
    <svg
      viewBox="0 0 800 68"
      width="100%"
      height={68}
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Distant background towers */}
      <g fill="rgba(201,168,76,0.06)">
        {([
          [0,38,18],[26,30,16],[50,36,16],[74,22,16],[96,34,14],
          [118,18,16],[140,32,14],[162,26,14],[184,36,14],
          [700,28,14],[718,36,14],[736,42,12],
        ] as [number,number,number][]).map(([x,y,w],i) => (
          <rect key={i} x={x} y={y} width={w} height={68 - y} />
        ))}
      </g>

      {/* Mid-ground towers */}
      <g fill="rgba(201,168,76,0.13)">
        <rect x={204} y={20} width={18} height={48} />
        <rect x={228} y={14} width={16} height={54} />
        {/* Emirates Towers — twin peaked */}
        <polygon points="250,68 250,26 259,10 268,26 268,68" />
        <polygon points="273,68 273,33 281,20 289,33 289,68" />
        {/* Address Downtown */}
        <rect x={296} y={18} width={24} height={50} />
        <rect x={300} y={12} width={16} height={6} />
        <line x1={308} y1={12} x2={308} y2={3} stroke="rgba(201,168,76,0.18)" strokeWidth="0.9" />
        {/* Marina towers (twin) */}
        <rect x={556} y={12} width={15} height={56} />
        <rect x={577} y={18} width={15} height={50} />
        {/* Princess Tower */}
        <polygon points="600,68 600,6 608,0 616,6 616,68" />
        {/* Misc right towers */}
        <rect x={636} y={26} width={16} height={42} />
        <rect x={658} y={20} width={16} height={48} />
      </g>

      {/* Hero landmarks — slightly brighter */}
      <g fill="rgba(201,168,76,0.20)">
        {/* Burj Khalifa */}
        <polygon points="
          456,68 456,52 459,45 461,36 463,24 465,14 467,6
          468.5,2 470,6 472,14 474,24 476,36 478,45 480,52 480,68
        " />
        {/* Burj Al Arab — sail */}
        <path d="M 690,68 L 690,26 Q 700,8 712,3 L 720,3 Q 724,6 724,14 L 724,68 Z" />
        <line x1={700} y1={3} x2={720} y2={3} stroke="rgba(201,168,76,0.32)" strokeWidth="0.7" />
      </g>

      {/* Ground line */}
      <line x1="0" y1="67" x2="800" y2="67" stroke="rgba(201,168,76,0.30)" strokeWidth="0.8" />
    </svg>
  );
}

/* ── Main exported component ──────────────────────────────── */
export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 80, damping: 22, mass: 1 };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]),  springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]),   springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
      style={{
        width: "clamp(320px, 42vw, 480px)",
        position: "relative",
        perspective: 900,
        cursor: "default",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Ambient gold halo behind the globe */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(18px)",
          }}
        />

        {/* Globe */}
        <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <PlexusGlobeSVG />
        </div>

        {/* Skyline band — sits immediately below globe, full width */}
        <div
          style={{
            width: "100%",
            marginTop: "-12px",
            position: "relative",
            zIndex: 0,
            opacity: 0.9,
          }}
        >
          <SkylineFrame />
        </div>
      </motion.div>
    </motion.div>
  );
}
