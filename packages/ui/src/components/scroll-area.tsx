import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

const SCROLLBAR_SIZE = 12;

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
});

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  height: '$full',
  width: '$full',
  borderRadius: 'inherit',
});

const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar, {
  display: 'flex',
  touchAction: 'none',
  userSelect: 'none',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  padding: '2px',
  backgroundColor: 'transparent',
  borderColor: 'transparent',

  '&:hover': {
    backgroundColor: colors.bg.hover,
    borderColor: colors.border.default,
  },

  '&[data-orientation="vertical"]': {
    height: '$full',
    width: SCROLLBAR_SIZE,
    borderLeftWidth: '$1',
  },

  '&[data-orientation="horizontal"]': {
    height: SCROLLBAR_SIZE,
    width: '$full',
    flexDirection: 'column',
    borderTopWidth: '$1',
  },
});

const ScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb, {
  position: 'relative',
  flex: 1,
  borderRadius: '$full',
  backgroundColor: colors.bg.disabled.default,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 48,
    minHeight: 48,
  },
});

const ScrollBar = forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>((props, ref) => (
  <ScrollAreaScrollbar ref={ref} {...props}>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = 'ScrollBar';

export const ScrollArea = forwardRef<
  React.ElementRef<typeof ScrollAreaRoot>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRoot> & {
    orientation?: 'vertical' | 'horizontal' | 'both';
  }
>(({ children, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaRoot ref={ref} {...props}>
    <ScrollAreaViewport>{children}</ScrollAreaViewport>
    {orientation !== 'horizontal' ? <ScrollBar orientation="vertical" /> : null}
    {orientation !== 'vertical' ? <ScrollBar orientation="horizontal" /> : null}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = 'ScrollArea';
