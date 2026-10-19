import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

/** The card WhatsApp, LinkedIn and friends show when a link is shared. */
export type Card = {
  title: string;
  footer: string;
};

const WIDTH = 1200;
const HEIGHT = 630;

// Same tokens as the light theme in global.css.
const PAPER = '#eff2ec';
const INK = '#171c19';
const MUTED = '#5e6760';
const ACCENT = '#8c2f39';

// Satori reads woff but not woff2, so the fonts come from @fontsource
// instead of the ones Astro downloads for the site.
const font = (file: string) =>
  readFile(join(process.cwd(), 'node_modules/@fontsource', file));

const fonts = Promise.all([
  font('bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff'),
  font('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'),
]).then(([display, mono]) => [
  { name: 'Display', data: display, weight: 800 as const, style: 'normal' as const },
  { name: 'Mono', data: mono, weight: 400 as const, style: 'normal' as const },
]);

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export async function renderCard({ title, footer }: Card): Promise<Uint8Array<ArrayBuffer>> {
  const titleSize = title.length > 60 ? 56 : title.length > 32 ? 68 : 76;

  const svg = await satori(
    el(
      'div',
      {
        width: WIDTH,
        height: HEIGHT,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: PAPER,
        borderTop: `14px solid ${ACCENT}`,
      },
      [
        el('div', { display: 'flex', fontFamily: 'Display', fontSize: 40, color: INK }, [
          el('span', {}, 'luchus'),
          el('span', { color: ACCENT }, '.dev'),
        ]),
        el(
          'div',
          {
            display: 'flex',
            flexWrap: 'wrap',
            width: WIDTH - 160,
            fontFamily: 'Display',
            fontSize: titleSize,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: INK,
          },
          title,
        ),
        el('div', { display: 'flex', fontFamily: 'Mono', fontSize: 26, color: MUTED }, footer),
      ],
    ) as Parameters<typeof satori>[0],
    { width: WIDTH, height: HEIGHT, fonts: await fonts },
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
  return new Uint8Array(png);
}
