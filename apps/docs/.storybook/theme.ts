import { create } from '@storybook/theming/create';

export const theme = create({
  base: 'light',

  brandUrl: './',
  brandTarget: '_self',

  fontBase:
    "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  fontCode:
    "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",

  colorPrimary: '#0d99ff',
  colorSecondary: '#0d99ff',

  appBg: '#f5f5f5',
  appContentBg: 'rgba(255, 255, 255, 1)',
  appBorderColor: '#e6e6e6',
  appBorderRadius: 6,

  textColor: 'rgba(0, 0, 0, 0.9)',
  textInverseColor: 'rgba(255, 255, 255, 0.9)',

  barBg: 'rgba(255, 255, 255, 1)',
  barTextColor: 'rgba(0, 0, 0, 0.5)',
  barSelectedColor: '#007be5',

  inputBg: 'transparent',
  inputBorder: '#e6e6e6',
  inputTextColor: 'rgba(0, 0, 0, 0.9)',
  inputBorderRadius: 6,
});
