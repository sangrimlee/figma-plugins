import { Toast, Toaster, useToast, Button } from '@figma-plugins/ui';
import type { Meta, StoryObj } from '@storybook/react';

const variants = ['default', 'danger', 'success', 'warning'] as const;

const meta = {
  title: 'components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
  },
  decorators: [
    (StoryFn) => (
      <>
        <StoryFn />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function StoryOfDefault({ variant, ...args }) {
    const { toast } = useToast();
    return (
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: new Intl.DateTimeFormat('en-US', {
              dateStyle: 'long',
              timeStyle: 'short',
            }).format(new Date()),
            variant: typeof variant === 'string' ? variant : 'default',
            ...args,
          });
        }}
        type="button"
      >
        Add to calendar
      </Button>
    );
  },
  args: {
    variant: 'default',
  },
};

export const Variants: Story = {
  render: function StoryOfVariants(args) {
    const { toast } = useToast();

    return (
      <>
        {variants.map((variant) => (
          <Button
            key={variant}
            onClick={() => {
              toast({
                ...args,
                title: 'Scheduled: Catch up',
                description: new Intl.DateTimeFormat('en-US', {
                  dateStyle: 'long',
                  timeStyle: 'short',
                }).format(new Date()),
                variant,
              });
            }}
            type="button"
            variant={variant === 'default' ? 'outline' : variant}
          >
            {variant}
          </Button>
        ))}
      </>
    );
  },
};
