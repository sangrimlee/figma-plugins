import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { forwardRef } from 'react';
import { styled } from '@/stitches.config';
import { animations, colors } from '@/vars';

const StyledSelectTrigger = styled(SelectPrimitive.Trigger, {
  width: '$full',
  height: '$900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: '$1',
  borderColor: colors.border.default,
  borderRadius: '$lg',
  padding: '$200 $300',
  color: colors.text.default,
  backgroundColor: 'transparent',
  fontSize: '$sm',

  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',

  '&:hover': {
    backgroundColor: colors.bg.hover,
    color: colors.text.secondary.hover,
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors.border.onselected.default}`,
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: colors.text.disabled,
    backgroundColor: colors.bg.disabled.default,
  },
  '&[data-placeholder]': {
    color: colors.text.secondary.default,
  },
});

const StyledSelectIcon = styled(SelectPrimitive.Icon, {
  height: '$400',
  width: '$400',
  fill: colors.icon.default,
});

const StyledSelectScrollButton = styled(SelectPrimitive.ScrollUpButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$100 0',
  cursor: 'default',
  color: colors.icon.secondary.default,
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:hover': {
    color: colors.icon.secondary.hover,
  },
});

const StyledSelectContent = styled(SelectPrimitive.Content, {
  position: 'relative',
  zIndex: '$popover',
  maxHeight: '16rem',
  minWidth: '8rem',
  overflow: 'hidden',
  borderRadius: '$lg',
  borderWidth: '$1',
  color: colors.text.default,
  backgroundColor: colors.bg.default,
  boxShadow: '$md',
  '&[data-state="open"]': {
    animation: `${animations.fadeIn.name} 200ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${animations.fadeOut.name} 200ms ease-in`,
  },
});

const StyledSelectViewport = styled(SelectPrimitive.Viewport, {
  padding: '$100',
  variants: {
    popper: {
      true: {
        width: '$full',
        height: 'var(--radix-select-trigger-height)',
        minWidth: 'calc(var(--radix-select-trigger-width) - 2px)',
      },
    },
  },
  defaultVariants: {
    popper: true,
  },
});

const StyledSelectItem = styled(SelectPrimitive.Item, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$md',
  padding: '$150 $800 $150 $200',

  cursor: 'default',
  userSelect: 'none',
  outline: 'none',

  fontSize: '$sm',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',

  '&:focus': {
    backgroundColor: colors.bg.hover,
  },
  '&[data-state="checked"]': {
    color: colors.text.onselected.default,
    backgroundColor: colors.bg.selected.default,
  },
  '&:focus[data-state="checked"]': {
    backgroundColor: colors.bg.selected.hover,
  },
  '&[data-disabled]': {
    pointerEvents: 'none',
    color: colors.text.disabled,
    backgroundColor: colors.bg.disabled.default,
  },
});

const StyledSelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  right: '$200',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<
  React.ElementRef<typeof StyledSelectTrigger>,
  React.ComponentPropsWithoutRef<typeof StyledSelectTrigger>
>(({ children, ...props }, ref) => (
  <StyledSelectTrigger {...props} ref={ref}>
    {children}
    <StyledSelectIcon asChild>
      <ChevronDownIcon height={16} width={16} />
    </StyledSelectIcon>
  </StyledSelectTrigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>((props, ref) => (
  <StyledSelectScrollButton
    as={SelectPrimitive.ScrollUpButton}
    ref={ref}
    {...props}
  >
    <ChevronUpIcon height={16} width={16} />
  </StyledSelectScrollButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>((props, ref) => (
  <StyledSelectScrollButton
    as={SelectPrimitive.ScrollDownButton}
    ref={ref}
    {...props}
  >
    <ChevronDownIcon height={16} width={16} />
  </StyledSelectScrollButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
  React.ElementRef<typeof StyledSelectContent>,
  React.ComponentPropsWithoutRef<typeof StyledSelectContent>
>(
  (
    {
      children,
      position,
      align = 'center',
      side = 'bottom',
      sideOffset = 4,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <StyledSelectContent
        align={align}
        position={position}
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectScrollUpButton />
        <StyledSelectViewport popper={position === 'popper'}>
          {children}
        </StyledSelectViewport>
        <SelectScrollDownButton />
      </StyledSelectContent>
    </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = styled(SelectPrimitive.Label, {
  padding: '$150 $200',
  fontSize: '$sm',
  fontWeight: '$semibold',
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
  React.ElementRef<typeof StyledSelectItem>,
  React.ComponentPropsWithoutRef<typeof StyledSelectItem>
>(({ children, ...props }, ref) => (
  <StyledSelectItem ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <StyledSelectItemIndicator>
      <CheckIcon height={16} width={16} />
    </StyledSelectItemIndicator>
  </StyledSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = styled(SelectPrimitive.Separator, {
  height: '1px',
  margin: '$100 0',
  backgroundColor: colors.border.default,
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
