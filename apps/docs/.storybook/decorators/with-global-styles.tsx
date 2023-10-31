import { globalStyles } from '@figma-plugins/ui';
import type { Decorator } from '@storybook/react';

export const withGlobalStyles: Decorator = (StoryFn) => {
  globalStyles();

  return <StoryFn />;
};
