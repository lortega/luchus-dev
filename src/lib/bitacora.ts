import { getCollection, type CollectionEntry } from 'astro:content';

export type EntradaBitacora = CollectionEntry<'bitacora'>;

/** Una entrada con su folio: el número que ocupa en el registro, contando desde la primera. */
export type Registro = {
  entrada: EntradaBitacora;
  folio: number;
};

/** Todas las entradas publicadas, de la más nueva a la más antigua, ya foliadas. */
export async function leerRegistro(): Promise<Registro[]> {
  const entradas = await getCollection('bitacora', ({ data }) =>
    import.meta.env.PROD ? !data.borrador : true,
  );

  return entradas
    .sort((a, b) => a.data.fecha.getTime() - b.data.fecha.getTime())
    .map((entrada, i) => ({ entrada, folio: i + 1 }))
    .reverse();
}

export function folio(n: number): string {
  return String(n).padStart(3, '0');
}

const largo = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const corto = new Intl.DateTimeFormat('es-CL', {
  day: '2-digit',
  month: 'short',
  timeZone: 'UTC',
});

/** "24 ago" — es-CL une día y mes con guion; acá los separo con espacio. */
function corta(d: Date): string {
  const partes = corto.formatToParts(d);
  const dia = partes.find((p) => p.type === 'day')?.value ?? '';
  const mes = (partes.find((p) => p.type === 'month')?.value ?? '').replace('.', '');
  return `${dia} ${mes}`;
}

export const fechaLarga = (d: Date) => largo.format(d);
export const fechaCorta = corta;
export const anio = (d: Date) => d.getUTCFullYear();
export const iso = (d: Date) => d.toISOString().slice(0, 10);

export function minutosDeLectura(texto: string): number {
  const palabras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palabras / 200));
}
