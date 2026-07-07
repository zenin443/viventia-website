"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface Stat {
  value: number | null;
  suffix: string;
  display: string;
  label: string;
  sublabel: string;
}

const STATS: Stat[] = [
  { value: 100, suffix: "+", display: "100+", label: "Properties Managed", sublabel: "Residential & short-term portfolios" },
  { value: 12, suffix: "", display: "12", label: "Dubai Areas", sublabel: "Active market coverage" },
  { value: 3, suffix: "", display: "3", label: "Continents Served", sublabel: "US · Europe · Middle East" },
];

function AnimatedNumber({
  target,
  suffix,
  staticDisplay,
}: {
  target: number | null;
  suffix: string;
  staticDisplay: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (target === null) {
    return (
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(36px, 4.5vw, 60px)",
          fontWeight: "900",
          letterSpacing: "-1px",
          lineHeight: "1",
        }}
        className="gold-text"
      >
        {staticDisplay}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(36px, 4.5vw, 60px)",
        fontWeight: "900",
        letterSpacing: "-1px",
        lineHeight: "1",
      }}
      className="gold-text"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        padding: "clamp(60px,8vw,100px) 32px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          className="stats-row"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "clamp(28px,3.5vw,48px) clamp(16px,2vw,32px)",
                textAlign: "center",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(201,168,76,0.12)"
                    : "none",
                gap: "12px",
              }}
            >
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                staticDisplay={stat.display}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "var(--text)",
                    letterSpacing: "0.5px",
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-3)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-row {
            grid-template-columns: 1fr !important;
          }
          .stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(201,168,76,0.12);
          }
          .stats-row > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
