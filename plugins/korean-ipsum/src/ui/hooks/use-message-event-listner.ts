import { useCallback, useEffect, useState } from 'react';
import type { FigmaPluginMessage } from '@/shared/types';
import { useGlobalStore } from '../store';
import { postUIPluginMessage } from '../utils/plugin-message';

type PluginMessageEvent = MessageEvent<{
  pluginMessage: FigmaPluginMessage;
}>;

export function useMessageEventListener() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const updateIsSelectedTextNode = useGlobalStore(
    (state) => state.updateIsSelectedTextNode,
  );
  const resetForm = useGlobalStore((state) => state.resetForm);

  const handleMessageEvent = useCallback(
    ({ data: { pluginMessage } }: PluginMessageEvent) => {
      switch (pluginMessage.type) {
        case 'ON_INIT':
          updateIsSelectedTextNode(pluginMessage.isSelectedTextNode);
          resetForm(pluginMessage.formState);
          setIsLoading(false);
          break;
        case 'ON_CHANGE_SELECTION':
          updateIsSelectedTextNode(pluginMessage.isSelectedTextNode);
          break;
        default:
          break;
      }
    },
    [updateIsSelectedTextNode, resetForm],
  );

  useEffect(() => {
    postUIPluginMessage({
      type: 'INIT',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessageEvent);
    return () => {
      window.removeEventListener('message', handleMessageEvent);
    };
  }, [handleMessageEvent]);

  return { isLoading };
}
