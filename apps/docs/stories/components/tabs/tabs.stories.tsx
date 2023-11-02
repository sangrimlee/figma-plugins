import {
  Text,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs
      {...args}
      css={{
        '&[data-orientation="horizontal"]': {
          width: '24rem',
        },
        '&[data-orientation="vertical"]': {
          height: '10rem',
        },
      }}
      defaultValue="tab1"
    >
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Text size="sm" variant="secondary">
          Make changes to your account here. Click save when you&apos;re done.
        </Text>
      </TabsContent>
      <TabsContent value="tab2">
        <Text size="sm" variant="secondary">
          Change your password here. After saving, you&apos;ll be logged out.
        </Text>
      </TabsContent>
    </Tabs>
  ),
  args: {
    orientation: 'horizontal',
    activationMode: 'automatic',
  },
};
