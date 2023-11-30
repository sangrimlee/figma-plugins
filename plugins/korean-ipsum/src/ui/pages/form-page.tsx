import { Button, Flex } from '@figma-plugins/ui';
import type {
  GenerateMethod,
  GenerateSource,
  GenerateUnit,
} from '@/shared/types';
import { useGlobalStore } from '../store';
import { RadioGroupField, SelectField, RangeField } from '../components';
import { useGenerateContentEvent } from '../hooks';
import {
  GENERATE_METHODS,
  GENERATE_SOURCES,
  GENERATE_UNITS,
} from '../constants';

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
      justify="between"
      onSubmit={handleSubmit}
    >
      <Flex direction="column" gap="600">
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
