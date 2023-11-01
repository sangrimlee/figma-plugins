import { Flex, colors } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const direction = ['row', 'column', 'rowReverse', 'columnReverse'] as const;
const items = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
const justify = ['start', 'center', 'end', 'between'] as const;
const wrap = ['noWrap', 'wrap', 'wrapReverse'] as const;
const gap = [50, 100, 150, 200, 300, 350, 400, 500, 600, 700, 800] as const;

const meta = {
  title: 'components/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: 'select',
      options: direction,
    },
    items: {
      control: 'select',
      options: items,
    },
    justify: {
      control: 'select',
      options: justify,
    },
    wrap: {
      control: 'select',
      options: wrap,
    },
    gap: {
      control: 'select',
      options: gap,
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const flexItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

export const Default: Story = {
  render: (args) => (
    <Flex
      css={{
        width: '65ch',
        height: '16rem',
        backgroundImage:
          'linear-gradient(135deg,#bde3ff 10%,#0000 0,#0000 50%,#bde3ff 0,#bde3ff 60%,#0000 0,#0000)',
        backgroundSize: '1rem 1rem',
      }}
      {...args}
    >
      {flexItems.map((item) => (
        <Flex
          css={{
            width: '$3200',
            height: '$1600',
            fontSize: '$sm',
            fontWeight: '$medium',
            color: colors.text.oncomponent.default,
            backgroundColor: colors.bg.component.default,
            borderRadius: '$xl',
          }}
          items="center"
          justify="center"
          key={item}
        >
          {item}
        </Flex>
      ))}
    </Flex>
  ),
  args: {
    direction: 'row',
    items: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
};
