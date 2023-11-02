import type React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { styled } from '@/stitches.config';
import { animations, colors } from '@/vars';

export const ToastProvider = ToastPrimitives.Provider;

export const ToastViewport = styled(ToastPrimitives.Viewport, {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '$toast',
  maxHeight: '100vh',
  width: '$full',
  display: 'flex',
  flexDirection: 'column',
  padding: '$400',
});

export const Toast = styled(ToastPrimitives.Root, {
  position: 'relative',
  width: '$full',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  gap: '$200',
  overflow: 'hidden',
  borderRadius: '$lg',
  borderWidth: '$1',
  padding: '$400',
  paddingRight: '$800',
  boxShadow: '$lg',
  transitionProperty: '$transitions$all',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  pointerEvents: 'auto',

  '&[data-state="open"]': {
    animation: `${animations.toastSlideIn.name} 150ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${animations.toastSlideOut.name} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateY(var(--radix-toast-swipe-move-y))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateY(0)',
  },
  '&[data-swipe="end"]': {
    animation: `${animations.toastSwipeOut.name} 100ms ease-out`,
  },

  variants: {
    variant: {
      default: {
        color: colors.text.default,
        borderColor: colors.border.default,
        backgroundColor: colors.bg.default,
      },
      danger: {
        color: colors.text.ondanger.default,
        borderColor: colors.border.ondanger.default,
        backgroundColor: colors.bg.danger.default,
      },
      success: {
        color: colors.text.onsuccess.default,
        borderColor: colors.border.onsuccess.default,
        backgroundColor: colors.bg.success.default,
      },
      warning: {
        color: colors.text.onwarning.default,
        borderColor: colors.border.onwarning.default,
        backgroundColor: colors.bg.warning.default,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ToastVariant = 'default' | 'danger' | 'success' | 'warning';

export type ToastProps = Omit<
  React.ComponentPropsWithoutRef<typeof Toast>,
  'variant'
> & {
  variant?: ToastVariant;
};

export const ToastClose = styled(ToastPrimitives.Close, {
  position: 'absolute',
  top: '$100',
  right: '$100',
  padding: '$100',
  borderRadius: '$lg',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-in',

  variants: {
    variant: {
      default: {
        color: colors.icon.secondary.default,
        '&:hover': {
          backgroundColor: colors.bg.hover,
        },
      },
      danger: {
        color: colors.icon.ondanger.secondary,
        '&:hover': {
          backgroundColor: colors.bg.danger.hover,
        },
      },
      success: {
        color: colors.icon.onsuccess.secondary,
        '&:hover': {
          backgroundColor: colors.bg.success.hover,
        },
      },
      warning: {
        color: colors.icon.onwarning.secondary,
        '&:hover': {
          backgroundColor: colors.bg.warning.hover,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const ToastTitle = styled(ToastPrimitives.Title, {
  fontSize: '$sm',
  fontWeight: '$semibold',
});

export const ToastDescription = styled(ToastPrimitives.Title, {
  fontSize: '$sm',
  fontWeight: '$regular',
  variants: {
    variant: {
      default: {
        color: colors.icon.secondary.default,
      },
      danger: {
        color: colors.icon.ondanger.secondary,
      },
      success: {
        color: colors.icon.onsuccess.secondary,
      },
      warning: {
        color: colors.icon.onwarning.secondary,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
