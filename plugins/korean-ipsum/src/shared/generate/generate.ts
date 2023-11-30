import type {
  CharacterSize,
  GenerateFormState,
  GenerateSource,
} from '@/shared/types';
import data from './data.json';
import { randomIndex, randomItem } from './utils/random';
import { getCharacterWidth } from './utils/character';

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

export function generateByForm({ unit, count, source }: GenerateFormState) {
  const dataSource = data[source];
  if (unit === 'word') {
    return generateWord(dataSource, count);
  }
  if (unit === 'sentence') {
    return generateSentence(dataSource, count);
  }
  return generatePragraph(dataSource, count);
}

export function generateBySize(
  source: GenerateSource,
  width: number,
  height: number,
  characterSize: CharacterSize,
) {
  const dataSource = `${data[source].replace(/\n/g, ' ')} `;
  const maxLine = Math.floor(height / characterSize.kor.height);
  if (maxLine === 0) {
    return '';
  }
  let content = '';
  let currentIndex = 0;
  for (let line = 0; line < maxLine; line++) {
    let currentWidth = 0;
    while (
      currentWidth +
        getCharacterWidth(dataSource[currentIndex], characterSize) <
      width
    ) {
      const character = dataSource[currentIndex];
      content += character;
      currentWidth += getCharacterWidth(character, characterSize);
      currentIndex += 1;
      currentIndex %= dataSource.length;
    }
  }
  return content;
}
