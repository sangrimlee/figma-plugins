import { Flex, Text } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
const weights = ['regular', 'medium', 'semibold', 'bold'] as const;
const variants = [
  'default',
  'secondary',
  'tertiary',
  'brand',
  'component',
  'danger',
  'success',
  'warning',
  'disabled',
  'onbrand',
  'oncomponent',
  'ondanger',
  'onsuccess',
  'onwarning',
] as const;
const aligns = ['start', 'center', 'end', 'justify'] as const;
const decorations = ['underline', 'line-through'] as const;
const lineClamps = ['1', '2', '3'] as const;

const meta = {
  title: 'components/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    weight: {
      control: 'select',
      options: weights,
    },
    variant: {
      control: 'select',
      options: variants,
    },
    align: {
      control: 'select',
      options: aligns,
    },
    decoration: {
      control: 'select',
      options: decorations,
    },
    truncate: {
      control: 'boolean',
    },
    breakWord: {
      control: 'boolean',
    },
    lineClamp: {
      control: 'select',
      options: lineClamps,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Text {...args} css={{ width: '24rem' }}>
      Plugins are programs or applications created by the Community that extend
      the functionality of Figma&apos;s editors. Plugins run in files, perform
      one or more user actions, and allow users to customize their experience or
      create more efficient workflows.
    </Text>
  ),
  args: {
    size: 'md',
    weight: 'regular',
    variant: 'default',
    align: 'start',
    truncate: false,
    breakWord: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Flex direction="column" gap="400">
      {sizes.map((size) => (
        <Text {...args} key={size} size={size}>
          Figma Plugin ({size})
        </Text>
      ))}
    </Flex>
  ),
  args: Default.args,
};

export const Weights: Story = {
  render: (args) => (
    <Flex direction="column" gap="400">
      {weights.map((weight) => (
        <Text {...args} key={weight} weight={weight}>
          Figma Plugin ({weight})
        </Text>
      ))}
    </Flex>
  ),
  args: Default.args,
};

export const Variants: Story = {
  render: (args) => (
    <>
      {variants.map((variant) => (
        <Text {...args} key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
    </>
  ),
  args: Default.args,
};
