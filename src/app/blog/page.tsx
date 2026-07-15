import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/BlogCard";

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
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
