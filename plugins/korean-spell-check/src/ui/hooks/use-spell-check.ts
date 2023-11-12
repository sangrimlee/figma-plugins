import { useCallback, useState } from 'react';
import { useToast } from '@figma-plugins/ui';
import { useGlobalStore } from '../store';
import { spellCheck } from '../lib/spell-check';

export function useSpellCheck() {
  const { toast } = useToast();
  const characters = useGlobalStore((state) => state.characters);
  const setSpellCheckResults = useGlobalStore(
    (state) => state.setSpellCheckResults,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSpellCheckResults = useCallback(() => {
    setIsLoading(true);
    spellCheck(characters)
      .then((spellCheckResults) => {
        setSpellCheckResults(spellCheckResults);
      })
      .catch(() => {
        toast({
          variant: 'danger',
          title: '맞춤법 검사 오류',
          description: '네트워크 요청에 실패하였습니다.',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [characters, setSpellCheckResults, toast]);

  return { isLoading, getSpellCheckResults };
}
