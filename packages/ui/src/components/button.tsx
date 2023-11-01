import type { VariantProps } from '@stitches/react';
import { colors } from '@/vars';
import { styled } from '../stitches.config';

export const Button = styled('button', {
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '$none',

  fontSize: '$sm',
  fontWeight: '$medium',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-in-out',

  '&:disabled': {
    color: colors.text.ondisabled,
    backgroundColor: colors.bg.disabled.default,
    pointerEvents: 'none',
  },

  variants: {
    size: {
      sm: {
        height: '$800',
        padding: '$0 $300',
        borderRadius: '$lg',
      },
      md: {
        height: '$900',
        padding: '$0 $400',
        borderRadius: '$lg',
      },
      lg: {
        height: '$1000',
        padding: '$0 $500',
        borderRadius: '$lg',
      },
    },
    variant: {
      brand: {
        color: colors.text.onbrand.default,
        backgroundColor: colors.bg.brand.default,
        '&:hover': {
          backgroundColor: colors.bg.brand.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.brand.pressed,
        },
      },
      ghost: {
        color: colors.text.default,
        backgroundColor: colors.bg.default,
        '&:hover': {
          backgroundColor: colors.bg.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.pressed,
        },
      },
      outline: {
        color: colors.text.default,
        backgroundColor: colors.bg.default,
        borderWidth: '$1',
        borderColor: colors.border.default,
        '&:hover': {
          backgroundColor: colors.bg.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.pressed,
        },
      },
      component: {
        color: colors.text.oncomponent.default,
        backgroundColor: colors.bg.component.default,
        '&:hover': {
          backgroundColor: colors.bg.component.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.component.pressed,
        },
      },
      danger: {
        color: colors.text.ondanger.default,
        backgroundColor: colors.bg.danger.default,
        '&:hover': {
          backgroundColor: colors.bg.danger.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.danger.pressed,
        },
      },
      success: {
        color: colors.text.onsuccess.default,
        backgroundColor: colors.bg.success.default,
        '&:hover': {
          backgroundColor: colors.bg.success.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.success.pressed,
        },
      },
      warning: {
        color: colors.text.onwarning.default,
        backgroundColor: colors.bg.warning.default,
        '&:hover': {
          backgroundColor: colors.bg.warning.hover,
        },
        '&:active': {
          backgroundColor: colors.bg.warning.pressed,
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'brand',
  },
});

export type ButtonVariantProps = VariantProps<typeof Button>;
