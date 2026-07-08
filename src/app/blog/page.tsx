import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
  title: "Market Insights — Viventia Realty Solutions",
  description:
    "UAE property market intelligence, investment guides, and real estate insights from Viventia Realty Solutions.",
};

export default function BlogIndexPage() {
  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
        fontFamily: "'Barlow', 'Segoe UI', system-ui, sans-serif",
        color: "#f5f0e8",
      }}
    >
      <style>{`
        .blog-back-link { color: rgba(245,240,232,0.55); text-decoration: none; transition: color 0.2s; }
        .blog-back-link:hover { color: #f5f0e8; }
        .blog-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 28px 24px; display: flex; flex-direction: column; gap: 12px; cursor: pointer; transition: border-color 0.2s ease, transform 0.2s ease; }
        .blog-card:hover { border-color: var(--border-gold); transform: translateY(-4px); }
      `}</style>

      {/* Top nav */}
      <div
        style={{
          padding: "24px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Link href="/" className="blog-back-link"
          style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.02em" }}
        >
          ← viventiarealty.com
        </Link>
      </div>

      {/* Header */}
      <div
        style={{
          padding: "clamp(60px, 8vw, 100px) 32px 48px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 16,
          }}
        >
          Market Intelligence
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700,
            color: "#f5f0e8",
            lineHeight: 1.08,
            marginBottom: 16,
          }}
        >
          UAE Property{" "}
          <span style={{ color: "var(--gold)" }}>Intelligence</span>
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(245,240,232,0.55)",
            maxWidth: 560,
            lineHeight: 1.65,
          }}
        >
          Market analysis, investment guides, and regulatory updates from
          Viventia&apos;s advisory team.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px clamp(80px, 10vw, 140px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="blog-card">
                {/* Category pill */}
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
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

                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#f5f0e8",
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
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

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 4,
                  }}
                >
                  <span style={{ fontSize: 12, color: "rgba(245,240,232,0.4)" }}>
                    {post.date}
                  </span>
                  <span style={{ color: "rgba(245,240,232,0.2)", fontSize: 12 }}>·</span>
                  <span style={{ fontSize: 12, color: "rgba(245,240,232,0.4)" }}>
                    {post.readTime}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--gold)",
                    marginTop: 4,
                    letterSpacing: "0.02em",
                  }}
                >
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
