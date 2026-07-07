const ITEMS = [
  "DUBAI",
  "PALM JUMEIRAH",
  "DOWNTOWN DUBAI",
  "DUBAI MARINA",
  "JVC",
  "BUSINESS BAY",
  "DIFC",
  "ARABIAN RANCHES",
  "CREEK HARBOUR",
  "MBR CITY",
];

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
      {/* Left fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120px",
          height: "100%",
          background:
            "linear-gradient(90deg, var(--bg) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "100%",
          background:
            "linear-gradient(270deg, var(--bg) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track — duplicated for seamless loop */}
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marqueeScroll 30s linear infinite",
          willChange: "transform",
        }}
      >
        {[...Array(2)].map((_, copyIdx) => (
          <span key={copyIdx} style={{ display: "inline-flex", alignItems: "center" }}>
            {ITEMS.map((item, i) => (
              <span key={`${copyIdx}-${i}`} style={{ display: "inline-flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: "500",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--text-2)",
                    padding: "0 4px",
                  }}
                >
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    color: "var(--gold)",
                    fontSize: "8px",
                    margin: "0 18px",
                    display: "inline-block",
                    verticalAlign: "middle",
                    opacity: 0.65,
                  }}
                >
                  ◆
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
