import { Flex, Text, ScrollArea, Box } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Scroll Area',
  component: ScrollArea,
  argTypes: {
    type: {
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical', 'both'],
    },
    scrollHideDelay: {
      control: 'number',
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const TAGS = Array.from({ length: 32 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export const Default: Story = {
  render: (args) => (
    <ScrollArea
      css={{
        height: '10rem',
        width: '12rem',
        borderRadius: '$lg',
        borderWidth: '$1',
      }}
      {...args}
    >
      <Box css={{ padding: '$250 $400' }}>
        <Text as="h4" size="md" weight="semibold">
          Tags
        </Text>
        {TAGS.map((tag) => (
          <Text
            css={{
              marginTop: '$250',
              paddingTop: '$250',
              borderTopWidth: '$1',
            }}
            key={tag}
            size="sm"
            variant="secondary"
          >
            {tag}
          </Text>
        ))}
      </Box>
    </ScrollArea>
  ),
  args: {
    type: 'hover',
    orientation: 'vertical',
    scrollHideDelay: 600,
  },
};

interface Artwork {
  artist: string;
  art: string;
}

const ART_WORKS: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

export const HorizontalScroll: Story = {
  render: (args) => (
    <ScrollArea
      {...args}
      css={{
        width: '24rem',
        height: '14rem',
        borderWidth: '$1',
        borderRadius: '$lg',
      }}
      orientation="horizontal"
    >
      <Flex css={{ padding: '$400' }} gap="400" items="center" wrap="noWrap">
        {ART_WORKS.map((artwork) => (
          <Box as="figure" css={{ flexShrink: 0 }} key={artwork.artist}>
            <Box
              alt={`Photo by ${artwork.artist}`}
              as="img"
              css={{
                width: '18rem',
                aspectRatio: '16/9',
                objectFit: 'cover',
                borderRadius: '$lg',
                marginBottom: '$200',
              }}
              src={artwork.art}
            />
            <Text as="figcaption" size="sm" variant="secondary">
              Photo by{' '}
              <Text as="span" size="sm" weight="semibold">
                {artwork.artist}
              </Text>
            </Text>
          </Box>
        ))}
      </Flex>
    </ScrollArea>
  ),
  args: Default.args,
};
