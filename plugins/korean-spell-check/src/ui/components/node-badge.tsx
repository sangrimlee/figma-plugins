import { Box, colors } from '@figma-plugins/ui';
import { FrameIcon, GroupIcon, TextIcon } from '@radix-ui/react-icons';

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

export type NodeBadgeType = keyof typeof nodeTypes;

export interface NodeBadgeProps {
  type: NodeBadgeType;
}

export function NodeBadge({ type }: NodeBadgeProps) {
  const { Icon, label } = nodeTypes[type];
  return (
    <Box
      as="div"
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '$100',
        borderRadius: '$md',
        padding: '$100 $150',
        gap: '$100',
        fontSize: '$sm',
        lineHeight: '$none',
        color: colors.text.component.default,
        backgroundColor: colors.bg.component.tertiary,
        '&:first-child': {
          marginLeft: '$100',
        },
      }}
    >
      <Icon height={14} width={14} />
      <span>{label}</span>
    </Box>
  );
}
