import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'row',
  },
});

export const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  gap: '$100',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'row',
    padding: '$150 $100',
    borderBottomWidth: '$1',
    borderBottomColor: colors.border.default,
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    padding: '$100 $150',
    borderRightWidth: '$1',
    borderRightColor: colors.border.default,
  },
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$800',
  padding: '$150 $300',
  gap: '$150',
  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$none',
  color: colors.text.secondary.default,
  userSelect: 'none',

  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:hover': {
    backgroundColor: colors.bg.hover,
  },
  '&[data-state="active"]': {
    color: colors.text.selected.default,
    backgroundColor: colors.bg.selected.default,
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  '&[data-orientation="horizontal"]': {
    marginTop: '$200',
  },
  '&[data-orientation="vertical"]': {
    marginLeft: '$200',
  },
  outline: 'none',
});
