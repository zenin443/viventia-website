import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { BrandScene } from "./BrandScene";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div className="blog-card">
        <div style={{ height: 120, borderRadius: 8, overflow: "hidden", marginBottom: 4 }}>
          <BrandScene variant={post.image} />
        </div>

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
            color: "var(--text)",
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
            color: "var(--text-2)",
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

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: "var(--text-2)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "2px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>{post.date}</span>
          <span style={{ color: "var(--text-3)", fontSize: 12 }}>·</span>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>{post.readTime}</span>
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

      <style>{`
        .blog-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .blog-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }
      `}</style>
    </Link>
  );
}
