"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const AREAS = [
  {
    name: "Dubai",
    desc: "The UAE's primary international hub for residential, commercial, and off-plan real estate.",
  },
  {
    name: "Abu Dhabi",
    desc: "The UAE capital, with premium waterfront, institutional, and government-linked developments.",
  },
  {
    name: "Sharjah",
    desc: "A growing residential and family-oriented market bordering Dubai.",
  },
  {
    name: "Ajman",
    desc: "An accessible, cost-efficient market drawing rising investor interest.",
  },
  {
    name: "Ras Al Khaimah",
    desc: "A fast-developing emirate known for tourism-linked and waterfront investment.",
  },
  {
    name: "Fujairah",
    desc: "The UAE's East Coast market, shaped by port access and coastal development.",
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      style={{
        padding: "clamp(80px,10vw,140px) 0",
        background: "rgba(255,255,255,0.018)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}
        >
          <span className="eyebrow">UAE PRESENCE. LOCAL EXPERTISE.</span>
          <h2 className="section-heading">
            Covering <span className="gold-text">the UAE.</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15.5px",
              lineHeight: 1.85,
              color: "var(--text-2)",
              maxWidth: "640px",
              margin: "8px auto 0",
            }}
          >
            Viventia supports property operations and investor requirements
            across key UAE markets, with emirate-specific documentation and
            transaction considerations.
          </p>
        </motion.div>

        {/* Coverage grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="areas-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
            marginTop: "clamp(48px,7vw,72px)",
            textAlign: "left",
          }}
        >
          {AREAS.map((area) => (
            <AreaCard key={area.name} area={area} />
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginTop: "44px" }}
        >
          <button
            type="button"
            onClick={() =>
              document.querySelector("#areas")?.scrollIntoView({ behavior: "smooth" })
            }
            className="areas-view-all"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body)",
              fontSize: "11.5px",
              fontWeight: 400,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--gold)",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(216,184,90,0.35)",
              paddingBottom: "4px",
              cursor: "pointer",
            }}
          >
            View All Areas
            <ArrowRight size={13} className="areas-view-all-arrow" />
          </button>
        </motion.div>
      </div>

      <style>{`
        .areas-view-all:hover .areas-view-all-arrow {
          transform: translateX(4px);
        }
        .areas-view-all-arrow {
          transition: transform 0.3s ease;
        }
        @media (max-width: 860px) {
          .areas-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .areas-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function AreaCard({ area }: { area: typeof AREAS[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        borderColor: "rgba(216,184,90,0.55)",
        boxShadow:
          "0 20px 50px -20px rgba(201,168,76,0.26), 0 0 0 1px rgba(216,184,90,0.1) inset",
        transition: { duration: 0.3 },
      }}
      style={{
        padding: "32px 30px 30px",
        border: "1px solid rgba(216,184,90,0.16)",
        borderRadius: "8px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "9px",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          color: "var(--gold)",
        }}
        aria-hidden="true"
      >
        <MapPin size={14} />
      </div>
      <h3
        className="gold-text"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "18px",
          letterSpacing: "0.2px",
          marginBottom: "12px",
        }}
      >
        {area.name}
      </h3>
      <span
        aria-hidden="true"
        style={{
          width: "20px",
          height: "1px",
          background: "rgba(201,168,76,0.4)",
          display: "block",
          marginBottom: "14px",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          fontSize: "13.5px",
          lineHeight: 1.75,
          color: "var(--text-2)",
        }}
      >
        {area.desc}
      </p>
    </motion.div>
  );
}
