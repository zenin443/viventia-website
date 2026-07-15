import type { BlogPost } from "@/lib/blog-data";
import { BrandScene } from "./BrandScene";

export function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <header style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
        <span className="article-pill article-pill-category">{post.category}</span>
        {post.tags.map((tag) => (
          <span key={tag} className="article-pill">
            {tag}
          </span>
        ))}
      </div>

      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1.12,
          marginBottom: 20,
          letterSpacing: "-0.01em",
        }}
      >
        {post.title}
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 28,
          fontSize: 13,
          color: "var(--text-2)",
        }}
      >
        <span>{post.author}</span>
        <span style={{ color: "var(--text-3)" }}>·</span>
        <span>{post.date}</span>
        <span style={{ color: "var(--text-3)" }}>·</span>
        <span>{post.readTime}</span>
      </div>

      <div className="article-scene">
        <BrandScene variant={post.image} />
      </div>

      <style>{`
        .article-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-2);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3px 10px;
        }
        .article-pill-category {
          color: var(--gold);
          background: var(--gold-dim);
          border-color: var(--border-gold);
        }
        .article-scene {
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-gold);
        }
        @media (max-width: 600px) {
          .article-scene { height: 140px; }
        }
      `}</style>
    </header>
  );
}
