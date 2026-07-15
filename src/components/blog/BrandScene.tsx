import type { BlogImageVariant } from "@/lib/blog-data";

const VIEWBOX = "0 0 1200 240";

function SkylineScene() {
  return (
    <svg viewBox={VIEWBOX} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="0" y="0" width="1200" height="240" fill="var(--bg-2)" />
      <g stroke="var(--gold)" strokeWidth="1.2" opacity="0.55" fill="none">
        <path d="M40 220 L40 140 L90 140 L90 100 L120 100 L120 220" />
        <path d="M160 220 L160 90 L200 90 L200 60 L215 60 L215 90 L240 90 L240 220" />
        <path d="M280 220 L280 160 L320 160 L320 120 L340 120 L340 220" />
        <path d="M380 220 L380 175 L410 175 L410 220" />
        <path d="M860 220 L860 150 L890 150 L890 220" />
        <path d="M900 220 L900 70 L930 70 L930 40 L945 40 L945 70 L960 70 L960 220" />
        <path d="M1000 220 L1000 130 L1040 130 L1040 90 L1060 90 L1060 220" />
        <path d="M1090 220 L1090 100 L1130 100 L1130 60 L1150 60 L1150 220" />
      </g>
      <line x1="0" y1="220" x2="1200" y2="220" stroke="var(--border-gold)" strokeWidth="1" />
    </svg>
  );
}

function GlobeScene() {
  const cx = 600;
  const cy = 120;
  const rings = [40, 75, 110];
  const dots: [number, number][] = [
    [420, 90], [470, 60], [530, 130], [600, 50], [670, 130],
    [730, 60], [780, 90], [510, 170], [690, 170], [600, 190],
  ];
  const lines: [number, number, number, number][] = [
    [420, 90, 510, 170], [470, 60, 600, 50], [600, 50, 730, 60],
    [730, 60, 780, 90], [510, 170, 600, 190], [600, 190, 690, 170],
    [690, 170, 780, 90], [530, 130, 600, 50], [670, 130, 730, 60],
  ];
  return (
    <svg viewBox={VIEWBOX} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="0" y="0" width="1200" height="240" fill="var(--bg-2)" />
      <g stroke="var(--border-gold)" strokeWidth="1" fill="none" opacity="0.6">
        {rings.map((r) => (
          <ellipse key={r} cx={cx} cy={cy} rx={r} ry={r * 0.4} />
        ))}
        <circle cx={cx} cy={cy} r={110} />
      </g>
      <g stroke="var(--gold)" strokeWidth="0.8" opacity="0.5">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g fill="var(--gold)">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2.5} />
        ))}
      </g>
    </svg>
  );
}

function LineworkScene() {
  const lines: [number, number, number, number][] = [
    [0, 200, 300, 60], [150, 240, 450, 40], [300, 220, 600, 20],
    [500, 240, 800, 60], [650, 200, 950, 30], [850, 220, 1200, 80],
    [0, 100, 250, 180], [400, 90, 700, 200], [800, 100, 1100, 200],
  ];
  const nodes: [number, number][] = [300, 450, 600, 700, 950, 1100].map((x, i) => [x, [60, 40, 20, 200, 30, 200][i]]);
  return (
    <svg viewBox={VIEWBOX} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="0" y="0" width="1200" height="240" fill="var(--bg-2)" />
      <g stroke="var(--gold)" strokeWidth="1" opacity="0.45" fill="none">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g fill="var(--gold)" opacity="0.8">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2.5} />
        ))}
      </g>
    </svg>
  );
}

export function BrandScene({ variant }: { variant: BlogImageVariant }) {
  if (variant === "skyline") return <SkylineScene />;
  if (variant === "globe") return <GlobeScene />;
  return <LineworkScene />;
}
