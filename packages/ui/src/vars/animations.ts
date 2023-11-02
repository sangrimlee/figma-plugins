import { keyframes } from '@/stitches.config';

export const animations = {
  bounce: keyframes({
    'from, 65%, 85%': {
      transform: 'scale(1)',
    },
    '75%': {
      transform: 'scale(0.85)',
    },
    '82.5%': {
      transform: 'scale(1.05)',
    },
  }),

  fadeIn: keyframes({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }),

  fadeOut: keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  }),

  pulse: keyframes({
    'from, 75%': {
      transform: 'scale(0.85)',
      opacity: 1,
    },
    to: {
      transform: 'scale(2.5)',
      opacity: 0,
    },
  }),

  spin: keyframes({
    to: { transform: 'rotate(1turn)' },
  }),

  appearFromBottom: keyframes({
    from: {
      transform: 'translateY(0.25rem)',
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  }),

  appearFromTop: keyframes({
    from: {
      transform: 'translateY(-0.25rem)',
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  }),

  appearFromLeft: keyframes({
    from: {
      transform: 'translateX(0.25rem)',
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  }),

  appearFromRight: keyframes({
    from: {
      transform: 'translateX(-0.25rem)',
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  }),

  /* For Toast */
  toastSlideIn: keyframes({
    from: {
      transform: 'translateY(calc(-100% - 1rem))',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  }),
  toastSlideOut: keyframes({
    from: {
      transform: 'translateX(0)',
      opacity: 1,
    },
    to: {
      transform: 'translateY(calc(-100% - 1rem))',
      opacity: 0,
    },
  }),
  toastSwipeOut: keyframes({
    from: {
      transform: 'translateY(var(--radix-toast-swipe-end-x))',
    },
    to: {
      transform: 'translateY(calc(-100% - 1rem))',
    },
  }),
};
