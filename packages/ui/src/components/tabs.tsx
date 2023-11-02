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
    padding: '$100 0',
    borderBottomWidth: '$1',
    borderBottomColor: colors.border.default,
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    padding: '0 $100',
    borderRightWidth: '$1',
    borderRightColor: colors.border.default,
  },
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$800',
  padding: '0 $300',
  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$none',
  color: colors.text.secondary.default,
  userSelect: 'none',

  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:hover': {
    color: colors.text.secondary.hover,
    backgroundColor: colors.bg.secondary,
  },
  '&[data-state="active"]': {
    fontWeight: '$medium',
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
