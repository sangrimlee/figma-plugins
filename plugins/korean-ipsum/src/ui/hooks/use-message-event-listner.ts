import { useCallback, useEffect } from 'react';
import type { FigmaPluginMessage } from '@/shared/types';
import { useGlobalStore } from '../store';

type PluginMessageEvent = MessageEvent<{
  pluginMessage: FigmaPluginMessage;
}>;

export function useMessageEventListener() {
  const updateIsSelectedTextNode = useGlobalStore(
    (state) => state.updateIsSelectedTextNode,
  );

  const handleMessageEvent = useCallback(
    ({ data: { pluginMessage } }: PluginMessageEvent) => {
      switch (pluginMessage.type) {
        case 'ON_CHANGE_SELECTION':
          updateIsSelectedTextNode(pluginMessage.isSelectedTextNode);
          break;
        default:
          break;
      }
    },
    [updateIsSelectedTextNode],
  );

  useEffect(() => {
    window.addEventListener('message', handleMessageEvent);
    return () => {
      window.removeEventListener('message', handleMessageEvent);
    };
  }, [handleMessageEvent]);
}
