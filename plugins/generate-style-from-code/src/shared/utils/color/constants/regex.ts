export const VALUE = /(?:\d+|\d*\.\d+)%?/;

export const SEP = /(?:\s*,\s*|\s+)/;

export const ALPHA_SEP = /\s*[,/]\s*/;

export const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;

export const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;

export const RGBA = new RegExp(
  `^rgba?\\(\\s*(${VALUE.source})(?:${SEP.source}(${VALUE.source}))(?:${SEP.source}(${VALUE.source}))(?:${ALPHA_SEP.source}(${VALUE.source}))?\\s*\\)$`,
);

export const HEX_VALUE = /^[a-f\d]{2}$/;

export const PERCENT_VALUE = /^(?:\d+|\d*\.\d+)%$/;
