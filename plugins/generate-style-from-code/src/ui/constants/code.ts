import type { CodeFormat, CodeLanguage } from '@/shared/types';

import { CssLogoIcon, JsonLogoIcon, StitchesLogoIcon, TailwindCssLogoIcon } from '../components/icon';

export const CODE_LIST: ReadonlyArray<{
  format: CodeFormat;
  language: CodeLanguage;
  logo: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}> = [
  { format: 'css', language: 'css', logo: CssLogoIcon },
  { format: 'json', language: 'json', logo: JsonLogoIcon },
  { format: 'tailwindcss', language: 'javascript', logo: TailwindCssLogoIcon },
  { format: 'stitches', language: 'javascript', logo: StitchesLogoIcon },
] as const;

export const CODE_LANGUAGE_MAP: Record<CodeFormat, CodeLanguage> = {
  css: 'css',
  json: 'json',
  tailwindcss: 'javascript',
  stitches: 'javascript',
} as const;
