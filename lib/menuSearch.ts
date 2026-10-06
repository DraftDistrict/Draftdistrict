import type { MenuCategory, MenuItem } from "@/data/site";

/** Lower-case and strip accents so "jalapeno" finds "Jalapeño". */
export const normalize = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

const tokenize = (s: string) => s.split(/[^a-z0-9]+/).filter(Boolean);

export interface SearchDoc {
  text: string;
  words: string[];
}

export function searchDoc(item: MenuItem, category: MenuCategory): SearchDoc {
  const text = normalize(
    [item.name, item.desc, category.label, ...(item.choices?.options ?? []), ...(item.keywords ?? [])].join(" ")
  );
  return { text, words: tokenize(text) };
}

export const queryWords = (query: string) => tokenize(normalize(query));

/** Edit distance counting a swap of two neighbouring letters as one typo ("chikcen" → "chicken"). */
function typoDistance(a: string, b: string) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array<number>(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
}

/** Short words must be spelled right; longer words may carry one or two typos. */
const allowedTypos = (word: string) => (word.length <= 3 ? 0 : word.length <= 6 ? 1 : 2);

/** Does a query word closely match any word in the dish — whole word, or the start of a longer one? */
function closeMatch(q: string, words: string[]) {
  const max = allowedTypos(q);
  if (max === 0) return words.some((w) => w.startsWith(q));
  return words.some(
    (w) =>
      w.startsWith(q) ||
      typoDistance(q, w) <= max ||
      (w.length > q.length && typoDistance(q, w.slice(0, q.length)) <= max)
  );
}

export const exactMatch = (doc: SearchDoc, words: string[]) => words.every((q) => doc.text.includes(q));
export const fuzzyMatch = (doc: SearchDoc, words: string[]) => words.every((q) => doc.text.includes(q) || closeMatch(q, doc.words));
