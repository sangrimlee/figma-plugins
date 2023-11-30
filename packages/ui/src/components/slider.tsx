import * as SliderPrimitive from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import { styled } from '@/stitches.config';
import { colors } from '@/vars';

const SliderRoot = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '$full',
  userSelect: 'none',
  touchAction: 'none',
});

const SliderTrack = styled(SliderPrimitive.Track, {
  position: 'relative',
  height: '$150',
  width: '$full',
  flexGrow: 1,
  overflow: 'hidden',
  borderRadius: '$full',
  backgroundColor: colors.bg.disabled.default,
  '&[data-disabled]': {
    backgroundColor: colors.bg.disabled.default,
  },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  height: '$full',
  backgroundColor: colors.bg.brand.default,
  '&[data-disabled]': {
    backgroundColor: colors.bg.disabled.secondary,
  },
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  display: 'block',
  width: '$400',
  height: '$400',
  borderWidth: '$1',
  borderRadius: '$full',
  borderColor: colors.border.brand.default,
  backgroundColor: colors.icon.onbrand.default,
  transitionProperty: '$transitions$shadow',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-out',
  '&:focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors.border.onselected.default}`,
  },
  '&[data-disabled]': {
    pointerEvents: 'none',
    borderColor: colors.border.disabled.default,
    backgroundColor: colors.icon.ondisabled,
  },
});

export const Slider = forwardRef<
  React.ElementRef<typeof SliderRoot>,
  React.ComponentPropsWithoutRef<typeof SliderRoot>
>((props, ref) => (
  <SliderRoot ref={ref} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
));
Slider.displayName = 'Slider';
