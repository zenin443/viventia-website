"use client";
import { useRef, useEffect } from "react";

interface SpotlightWordmarkProps {
  verticalAlign?: string;
  /** opacity of text at rest (grey ghost) */
  restOpacity?: number;
  /** spotlight radius in px */
  radius?: number;
  scale?: number;
}

/**
 * VIVENTIA background wordmark with Resend-style cursor spotlight.
 *
 * Only the text pixels light up — the background stays completely dark.
 * Technique: background-clip:text + radial-gradient positioned at cursor.
 * Zero React state → direct DOM style.setProperty → no re-renders, buttery smooth.
 */
export default function SpotlightWordmark({
  verticalAlign = "50%",
  restOpacity = 0.07,
  radius = 380,
  scale = 1,
}: SpotlightWordmarkProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Walk up to find the nearest section or footer
    const section = wrap.closest("section, footer") as HTMLElement | null;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = wrap.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      // Direct DOM — zero React overhead
      wrap.style.setProperty("--mx", `${x}%`);
      wrap.style.setProperty("--my", `${y}%`);
      wrap.style.setProperty("--active", "1");
    };

    const onLeave = () => {
      wrap.style.setProperty("--active", "0");
      // Push spotlight off-screen so text returns to rest colour
      wrap.style.setProperty("--mx", "150%");
      wrap.style.setProperty("--my", "50%");
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      // Default: spotlight pushed off-screen right (150%), text shows at restOpacity
      style={{
        ["--mx" as string]: "150%",
        ["--my" as string]: "50%",
        ["--active" as string]: "0",
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
          textAlign: "center",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          WebkitFontSmoothing: "antialiased",

          // ── The magic: gradient clipped to text shape only ──
          // When --mx is 150% (off screen), text edge colour = restOpacity white
          // When cursor is over text, that spot brightens to 0.75 white
          background: `radial-gradient(
            ${radius}px circle at var(--mx) var(--my),
            rgba(255, 255, 255, 0.68) 0%,
            rgba(255, 255, 255, ${restOpacity}) 55%,
            rgba(255, 255, 255, ${restOpacity}) 100%
          )`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        VIVENTIA
      </div>
    </div>
  );
}
