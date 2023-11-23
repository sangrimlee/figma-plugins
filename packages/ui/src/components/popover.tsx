import * as PopoverPrimitive from '@radix-ui/react-popover';
import React, { forwardRef } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { styled } from '@/stitches.config';
import { animations, colors } from '@/vars';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverClose = PopoverPrimitive.Close;

const StyledPopoverContent = styled(PopoverPrimitive.Content, {
  position: 'relative',
  zIndex: '$popover',
  width: '16rem',
  padding: '$400',
  borderWidth: '$1',
  borderRadius: '$lg',
  backgroundColor: colors.bg.default,
  boxShadow: '$md',
  outline: 'none',
  animationDuration: '300ms',
  animationTimingFunction: '$transitions$ease-out',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': {
      animationName: animations.appearFromBottom,
    },
    '&[data-side="right"]': {
      animationName: animations.appearFromLeft,
    },
    '&[data-side="bottom"]': {
      animationName: animations.appearFromTop,
    },
    '&[data-side="left"]': {
      animationName: animations.appearFromRight,
    },
  },
});

const StyledPopoverClose = styled(PopoverPrimitive.Close, {
  position: 'absolute',
  top: '$100',
  right: '$100',
  padding: '$100',
  color: colors.icon.secondary.default,
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:hover': {
    color: colors.icon.secondary.hover,
  },
});

const PopoverContent = forwardRef<
  React.ElementRef<typeof StyledPopoverContent>,
  React.ComponentPropsWithoutRef<typeof StyledPopoverContent>
>(({ align = 'center', sideOffset = 4, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <StyledPopoverContent
      align={align}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
      <StyledPopoverClose aria-label="Close popover" type="button">
        <Cross2Icon height={16} width={16} />
      </StyledPopoverClose>
    </StyledPopoverContent>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverClose, PopoverContent };
