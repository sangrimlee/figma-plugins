import { Button } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = ['sm', 'md', 'lg'] as const;
const variants = [
  'brand',
  'component',
  'danger',
  'success',
  'warning',
  'outline',
  'ghost',
] as const;

const meta = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    variant: {
      control: 'select',
      options: variants,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    size: 'md',
    variant: 'brand',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      {sizes.map((size) => (
        <Button {...args} key={size} size={size}>
          Button ({size})
        </Button>
      ))}
    </>
  ),
  args: Default.args,
};

export const Variants: Story = {
  render: (args) => (
    <>
      {variants.map((variant) => (
        <Button {...args} key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </>
  ),
  args: Default.args,
};
