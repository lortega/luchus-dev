import type { APIRoute, GetStaticPaths } from 'astro';
import { SITE } from '../../consts';
import { readLog, folio, longDate } from '../../lib/notes';
import { renderCard, type Card } from '../../lib/og';

export const getStaticPaths = (async () => {
  const entries = await readLog();

  return [
    {
      params: { slug: 'sitio' },
      props: { title: SITE.tagline, footer: `${SITE.author} · seguridad y FinOps` },
    },
    ...entries.map(({ note, folio: n }) => ({
      params: { slug: `notas/${note.id}` },
      props: {
        title: note.data.title,
        footer: `${SITE.author} · #${folio(n)} · ${longDate(note.data.date)}`,
      },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute<Card> = async ({ props }) =>
  new Response(await renderCard(props), { headers: { 'Content-Type': 'image/png' } });
