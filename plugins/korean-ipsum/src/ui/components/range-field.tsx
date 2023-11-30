import { Flex, Text, Slider } from '@figma-plugins/ui';
import { useId } from 'react';

interface RangeFieldProps
  extends React.ComponentPropsWithoutRef<typeof Slider> {
  label: string;
}

export function RangeField({ label, value, css, ...props }: RangeFieldProps) {
  const id = useId();

  return (
    <div>
      <Text
        as="label"
        css={{ display: 'block', marginBottom: '$150' }}
        htmlFor={id}
        size="sm"
        weight="semibold"
      >
        {label}
      </Text>
      <Flex gap="200" items="center">
        <Slider css={{ ...css, flex: 1 }} {...props} />
        <Text as="span" size="sm" weight="medium">
          {value}개
        </Text>
      </Flex>
    </div>
  );
}
