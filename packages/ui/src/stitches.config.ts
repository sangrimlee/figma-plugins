import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  borderWidths,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
  transitions,
} from './tokens';

export const { styled, css, globalCss, keyframes, config } = createStitches({
  theme: {
    fonts,
    fontSizes,
    fontWeights,
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
