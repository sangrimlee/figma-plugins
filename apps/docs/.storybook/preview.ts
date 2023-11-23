import './styles/colors.css';
import './styles/docs.css';

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { theme } from './theme';
import { withGlobalStyles, withLayout } from './decorators';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(?:background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components'],
      },
    },
    docs: {
      theme,
    },
    layout: 'fullscreen',
    viewport: {
      viewports: [
        {
          name: 'Figma Plugin',
          styles: {
            width: '384px',
            height: '432px',
          },
          type: 'desktop',
        },
      ],
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'figma-light',
        dark: 'figma-dark',
      },
      defaultTheme: 'light',
    }),
    withGlobalStyles,
    withLayout,
  ],
};

export default preview;
