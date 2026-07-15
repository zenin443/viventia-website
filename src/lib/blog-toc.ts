export interface TocEntry {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Scans an article's raw HTML content for existing <h2> tags, assigns each
 * a stable, unique id (for in-page anchor links), and returns both the
 * updated HTML and the extracted table-of-contents list.
 *
 * No new content field is required for this — it works entirely from the
 * <h2> tags that already exist in every post's `content` string.
 */
export function prepareArticleContent(html: string): {
  html: string;
  toc: TocEntry[];
} {
  const toc: TocEntry[] = [];
  const seen = new Map<string, number>();

  const withIds = html.replace(/<h2>(.*?)<\/h2>/g, (_match, rawText: string) => {
    const text = rawText.trim();
    let id = slugify(text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;
    toc.push({ id, text });
    return `<h2 id="${id}">${rawText}</h2>`;
  });

  return { html: withIds, toc };
}
