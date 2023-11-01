import { Box, colors } from '@figma-plugins/ui';
import type { Decorator } from '@storybook/react';

export const withLayout: Decorator = (StoryFn, context) => {
  const isStory = context.viewMode === 'story';

  return (
    <Box
      css={{
        height: isStory ? '100vh' : '$full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: '$400',
        backgroundColor: colors.bg.default,
      }}
    >
      <StoryFn />
    </Box>
  );
};
