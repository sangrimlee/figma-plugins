import { Button, Flex } from '@figma-plugins/ui';
import type {
  GenerateMethod,
  GenerateSource,
  GenerateUnit,
} from '@/shared/types';
import { useGlobalStore } from '../store';
import { RadioGroupField, SelectField, RangeField } from '../components';
import { useGenerateContentEvent } from '../hooks';

const GENERATE_SOURCES = [
  { value: 'countingStars', label: '별 헤는 밤' },
  { value: 'mountain', label: '청산도' },
  { value: 'shower', label: '소나기' },
  { value: 'star', label: '별' },
];

const GENERATE_UNITS = [
  { value: 'word', label: '단어' },
  { value: 'sentence', label: '문장' },
  { value: 'paragraph', label: '문단' },
];

const GENERATE_METHODS = [
  { value: 'replace', label: '덮어쓰기' },
  { value: 'join', label: '이어붙이기' },
];

export function FormPage() {
  const formState = useGlobalStore((state) => state.formState);
  const updateForm = useGlobalStore((state) => state.updateForm);
  const { isLoading, postGenerateContentEvent } = useGenerateContentEvent();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postGenerateContentEvent(formState);
  };

  return (
    <Flex
      as="form"
      css={{ height: '$full', margin: 0, padding: '$200 $400 $400' }}
      direction="column"
      gap="500"
      justify="between"
      onSubmit={handleSubmit}
    >
      <Flex direction="column" gap="700">
        <SelectField
          label="텍스트 소스"
          onValueChange={(value) => {
            updateForm('source', value as GenerateSource);
          }}
          options={GENERATE_SOURCES}
          value={formState.source}
        />
        <SelectField
          label="생성 단위"
          onValueChange={(value) => {
            updateForm('unit', value as GenerateUnit);
          }}
          options={GENERATE_UNITS}
          value={formState.unit}
        />
        <RangeField
          defaultValue={[formState.count]}
          label="생성 개수"
          max={10}
          min={1}
          onValueChange={([value]) => {
            updateForm('count', value);
          }}
          value={[formState.count]}
        />
        <RadioGroupField
          label="생성 방식"
          onValueChange={(value) => {
            updateForm('method', value as GenerateMethod);
          }}
          options={GENERATE_METHODS}
          value={formState.method}
        />
      </Flex>
      <Button disabled={isLoading} size="sm" type="submit">
        <span>생성</span>
      </Button>
    </Flex>
  );
}
