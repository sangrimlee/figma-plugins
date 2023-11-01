import type { VariantProps } from '@stitches/react';
import { styled } from '@/stitches.config';

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    items: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      50: {
        gap: '$50',
      },
      100: {
        gap: '$100',
      },
      150: {
        gap: '$150',
      },
      200: {
        gap: '$200',
      },
      300: {
        gap: '$300',
      },
      350: {
        gap: '$350',
      },
      400: {
        gap: '$400',
      },
      500: {
        gap: '$500',
      },
      600: {
        gap: '$600',
      },
      700: {
        gap: '$700',
      },
      800: {
        gap: '$800',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    items: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});

export type FlexVariantProps = VariantProps<typeof Flex>;
