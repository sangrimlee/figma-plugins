import type { GenerateFormState } from '@/shared/types';
import data from './data.json';
import { randomIndex, randomItem } from './utils/random';

function createContent(count: number, cb: () => string, joined = '') {
  return new Array(count).fill(undefined).map(cb).join(joined);
}

export function generateWord(source: string, count: number) {
  const words = source.split(/[^가-힣]?\s/);
  const startIndex = randomIndex(words.length - count);
  return words.slice(startIndex, startIndex + count).join(' ');
}

export function generateSentence(source: string, count: number) {
  const lines = source.split(/\n/);
  return createContent(count, () => randomItem(lines), ' ');
}

export function generatePragraph(source: string, count: number) {
  return createContent(count, () => generateSentence(source, 8), '\n\n');
}

export function generateContent({
  unit,
  count: countStr,
  source,
}: GenerateFormState) {
  const count = parseInt(countStr, 10);

  const dataSource = data[source];
  if (unit === 'word') {
    return generateWord(dataSource, count);
  }
  if (unit === 'sentence') {
    return generateSentence(dataSource, count);
  }
  return generatePragraph(dataSource, count);
}
