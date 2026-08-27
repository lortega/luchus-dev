import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

/** A note with its folio: the position it holds in the log, counting from the first. */
export type LogEntry = {
  note: Note;
  folio: number;
};

/** Every published note, newest first, already foliated. */
export async function readLog(): Promise<LogEntry[]> {
  const notes = await getCollection('notes', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );

  return notes
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime())
    .map((note, i) => ({ note, folio: i + 1 }))
    .reverse();
}

export function folio(n: number): string {
  return String(n).padStart(3, '0');
}

const long = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const short = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: 'short',
  timeZone: 'UTC',
});

export const longDate = (d: Date) => long.format(d);
export const shortDate = (d: Date) => short.format(d);
export const year = (d: Date) => d.getUTCFullYear();
export const iso = (d: Date) => d.toISOString().slice(0, 10);

export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
