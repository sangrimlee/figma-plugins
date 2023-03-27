import type { Theme } from '@/shared/types';

import * as REGEX from './constants/regex';

export function singularForm(str: string) {
  return str.replace(REGEX.PRULAL, '');
}

export function kebabCaseToCamelCase(str: string) {
  return str
    .split(/-+/)
    .reduce(
      (prev, curr, i) => prev + (i === 0 ? curr : `${curr.charAt(0).toUpperCase()}${curr.substring(1).toLowerCase()}`),
      '',
    );
}

export function normalizeKey(key: string) {
  return kebabCaseToCamelCase(singularForm(key).toLowerCase().replace(REGEX.UNIT, '-$1'));
}

export function isValidKey(key: string): keyof Theme | null {
  if (['color', 'fontSize', 'fontWeight', 'lineHeight'].includes(key)) {
    return key as keyof Theme;
  }
  return null;
}

export function parseObjectKey(key: string) {
  if (!REGEX.OBJECT_KEY.test(key)) {
    return null;
  }
  const normalizedKey = normalizeKey(key);
  return isValidKey(normalizedKey);
}
