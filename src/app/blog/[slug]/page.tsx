import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { HighlightCard } from "@/components/blog/HighlightCard";
import { RelatedInsights } from "@/components/blog/RelatedInsights";
import { prepareArticleContent } from "@/lib/blog-toc";

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

  const { html, toc } = prepareArticleContent(post.content);
  const hasSidebar = toc.length > 0 || post.highlights.length > 0;

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
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(48px, 7vw, 88px) 32px clamp(80px, 10vw, 140px)",
        }}
      >
        <ArticleHero post={post} />

        <div className={`article-body-grid${hasSidebar ? "" : " article-body-grid--no-sidebar"}`}>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={
              {
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
              } as React.CSSProperties
            }
            className="blog-prose"
          />

          {hasSidebar && (
            <aside className="article-sidebar">
              <TableOfContents toc={toc} />

              {post.highlights.length > 0 && (
                <div className="article-highlights">
                  <p className="article-sidebar-label">Key Figures</p>
                  <div className="article-highlights-list">
                    {post.highlights.map((h) => (
                      <HighlightCard key={h.label} label={h.label} value={h.value} />
                    ))}
                  </div>
                </div>
              )}
            </aside>
          )}
        </div>

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

        <RelatedInsights posts={blogPosts} currentSlug={post.slug} />
      </article>

      <style>{`
        .article-body-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 56px;
          align-items: start;
        }
        .article-body-grid--no-sidebar {
          grid-template-columns: 1fr;
        }
        .article-sidebar {
          position: sticky;
          top: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .article-sidebar-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.55);
          margin-bottom: 12px;
        }
        .article-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 900px) {
          .article-body-grid {
            grid-template-columns: minmax(0, 1fr);
          }
          .article-sidebar {
            position: static;
            order: -1;
          }
          .article-highlights-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .article-highlights-list > div {
            min-width: 160px;
            flex: none;
          }
        }

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
        .blog-prose blockquote {
          margin: 2em 0;
          padding: 20px 24px;
          border-left: 3px solid var(--gold);
          background: var(--bg-card);
          font-size: 18px;
          font-style: italic;
          color: #f5f0e8;
        }
      `}</style>
    </main>
  );
}
