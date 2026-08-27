import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { readLog } from '../lib/notes';

export async function GET(context: APIContext) {
  const entries = await readLog();

  return rss({
    title: `${SITE.title} · notes`,
    description: SITE.description,
    site: context.site!,
    customData: `<language>en</language>`,
    items: entries.map(({ note }) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      categories: note.data.tags,
      link: `/notes/${note.id}/`,
    })),
  });
}
