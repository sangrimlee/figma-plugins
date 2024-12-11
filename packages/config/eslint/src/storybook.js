import storybookPlugin from 'eslint-plugin-storybook';

/** @type {Awaited<import('typescript-eslint').Config>} */
export const storybookConfig = [
  {
    ignores: ['!.storybook'],
  },
  ...storybookPlugin.configs['flat/recommended'],
];
