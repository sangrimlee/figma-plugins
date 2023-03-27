import type { NestedObject } from '@/shared/types';

import * as REGEX from './constants/regex';

export function flatten(obj: NestedObject, delimiter = '-') {
  const flattenObj: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'string') {
      flattenObj[key] = value;
      return;
    }
    Object.entries(flatten(value, delimiter)).forEach(([nestedKey, nestedValue]) => {
      const joinedKey = REGEX.DEFAULT_KEY.test(nestedKey) ? key : [key, nestedKey].join(delimiter);
      flattenObj[joinedKey] = nestedValue;
    });
  });

  return flattenObj;
}
