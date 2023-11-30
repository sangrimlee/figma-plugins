import type { CharacterSize, GenerateMethod } from '@/shared/types';
import { loadFont } from './load-font';

export async function changeCharacters(
  textNode: TextNode,
  characters: string,
  method: GenerateMethod = 'replace',
  delimiter = ' ',
) {
  await loadFont(textNode);
  if (method === 'replace' || textNode.characters.length === 0) {
    textNode.characters = characters;
  } else {
    textNode.characters = `${textNode.characters}${delimiter}${characters}`;
  }
}

export async function getCharacterSizes(
  textNode: TextNode,
): Promise<CharacterSize> {
  const clone = textNode.clone();
  await loadFont(clone);
  clone.textAutoResize = 'WIDTH_AND_HEIGHT';
  clone.characters = '가';
  const kor = { height: clone.height, width: clone.width };
  clone.characters = '.';
  const sign = { height: clone.height, width: clone.width };
  clone.characters = ' .';
  const blank = { height: clone.height, width: clone.width - sign.width };
  clone.remove();
  return {
    kor,
    sign,
    blank,
  };
}
