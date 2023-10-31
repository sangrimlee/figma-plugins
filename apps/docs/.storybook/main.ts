import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const storybookConfig: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  staticDirs: ['../public'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen',
  },
  viteFinal(config) {
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 2048,
      },
    });
  },
};

export default storybookConfig;
