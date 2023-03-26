import type { CodeLanguage, CodeStyle } from '@/shared/types';

import { CssLogoIcon, JsonLogoIcon, StitchesLogoIcon, TailwindCssLogoIcon } from '../components/icon';

export const CODE_LIST: ReadonlyArray<{
  style: CodeStyle;
  language: CodeLanguage;
  logo: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}> = [
  { style: 'css', language: 'css', logo: CssLogoIcon },
  { style: 'json', language: 'json', logo: JsonLogoIcon },
  { style: 'tailwindcss', language: 'javascript', logo: TailwindCssLogoIcon },
  { style: 'stitches', language: 'javascript', logo: StitchesLogoIcon },
] as const;

export const CODE_LANGUAGE_MAP: Record<CodeStyle, CodeLanguage> = {
  css: 'css',
  json: 'json',
  tailwindcss: 'javascript',
  stitches: 'javascript',
} as const;
