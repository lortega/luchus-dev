import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITIO } from '../consts';
import { leerRegistro } from '../lib/bitacora';

export async function GET(context: APIContext) {
  const registros = await leerRegistro();

  return rss({
    title: `${SITIO.titulo} · bitácora`,
    description: SITIO.descripcion,
    site: context.site!,
    customData: `<language>es-cl</language>`,
    items: registros.map(({ entrada }) => ({
      title: entrada.data.titulo,
      description: entrada.data.resumen,
      pubDate: entrada.data.fecha,
      categories: entrada.data.tags,
      link: `/bitacora/${entrada.id}/`,
    })),
  });
}
