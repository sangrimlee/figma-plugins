import NAMED_COLORS from './constants/named-colors';
import * as REGEX from './constants/regex';
import { parseAlpha, parseHEXValue, parseRGBValue, shortHEXToLongHEX } from './utils';

export function parseHEX(color: string): RGBA | null {
  const hex = shortHEXToLongHEX(color).match(REGEX.HEX);

  if (hex === null) {
    return null;
  }

  return {
    r: parseHEXValue(hex[1]),
    g: parseHEXValue(hex[2]),
    b: parseHEXValue(hex[3]),
    a: hex[4] ? parseHEXValue(hex[4]) : 1,
  };
}

export function parseRGBA(color: string): RGBA | null {
  const rgba = color.match(REGEX.RGBA);

  if (rgba === null) {
    return null;
  }

  return {
    r: parseRGBValue(rgba[1]),
    g: parseRGBValue(rgba[2]),
    b: parseRGBValue(rgba[3]),
    a: rgba[4] ? parseAlpha(rgba[4]) : 1,
  };
}

export function parseNamedColor(color: string): RGBA | null {
  const namedColor = NAMED_COLORS[color.toLowerCase()];
  if (!namedColor) {
    return null;
  }

  const [r, g, b, a] = namedColor;
  return {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    a,
  };
}

export function parseColor(color: string): RGBA | null {
  return parseNamedColor(color) ?? parseHEX(color) ?? parseRGBA(color);
}
