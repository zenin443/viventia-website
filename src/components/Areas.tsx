"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

const AREAS = [
  { name: "Downtown Dubai",  desc: "Burj Khalifa district — iconic skyline, unmatched prestige",         tag: "Iconic" },
  { name: "Dubai Marina",    desc: "Waterfront living with world-class dining and leisure",               tag: "Waterfront" },
  { name: "Palm Jumeirah",   desc: "Ultra-luxury private villas and signature residences",                tag: "Ultra-Luxury" },
  { name: "Business Bay",    desc: "Central business district with premium riverside apartments",         tag: "Business" },
  { name: "JVC",             desc: "High-yield community — ideal for buy-to-let investors",              tag: "High Yield" },
  { name: "Arabian Ranches", desc: "Established family villa community with lush greenery",              tag: "Family" },
  { name: "DIFC",            desc: "Financial hub with premium lofts and executive residences",          tag: "Financial Hub" },
  { name: "Creek Harbour",   desc: "Waterfront destination with strong capital appreciation outlook",    tag: "Emerging" },
  { name: "JBR",             desc: "Beachfront apartments and one of Dubai's top leisure strips",        tag: "Beachfront" },
  { name: "MBR City",        desc: "Mohammed Bin Rashid City — master-planned, future-focused",         tag: "Future Growth" },
];

export default function Areas() {
  return (
    <section
      id="areas"
      style={{
        padding: "clamp(80px,10vw,140px) 0",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)", padding: "0 32px" }}
      >
        <span className="eyebrow">WHERE WE OPERATE</span>
        <h2 className="section-heading">Dubai Areas</h2>
        <div className="gold-divider" style={{ margin: "20px auto 0" }} />
      </motion.div>

      {/* Desktop grid — 5 columns × 2 rows */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="areas-desktop"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
      >
        {AREAS.map((area) => (
          <AreaCard key={area.name} area={area} />
        ))}
      </motion.div>

      {/* Mobile horizontal scroll — shown only on small screens */}
      <div
        className="areas-mobile"
        style={{
          display: "none",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          padding: "0 24px 8px",
          gap: "12px",
        }}
      >
        {AREAS.map((area) => (
          <div
            key={area.name}
            style={{
              minWidth: "200px",
              width: "200px",
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          >
            <AreaCard area={area} />
          </div>
        ))}
      </div>

      <style>{`
        /* Mobile: switch to horizontal scroll */
        @media (max-width: 768px) {
          .areas-desktop { display: none !important; }
          .areas-mobile  {
            display: flex !important;
          }
          .areas-mobile::-webkit-scrollbar { display: none; }
        }

        /* Tablet: 3-col grid */
        @media (min-width: 769px) and (max-width: 1023px) {
          .areas-desktop {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* Small desktop: 4-col grid */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .areas-desktop {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function AreaCard({ area }: { area: typeof AREAS[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "200px",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      whileHover={{
        borderColor: "rgba(201,168,76,0.45)",
        y: -5,
        boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Top */}
      <div>
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
        >
          <MapPin size={14} />
        </div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "15px",
            fontWeight: "700",
            color: "var(--text)",
            letterSpacing: "0.2px",
            lineHeight: "1.25",
            marginBottom: "10px",
          }}
        >
          {area.name}
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12.5px",
            color: "var(--text-2)",
            lineHeight: "1.65",
          }}
        >
          {area.desc}
        </p>
      </div>

      {/* Tag */}
      <div
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "4px 10px",
          background: "rgba(201,168,76,0.07)",
          border: "1px solid rgba(201,168,76,0.18)",
          borderRadius: "6px",
          fontFamily: "var(--font-body)",
          fontSize: "9px",
          fontWeight: "700",
          color: "var(--gold)",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          alignSelf: "flex-start",
        }}
      >
        {area.tag}
      </div>
    </motion.div>
  );
}
