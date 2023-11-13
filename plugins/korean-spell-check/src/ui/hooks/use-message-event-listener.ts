import { useToast } from '@figma-plugins/ui';
import { useCallback, useEffect } from 'react';
import type { FigmaPluginMessage } from '@/shared/types';
import { useGlobalStore } from '../store';

type PluginMessageEvent = MessageEvent<{
  pluginMessage: FigmaPluginMessage;
}>;

export function useMessageEventListener() {
  const { toast } = useToast();
  const reset = useGlobalStore((state) => state.reset);
  const setCharacters = useGlobalStore((state) => state.setCharacters);

  const handleMessageEvent = useCallback(
    ({ data: { pluginMessage } }: PluginMessageEvent) => {
      switch (pluginMessage.type) {
        case 'SET_CHARACTERS':
          setCharacters(pluginMessage.characters);
          break;
        case 'RUN_SPELL_CHECK_SUCCESS':
          toast({
            variant: 'success',
            title: '맞춤법 검사 완료',
            description: '맞춤법에 맞게 모두 수정되었습니다.',
          });
          reset();
          break;
        case 'RUN_SPELL_CHECK_FAILED':
          toast({
            variant: 'danger',
            title: '맞춤법 검사 실패',
            description:
              '맞춤법에 수정에 실패하였습니다. 다시 한 번 시도해주세요.',
          });
          reset();
          break;
        default:
          break;
      }
    },
    [toast, setCharacters, reset],
  );

  useEffect(() => {
    window.addEventListener('message', handleMessageEvent);
    return () => {
      window.removeEventListener('message', handleMessageEvent);
    };
  }, [handleMessageEvent]);
}
