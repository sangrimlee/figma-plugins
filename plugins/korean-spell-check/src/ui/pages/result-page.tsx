import {
  Box,
  Button,
  Flex,
  Text,
  animations,
  colors,
  styled,
} from '@figma-plugins/ui';
import { useState } from 'react';
import { SpellCheckResultList } from '../components/spell-check-result';
import { useGlobalStore } from '../store';
import { postUIPluginMessage } from '../utils/plugin-message';
import { LoaderIcon } from '../components';

export function ResultPage() {
  const spellCheckResults = useGlobalStore((state) => state.spellCheckResults);
  const reset = useGlobalStore((state) => state.reset);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runSpellCheck = () => {
    setIsLoading(true);
    postUIPluginMessage({
      type: 'RUN_SPELL_CHECK',
      spellCheckResults,
    });
  };

  return (
    <MainWrapper direction="column" gap="300">
      <Text as="h1" weight="bold">
        검사 결과
      </Text>
      <SpellCheckResultList results={spellCheckResults} />
      <ActionsWrapper gap="200" items="center" justify="end">
        <Button
          disabled={spellCheckResults.length === 0 || isLoading}
          onClick={runSpellCheck}
          size="sm"
          type="button"
          variant="brand"
        >
          {isLoading ? (
            <Box
              as={LoaderIcon}
              css={{
                animation: `${animations.spin.name} 1s linear infinite`,
                marginRight: '$200',
              }}
            />
          ) : null}
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
