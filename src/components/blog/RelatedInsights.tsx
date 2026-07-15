import type { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";

export function RelatedInsights({ posts, currentSlug }: { posts: BlogPost[]; currentSlug: string }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section style={{ marginTop: 88 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 20,
        }}
      >
        Related Insights
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {related.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
