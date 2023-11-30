import { Button, Flex, NodeBadge, Text } from '@figma-plugins/ui';
import type { GenerateSource } from '@/shared/types';
import { useGlobalStore } from '../store';
import { SelectField } from '../components';
import { GENERATE_SOURCES } from '../constants';
import { useGenerateContentEvent } from '../hooks';

export function AutoFormPage() {
  const formState = useGlobalStore((state) => state.formState);
  const updateForm = useGlobalStore((state) => state.updateForm);
  const { isLoading, autoGenerate } = useGenerateContentEvent();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    autoGenerate(formState.source);
  };

  return (
    <Flex
      as="form"
      css={{ height: '$full', margin: 0, padding: '$200 $400 $400' }}
      direction="column"
      gap="400"
      justify="between"
      onSubmit={handleSubmit}
    >
      <SelectField
        label="텍스트 소스"
        onValueChange={(value) => {
          updateForm('source', value as GenerateSource);
        }}
        options={GENERATE_SOURCES}
        value={formState.source}
      />
      <Flex css={{ flex: 1 }} items="end" justify="center">
        <Flex gap="100" items="center">
          <Text as="span" size="sm">
            현재 선택된
          </Text>
          <NodeBadge nodeType="text" />
          <Text as="span" size="sm">
            에 알맞은 텍스트를 생성합니다.
          </Text>
        </Flex>
      </Flex>
      <Button disabled={isLoading} size="sm" type="submit">
        <span>생성</span>
      </Button>
    </Flex>
  );
}
