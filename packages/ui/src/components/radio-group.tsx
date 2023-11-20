import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
});

const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$500',
  height: '$500',
  borderRadius: '$full',
  borderWidth: '$1',
  borderColor: colors.border.default,
  backgroundColor: 'transparent',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:focus-visible': {
    outline: 'none',
    boxShadow: `inset 0 0 0 1px ${colors.border.selected.default}`,
  },
  '&:hover': {
    backgroundColor: colors.bg.hover,
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: colors.bg.disabled.default,
  },
  '&[data-state="checked"]': {
    borderColor: colors.border.selected.default,
  },
  '&:hover[data-state="checked"]': {
    backgroundColor: colors.bg.selected.hover,
  },
  '&:disabled[data-state="checked"]': {
    borderColor: colors.border.disabled.default,
  },
});

<RadioGroupPrimitive.Indicator className="bg-figma-bg-brand block h-2.5 w-2.5 rounded-full" />;

const StyledRadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  width: '$250',
  height: '$250',
  borderRadius: '$full',
  backgroundColor: colors.icon.selected.default,
  '&[data-disabled]': {
    backgroundColor: colors.icon.disabled,
  },
});

export const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  return (
    <StyledRadioGroupItem ref={ref} {...props}>
      <StyledRadioGroupIndicator />
    </StyledRadioGroupItem>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';
