export const PRULAL = /s$/i;

export const KEY = /(?:color|font-?size|font-?weight|line-?height)s?/;

export const DEFAULT_KEY = /^default$/i;

export const OBJECT_KEY = new RegExp(`^(?:${KEY.source})$`, 'i');

export const CSS_VARIABLE_KEY = new RegExp(`^--(?:${KEY.source})-([a-z0-9-]+)$`, 'i');

export const UNIT = /(size|weight|height)/;
