"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export default function BlogPreview() {
  return (
    <section
      id="blog"
      style={{
        background: "#000000",
        padding: "clamp(80px, 10vw, 140px) 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 16,
          }}
        >
          Market Intelligence
        </motion.p>

        {/* Headline */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#f5f0e8",
            marginBottom: 56,
            lineHeight: 1.1,
          }}
        >
          Latest{" "}
          <span style={{ color: "var(--gold)" }}>Insights</span>
        </motion.h2>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              custom={i}
              variants={cardVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "28px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    cursor: "pointer",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--border-gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--border)";
                  }}
                >
                  {/* Category pill */}
                  <span
                    style={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid var(--border-gold)",
                      borderRadius: 4,
                      padding: "3px 10px",
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.55)",
                      margin: 0,
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: "rgba(245,240,232,0.4)",
                      }}
                    >
                      {post.date}
                    </span>
                    <span style={{ color: "rgba(245,240,232,0.2)", fontSize: 12 }}>
                      ·
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: "rgba(245,240,232,0.4)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  {/* CTA */}
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--gold)",
                      marginTop: 4,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Read Article →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#000000",
              background: "var(--gold)",
              padding: "14px 36px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--gold-light)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            View All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
