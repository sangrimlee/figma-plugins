import './styles/colors.css';

import type { Preview } from '@storybook/react';
import { theme } from './theme';

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
  },
};

export default preview;
