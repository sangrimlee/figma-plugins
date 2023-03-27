import type { NestedObject, Theme } from '@/shared/types';

import * as REGEX from './constants/regex';
import { flatten } from './flatten';
import { parseObjectKey } from './key';

export function parseJson(code: string) {
  const obj = JSON.parse(code) as NestedObject;

  const theme: Theme = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!REGEX.OBJECT_KEY.test(key) || typeof value === 'string') {
      return;
    }
    const parsedKey = parseObjectKey(key);
    if (parsedKey === null) {
      return;
    }
    theme[parsedKey] = {
      ...(theme[parsedKey] || {}),
      ...flatten(value),
    };
  });

  return theme;
}
