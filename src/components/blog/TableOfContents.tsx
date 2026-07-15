import type { TocEntry } from "@/lib/blog-toc";

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length === 0) return null;
  return (
    <nav className="article-toc">
      <p className="article-sidebar-label">On This Page</p>
      <ul>
        {toc.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>

      <style>{`
        .article-toc ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .article-toc a {
          font-size: 13px;
          color: rgba(245,240,232,0.55);
          text-decoration: none;
          line-height: 1.4;
        }
        .article-toc a:hover {
          color: var(--gold);
        }
        @media (max-width: 900px) {
          .article-toc {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
