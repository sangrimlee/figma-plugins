import type { CharacterSize } from '@/shared/types';

export function getCharacterWidth(character: string, sizes: CharacterSize) {
  if (character === ' ') {
    return sizes.blank.width;
  }
  if (/[가-힣]/.test(character)) {
    return sizes.kor.width;
  }
  return sizes.sign.width;
}
