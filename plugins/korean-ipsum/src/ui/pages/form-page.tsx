import { Button, Flex } from '@figma-plugins/ui';
import type {
  GenerateCount,
  GenerateMethod,
  GenerateSource,
  GenerateUnit,
} from '@/shared/types';
import { useGlobalStore } from '../store';
import { RadioGroupField, SelectField } from '../components';
import { postUIPluginMessage } from '../utils/plugin-message';

const GENERATE_SOURCES = [
  { value: 'countingStars', label: '별 헤는 밤' },
  { value: 'mountain', label: '청산도' },
  { value: 'shower', label: '소나기' },
  { value: 'star', label: '별' },
];

const GENREATE_UNITS = [
  { value: 'word', label: '단어' },
  { value: 'sentence', label: '문장' },
  { value: 'paragraph', label: '문단' },
];

const GENERATE_COUNTS = [
  { value: '1', label: '1개' },
  { value: '2', label: '2개' },
  { value: '3', label: '3개' },
  { value: '4', label: '4개' },
  { value: '5', label: '5개' },
];

const GENERATE_METHODS = [
  { value: 'replace', label: '덮어쓰기' },
  { value: 'join', label: '이어붙이기' },
];

export function FormPage() {
  const formState = useGlobalStore((state) => state.formState);
  const updateForm = useGlobalStore((state) => state.updateForm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postUIPluginMessage({
      type: 'GENERATE_CONTENT',
      formState,
    });
  };

  return (
    <Flex
      as="form"
      css={{ height: '100vh', margin: 0, padding: '$400' }}
      direction="column"
      gap="600"
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
        <RadioGroupField
          label="생성 단위"
          onValueChange={(value) => {
            updateForm('unit', value as GenerateUnit);
          }}
          options={GENREATE_UNITS}
          value={formState.unit}
        />
        <RadioGroupField
          label="생성 개수"
          onValueChange={(value) => {
            updateForm('count', value as GenerateCount);
          }}
          options={GENERATE_COUNTS}
          value={formState.count}
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
      <Button size="sm" type="submit">
        생성
      </Button>
    </Flex>
  );
}
