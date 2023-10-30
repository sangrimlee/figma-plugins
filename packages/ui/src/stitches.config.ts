import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import {
  borderWidths,
  fontSizes,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
} from './tokens';

export const { styled, css, globalCss, keyframes, config } = createStitches({
  theme: {
    fonts,
    fontSizes,
    lineHeights,
    letterSpacings,
    borderWidths,
    radii,
    space,
    sizes,
    shadows,
    zIndices,
    transitions,
  },
});

export type CSS = Stitches.CSS<typeof config>;
