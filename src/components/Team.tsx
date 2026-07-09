"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const members = [
  {
    name: "Parvez A.",
    initial: "P",
    title: "Founder & Managing Director",
    bio: "A decade of experience in UAE real estate and international capital markets. Specialist in cross-border settlement and high-net-worth client advisory.",
    linkedin: "#",
  },
  {
    name: "Operations Lead",
    initial: "O",
    title: "Head of Property Management",
    bio: "Oversees the full property management portfolio across the UAE, from tenant relations to maintenance and regulatory compliance.",
    linkedin: "#",
  },
  {
    name: "Client Relations",
    initial: "C",
    title: "International Client Director",
    bio: "Dedicated point of contact for international owners. Manages onboarding, KYC, settlement instructions, and ongoing reporting.",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: "#000000",
        padding: "clamp(80px, 10vw, 140px) 32px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: "72px" }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>THE TEAM</p>
          <h2 className="section-heading">
            Our{" "}
            <span style={{ color: "var(--gold)" }}>leadership</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="team-grid"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="team-card"
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "var(--bg-card)",
                  border: "2px solid var(--border-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  flexShrink: 0,
                  boxShadow: "0 0 20px rgba(201,168,76,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {member.initial}
                </span>
              </div>

              {/* Name + LinkedIn */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {member.name}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  style={{
                    color: "var(--text-2)",
                    transition: "color 0.2s",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Title */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                {member.title}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                  marginBottom: "16px",
                }}
              />

              {/* Bio */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .team-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 28px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          border-color: var(--border-gold);
          box-shadow: 0 0 32px rgba(201,168,76,0.08);
        }
        @media (max-width: 860px) {
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
