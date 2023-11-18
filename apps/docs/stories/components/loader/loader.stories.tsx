import { Loader } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Loader',
  component: Loader,
  argTypes: {
    animate: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Loader {...args} />,
  args: {
    animate: false,
  },
};
