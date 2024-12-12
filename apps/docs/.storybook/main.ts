import type { StorybookConfig } from '@storybook/react-vite';
import { managerHead, previewHead } from './head';

const storybookConfig: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
      builder: {
        viteConfigPath: 'vite.config.js',
      },
    },
  },
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
  managerHead,
  previewHead,
};

export default storybookConfig;
