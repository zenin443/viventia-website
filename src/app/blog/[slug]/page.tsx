import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Viventia Realty Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
        fontFamily: "'Barlow', 'Segoe UI', system-ui, sans-serif",
        color: "#f5f0e8",
      }}
    >
      {/* Top nav */}
      <div
        style={{
          padding: "24px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Link
          href="/blog"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(245,240,232,0.55)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          ← All Insights
        </Link>
      </div>

      {/* Article */}
      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(48px, 7vw, 88px) 32px clamp(80px, 10vw, 140px)",
        }}
      >
        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              display: "inline-block",
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
          <span style={{ fontSize: 12, color: "rgba(245,240,232,0.4)" }}>
            {post.date}
          </span>
          <span style={{ color: "rgba(245,240,232,0.2)", fontSize: 12 }}>·</span>
          <span style={{ fontSize: 12, color: "rgba(245,240,232,0.4)" }}>
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#f5f0e8",
            lineHeight: 1.12,
            marginBottom: 48,
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, var(--gold) 0%, rgba(201,168,76,0) 100%)",
            marginBottom: 48,
            opacity: 0.35,
          }}
        />

        {/* Content prose */}
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={
            {
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.82)",
              "--prose-heading": "var(--gold)",
            } as React.CSSProperties
          }
          className="blog-prose"
        />

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 72,
            padding: "40px 36px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-gold)",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 12,
            }}
          >
            Ready to Invest
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            Ready to invest in UAE property?
          </p>
          <p
            style={{
              fontSize: 14,
              color: "rgba(245,240,232,0.55)",
              marginBottom: 28,
            }}
          >
            Start your onboarding with Viventia Realty Solutions today.
          </p>
          <Link
            href="/onboarding"
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#000000",
              background: "var(--gold)",
              padding: "13px 32px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Start Onboarding
          </Link>
        </div>
      </article>

      <style>{`
        .blog-prose h2 {
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 700;
          color: #C9A84C;
          margin: 2em 0 0.6em;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .blog-prose h3 {
          font-size: 18px;
          font-weight: 600;
          color: #C9A84C;
          margin: 1.6em 0 0.5em;
        }
        .blog-prose p {
          margin: 0 0 1.4em;
        }
        .blog-prose p:last-child {
          margin-bottom: 0;
        }
        .blog-prose strong {
          color: #f5f0e8;
          font-weight: 600;
        }
        .blog-prose a {
          color: #C9A84C;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-prose ul, .blog-prose ol {
          padding-left: 1.5em;
          margin: 0 0 1.4em;
        }
        .blog-prose li {
          margin-bottom: 0.4em;
        }
      `}</style>
    </main>
  );
}
