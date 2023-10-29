import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type BoxProps = ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp {...props} ref={forwardedRef} />;
  },
);

Box.displayName = 'Box';
