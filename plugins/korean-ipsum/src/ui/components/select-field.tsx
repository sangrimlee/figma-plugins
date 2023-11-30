import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Text,
} from '@figma-plugins/ui';
import { useId } from 'react';

interface SelectFieldProps
  extends React.ComponentPropsWithoutRef<typeof Select> {
  label: string;
  options: { value: string; label: string }[];
}

export function SelectField({ label, options, ...props }: SelectFieldProps) {
  const id = useId();

  return (
    <div>
      <Text
        as="label"
        css={{ display: 'block', marginBottom: '$200' }}
        htmlFor={id}
        size="sm"
        weight="semibold"
      >
        {label}
      </Text>
      <Select {...props}>
        <SelectTrigger id={id}>
          <SelectValue placeholder="텍스트 소스를 선택해주세요." />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
