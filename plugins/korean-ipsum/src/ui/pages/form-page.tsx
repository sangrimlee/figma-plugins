import {
  Button,
  Flex,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Text,
} from '@figma-plugins/ui';
import type { ComponentPropsWithoutRef } from 'react';
import { useId } from 'react';

const GENERATE_SOURCES = [
  { value: 'countingStars', label: '별 헤는 밤' },
  { value: 'mountain', label: '청산도' },
  { value: 'shower', label: '소나기' },
  { value: 'star', label: '별' },
] as const;

const GENREATE_UNITS = [
  { value: 'word', label: '단어' },
  { value: 'sentence', label: '문장' },
  { value: 'paragraph', label: '문단' },
] as const;

const GENERATE_COUNTS = [
  { value: '1', label: '1개' },
  { value: '2', label: '2개' },
  { value: '3', label: '3개' },
  { value: '4', label: '4개' },
  { value: '5', label: '5개' },
] as const;

const GENERATE_METHODS = [
  { value: 'replace', label: '덮어쓰기' },
  { value: 'join', label: '이어붙이기' },
] as const;

interface RadioGroupFieldProps
  extends ComponentPropsWithoutRef<typeof RadioGroup> {
  title: string;
  options: readonly { value: string; label: string }[];
}

function RadioGroupField({ title, options, ...props }: RadioGroupFieldProps) {
  const id = useId();

  return (
    <div>
      <Text css={{ marginBottom: '$250' }} size="sm" weight="semibold">
        {title}
      </Text>
      <RadioGroup {...props}>
        {options.map(({ value, label }) => (
          <Flex css={{ flex: 1 }} gap="150" items="center" key={value}>
            <RadioGroupItem id={`${id}-${value}`} value={value} />
            <Text
              as="label"
              htmlFor={`${id}-${value}`}
              size="sm"
              weight="semibold"
            >
              {label}
            </Text>
          </Flex>
        ))}
      </RadioGroup>
    </div>
  );
}

export function FormPage() {
  return (
    <Flex
      css={{ padding: '$400', height: '100vh' }}
      direction="column"
      gap="600"
      justify="between"
    >
      <Flex direction="column" gap="700">
        <Flex direction="column" gap="200">
          <Text as="label" htmlFor="text-source" size="sm" weight="semibold">
            텍스트 소스
          </Text>
          <Select>
            <SelectTrigger id="text-source">
              <SelectValue placeholder="텍스트 소스를 선택해주세요." />
            </SelectTrigger>
            <SelectContent position="popper">
              {GENERATE_SOURCES.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Flex>
        <RadioGroupField
          id="generate-unit"
          options={GENREATE_UNITS}
          title="생성 단위"
        />
        <RadioGroupField
          id="generate-count"
          options={GENERATE_COUNTS}
          title="생성 개수"
        />
        <RadioGroupField
          id="generate-method"
          options={GENERATE_METHODS}
          title="생성 방식"
        />
      </Flex>
      <Button size="sm" type="button">
        생성
      </Button>
    </Flex>
  );
}
