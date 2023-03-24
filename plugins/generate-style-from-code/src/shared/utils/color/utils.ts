import * as REGEX from './constants/regex';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const parsePercentage = (percentage: string) => clamp(parseFloat(percentage), 0, 100) / 100;

export const parseAlpha = (alpha: string) =>
  clamp(alpha.endsWith('%') ? parsePercentage(alpha) : parseFloat(alpha), 0, 1);

export const parseHEXValue = (value: string) => parseInt(value, 16) / 255;

export const parseRGBValue = (value: string) =>
  clamp(value.endsWith('%') ? parsePercentage(value) : parseFloat(value) / 255, 0, 255);

export const shortHEXToLongHEX = (hex: string) =>
  hex.replace(REGEX.SHORT_HEX, (_, r: string, g: string, b: string, a: string) =>
    ['#', r, r, g, g, b, b, a ? a + a : ''].join(''),
  );
