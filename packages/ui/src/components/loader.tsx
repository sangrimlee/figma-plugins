import { forwardRef } from 'react';
import type { VariantProps } from '@stitches/react';
import { styled } from '@/stitches.config';
import { animations } from '@/vars';

const LoaderIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        fill="none"
        height="16"
        ref={ref}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  },
);
LoaderIcon.displayName = 'LoaderIcon';

export const Loader = styled(LoaderIcon, {
  variants: {
    animate: {
      true: {
        animation: `${animations.spin.name} 1s linear infinite`,
      },
    },
  },
  defaultVariants: {
    animate: false,
  },
});

export type LoaderProps = React.SVGProps<SVGSVGElement> &
  VariantProps<typeof Loader>;
