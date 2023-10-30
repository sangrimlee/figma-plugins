export const transitions = {
  /* Timing Property */
  none: 'none',
  all: 'all',
  colors:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',

  /* Timing Duration */
  0: '0ms',
  50: '50ms',
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',

  /* Timing Function */
  linear: 'cubic-bezier(0, 0, 1, 1)',
  'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
  'ease-out': 'cubic-bezier(0.19, 0.91, 0.38, 1)',
  'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
};
