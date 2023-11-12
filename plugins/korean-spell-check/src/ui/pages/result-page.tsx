import { Button, Flex, Text, colors, styled } from '@figma-plugins/ui';
import { SpellCheckResultList } from '../components/spell-check-result';
import { useGlobalStore } from '../store';

export function ResultPage() {
  const spellCheckResults = useGlobalStore((state) => state.spellCheckResults);
  const reset = useGlobalStore((state) => state.reset);

  return (
    <MainWrapper direction="column" gap="300">
      <Text as="h1" weight="bold">
        검사 결과
      </Text>
      <SpellCheckResultList results={spellCheckResults} />
      <ActionsWrapper gap="200" items="center" justify="end">
        <Button
          disabled={spellCheckResults.length === 0}
          size="sm"
          type="button"
          variant="brand"
        >
          모두 수정
        </Button>
        <Button onClick={reset} size="sm" type="button" variant="danger">
          취소
        </Button>
      </ActionsWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled(Flex, {
  padding: '$300 $400 $2000',
});

const ActionsWrapper = styled(Flex, {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: '$10',
  borderTopWidth: '$1',
  padding: '$300 $400',
  backgroundColor: colors.bg.default,
});
