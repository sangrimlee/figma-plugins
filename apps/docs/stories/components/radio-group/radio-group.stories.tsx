import { Text, Flex, RadioGroup, RadioGroupItem } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Radio Group',
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form>
      <RadioGroup {...args} aria-label="View density" defaultValue="default">
        <Flex gap="400" items="center">
          <Flex gap="100" items="center">
            <RadioGroupItem id="r1" value="default" />
            <Text as="label" htmlFor="r1" size="sm" weight="medium">
              Default
            </Text>
          </Flex>
          <Flex gap="100" items="center">
            <RadioGroupItem id="r2" value="compact" />
            <Text as="label" htmlFor="r2" size="sm" weight="medium">
              Compact
            </Text>
          </Flex>
          <Flex gap="100" items="center">
            <RadioGroupItem id="r3" value="comportable" />
            <Text as="label" htmlFor="r3" size="sm" weight="medium">
              Comportable
            </Text>
          </Flex>
        </Flex>
      </RadioGroup>
    </form>
  ),
  args: {
    disabled: false,
  },
};
