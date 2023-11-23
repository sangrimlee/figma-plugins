import { Flex, NodeBadge } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const nodeTypes = ['text', 'frame', 'group', 'component', 'instance'] as const;

const meta = {
  title: 'components/Node Badge',
  component: NodeBadge,
  argTypes: {
    nodeType: {
      control: 'select',
      options: nodeTypes,
    },
    hideLabel: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof NodeBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <NodeBadge {...args} />,
  args: {
    nodeType: 'text',
    hideLabel: false,
  },
};

export const NodeTypes: Story = {
  render: (args) => (
    <Flex gap="400" wrap="noWrap">
      {nodeTypes.map((nodeType) => (
        <NodeBadge {...args} key={nodeType} nodeType={nodeType} />
      ))}
    </Flex>
  ),
};

export const HideLabel: Story = {
  render: (args) => (
    <Flex gap="400" wrap="noWrap">
      {nodeTypes.map((nodeType) => (
        <NodeBadge {...args} hideLabel key={nodeType} nodeType={nodeType} />
      ))}
    </Flex>
  ),
};
