import { FrameIcon, GroupIcon, TextIcon } from '@radix-ui/react-icons';
import React, { forwardRef } from 'react';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

const nodeTypes = {
  text: {
    Icon: TextIcon,
    label: 'Text',
  },
  frame: {
    Icon: FrameIcon,
    label: 'Frame',
  },
  group: {
    Icon: GroupIcon,
    label: 'Group',
  },
} as const;

const NodeBadgeWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '$md',
  padding: '$100',
  gap: '$100',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$none',
  color: colors.text.component.default,
  backgroundColor: colors.bg.component.tertiary,
  variants: {
    hideLabel: {
      true: {
        padding: '$100',
      },
      false: {
        padding: '$100 $150',
      },
    },
  },
  defaultVariants: {
    hideLabel: false,
  },
});

export type NodeBadgeProps = React.ComponentPropsWithoutRef<
  typeof NodeBadgeWrapper
> & {
  nodeType: keyof typeof nodeTypes;
  hideLabel?: boolean;
};

export const NodeBadge = forwardRef<
  React.ElementRef<typeof NodeBadgeWrapper>,
  NodeBadgeProps
>(({ nodeType, hideLabel = false, ...props }, ref) => {
  const { Icon, label } = nodeTypes[nodeType];

  return (
    <NodeBadgeWrapper hideLabel={hideLabel} ref={ref} {...props}>
      <Icon height={14} width={14} />
      {!hideLabel ? <span>{label}</span> : null}
    </NodeBadgeWrapper>
  );
});
NodeBadge.displayName = 'NodeBadge';
