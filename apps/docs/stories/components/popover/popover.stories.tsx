import {
  Flex,
  Text,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Popover',
  component: Popover,
  argTypes: {
    modal: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button type="button">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent side="top">
        <Flex direction="column" gap="100">
          <Text weight="bold">Popover</Text>
          <Text size="sm" variant="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            gravida hendrerit ante et convallis.
          </Text>
        </Flex>
      </PopoverContent>
    </Popover>
  ),
  args: {
    modal: false,
  },
};
