import { Box } from '@figma-plugins/ui';
import type { Decorator } from '@storybook/react';

export const withLayout: Decorator = (StoryFn, context) => {
  const isDocs = context.viewMode === 'docs';

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: '$400',
        height: isDocs ? '16rem' : '100vh',
      }}
    >
      <StoryFn />
    </Box>
  );
};
