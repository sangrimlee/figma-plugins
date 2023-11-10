import type { VariantProps } from '@stitches/react';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

export const Text = styled('p', {
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$400',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$500',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$600',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$600',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$700',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$800',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$1000',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$1200',
      },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    variant: {
      default: {
        color: colors.text.default,
      },
      secondary: {
        color: colors.text.secondary.default,
      },
      tertiary: {
        color: colors.text.tertiary.default,
      },
      brand: {
        color: colors.text.brand.default,
      },
      component: {
        color: colors.text.component.default,
      },
      danger: {
        color: colors.text.danger.default,
      },
      success: {
        color: colors.text.success.default,
      },
      warning: {
        color: colors.text.warning.default,
      },
      disabled: {
        color: colors.text.disabled,
      },
      onbrand: {
        color: colors.text.onbrand.default,
      },
      oncomponent: {
        color: colors.text.oncomponent.default,
      },
      ondanger: {
        color: colors.text.ondanger.default,
      },
      onsuccess: {
        color: colors.text.onsuccess.default,
      },
      onwarning: {
        color: colors.text.onwarning.default,
      },
    },
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
      justify: {
        textAlign: 'justify',
      },
    },
    decoration: {
      underline: {
        textDecoration: 'underline',
      },
      'line-through': {
        textDecoration: 'line-through',
      },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    breakWord: {
      true: {
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
      },
      false: {
        wordBreak: 'break-all',
        overflowWrap: 'normal',
      },
    },
    lineClamp: {
      1: {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '1',
      },
      2: {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '2',
      },
      3: {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '3',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'regular',
    variant: 'default',
    breakWord: true,
  },
});

export type TextVariantProps = VariantProps<typeof Text>;
