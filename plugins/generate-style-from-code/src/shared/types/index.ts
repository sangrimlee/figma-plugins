export type CodeFormat = 'css' | 'json' | 'tailwindcss' | 'stitches';
export type CodeLanguage = 'css' | 'json' | 'javascript';

export type NestedObject = {
  [key: string]: string | NestedObject;
};

export type Theme = {
  color?: { [key: string]: string };
  fontSize?: { [key: string]: string };
  fontWeight?: { [key: string]: string };
  lineHeight?: { [key: string]: string };
};
