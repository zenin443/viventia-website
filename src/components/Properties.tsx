"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Move } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type Tag = "FOR SALE" | "FOR RENT" | "OFF-PLAN";

interface Property {
  name: string;
  location: string;
  tag: Tag;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  gradient: string;
}

const PROPERTIES: Property[] = [
  {
    name: "Marina Penthouse",
    location: "Dubai Marina",
    tag: "FOR SALE",
    price: "AED 4,200,000",
    beds: 3,
    baths: 3,
    sqft: 2850,
    gradient:
      "linear-gradient(160deg, #0e1a35 0%, #1a2d5a 45%, #2a3d6e 70%, #c9a84c18 100%)",
  },
  {
    name: "Downtown Residence",
    location: "Downtown Dubai",
    tag: "FOR RENT",
    price: "AED 180,000/yr",
    beds: 2,
    baths: 2,
    sqft: 1420,
    gradient:
      "linear-gradient(160deg, #0d1f1a 0%, #163028 45%, #1e4035 70%, #2a7a5a18 100%)",
  },
  {
    name: "Palm Villa",
    location: "Palm Jumeirah",
    tag: "FOR SALE",
    price: "AED 12,500,000",
    beds: 5,
    baths: 6,
    sqft: 7200,
    gradient:
      "linear-gradient(160deg, #1a0e28 0%, #2e1848 45%, #3d2260 70%, #9b5fe418 100%)",
  },
  {
    name: "JVC Apartment",
    location: "Jumeirah Village Circle",
    tag: "FOR RENT",
    price: "AED 75,000/yr",
    beds: 1,
    baths: 1,
    sqft: 780,
    gradient:
      "linear-gradient(160deg, #0a1520 0%, #132235 45%, #1b3250 70%, #3a6fa820 100%)",
  },
  {
    name: "Business Bay Tower",
    location: "Business Bay",
    tag: "OFF-PLAN",
    price: "AED 1,850,000",
    beds: 2,
    baths: 2,
    sqft: 1100,
    gradient:
      "linear-gradient(160deg, #1e1208 0%, #302010 45%, #422e16 70%, #c97a3022 100%)",
  },
  {
    name: "DIFC Loft",
    location: "DIFC",
    tag: "FOR SALE",
    price: "AED 3,600,000",
    beds: 2,
    baths: 2,
    sqft: 1680,
    gradient:
      "linear-gradient(160deg, #0c1520 0%, #142232 45%, #1c3245 70%, #4a8a9e20 100%)",
  },
];

const TAG_STYLES: Record<Tag, React.CSSProperties> = {
  "FOR SALE": {
    background: "linear-gradient(135deg, #c9a84c, #9a6f1a)",
    color: "#fff",
    border: "none",
  },
  "FOR RENT": {
    background: "transparent",
    color: "var(--text)",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  "OFF-PLAN": {
    background: "rgba(74,138,158,0.2)",
    color: "#7ec8dc",
    border: "1px solid rgba(74,138,158,0.35)",
  },
};

function PropertyCard({ property }: { property: Property }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: "var(--bg-card)",
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        transition: "border-color 0.25s, box-shadow 0.25s",
        borderColor: hovered ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4)" : "none",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area — CSS gradient placeholder */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
          background: property.gradient,
        }}
      >
        {/* Simulated architectural detail overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: hovered ? 0.3 : 0.5,
            transition: "opacity 0.3s",
          }}
        />
        {/* Slight scale on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 300ms ease",
            background: property.gradient,
          }}
        />

        {/* Bottom overlay gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "65%",
            background:
              "linear-gradient(0deg, rgba(7,9,15,0.9) 0%, rgba(7,9,15,0.5) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Tag badge */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: 2,
            padding: "5px 12px",
            borderRadius: "6px",
            fontFamily: "var(--font-body)",
            fontSize: "9.5px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            ...TAG_STYLES[property.tag],
          }}
        >
          {property.tag}
        </div>

        {/* Bottom content over image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "18px",
              fontWeight: "700",
              color: "var(--text)",
              marginBottom: "4px",
              letterSpacing: "0.3px",
            }}
          >
            {property.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12.5px",
              color: "var(--text-2)",
              marginBottom: "10px",
            }}
          >
            {property.location}
          </div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "17px",
              fontWeight: "600",
              color: "var(--gold)",
            }}
          >
            {property.price}
          </div>
        </div>
      </div>

      {/* Stats row below image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderTop: "1px solid var(--border)",
        }}
      >
        {[
          { icon: Bed, value: property.beds, label: "Beds" },
          { icon: Bath, value: property.baths, label: "Baths" },
          { icon: Move, value: property.sqft.toLocaleString(), label: "Sqft" },
        ].map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <Icon size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-2)",
              }}
            >
              {value}{" "}
              <span style={{ color: "var(--text-3)", fontSize: "11px" }}>
                {label}
              </span>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section
      id="properties"
      style={{
        padding: "clamp(80px,10vw,140px) 32px",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)" }}
        >
          <span className="eyebrow">FEATURED LISTINGS</span>
          <h2 className="section-heading">Properties</h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="properties-grid"
        >
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            textAlign: "center",
            marginTop: "clamp(40px,5vw,60px)",
          }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost"
            style={{ cursor: "pointer" }}
          >
            View All Properties
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .properties-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .properties-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
