const ITEMS = [
  "DUBAI REAL ESTATE",
  "5 CORE MEMBERS",
  "PALM JUMEIRAH",
  "50+ BROKER AGENTS",
  "DOWNTOWN DUBAI",
  "100+ PROPERTIES MANAGED",
  "DUBAI MARINA",
  "3 CONTINENTS",
  "BUSINESS BAY",
  "INTERNATIONAL SETTLEMENTS",
  "DIFC",
  "FULL-SERVICE MANAGEMENT",
  "CREEK HARBOUR",
  "USD · SWIFT · CRYPTO",
  "ARABIAN RANCHES",
  "VIVENTIA REALTY SOLUTIONS",
];

const DIAMOND = (
  <span
    aria-hidden="true"
    style={{
      color: "var(--gold)",
      fontSize: "7px",
      margin: "0 20px",
      display: "inline-block",
      verticalAlign: "middle",
      opacity: 0.55,
      flexShrink: 0,
    }}
  >
    ◆
  </span>
);

export default function Marquee() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        padding: "14px 0",
        background: "rgba(7,9,15,0.6)",
      }}
    >
      {/* Left fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 0,
          width: "120px", height: "100%",
          background: "linear-gradient(90deg, var(--bg) 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, right: 0,
          width: "120px", height: "100%",
          background: "linear-gradient(270deg, var(--bg) 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }}
      />

      {/* 4 copies — guarantees seamless loop at any screen width */}
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap" as const,
          animation: "marqueeScroll 40s linear infinite",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((copyIdx) => (
          <span
            key={copyIdx}
            aria-hidden={copyIdx > 0 ? "true" : undefined}
            style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
          >
            {ITEMS.map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10.5px",
                    fontWeight: "600",
                    letterSpacing: "3.5px",
                    textTransform: "uppercase" as const,
                    color: "var(--text-2)",
                    padding: "0 4px",
                    flexShrink: 0,
                  }}
                >
                  {item}
                </span>
                {DIAMOND}
              </span>
            ))}
          </span>
        ))}
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
