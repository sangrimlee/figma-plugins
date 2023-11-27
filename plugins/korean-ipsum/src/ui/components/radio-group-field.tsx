import { useId } from 'react';
import { Flex, RadioGroup, RadioGroupItem, Text } from '@figma-plugins/ui';

interface RadioGroupFieldProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroup> {
  label: string;
  options: { value: string; label: string }[];
}

export function RadioGroupField({
  label,
  options,
  ...props
}: RadioGroupFieldProps) {
  const id = useId();

  return (
    <div>
      <Text css={{ marginBottom: '$200' }} size="sm" weight="semibold">
        {label}
      </Text>
      <RadioGroup {...props}>
        {options.map(({ value, label: radioLabel }) => (
          <Flex css={{ flex: 1 }} gap="150" items="center" key={value}>
            <RadioGroupItem id={`${id}-${value}`} value={value} />
            <Text
              as="label"
              htmlFor={`${id}-${value}`}
              size="sm"
              weight="semibold"
            >
              {radioLabel}
            </Text>
          </Flex>
        ))}
      </RadioGroup>
    </div>
  );
}
