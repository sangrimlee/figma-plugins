import { Slider } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Slider',
  component: Slider,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Slider
      css={{ width: '50%' }}
      defaultValue={[50]}
      max={100}
      step={1}
      {...args}
    />
  ),
  args: {
    disabled: false,
    min: 1,
    max: 10,
    step: 1,
    defaultValue: [5],
  },
};
