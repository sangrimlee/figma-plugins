import { useCallback } from 'react';
import { useGlobalStore } from '../store';
import {
  useMessageEventListener,
  type PluginMessageEventHandler,
} from './use-message-event-listner';

export function useSelectionChangeEvent() {
  const updateIsSelectedTextNode = useGlobalStore(
    (state) => state.updateIsSelectedTextNode,
  );

  const handleSelectionChangeEvent = useCallback<PluginMessageEventHandler>(
    ({ data: { pluginMessage } }) => {
      if (pluginMessage.type !== 'ON_CHANGE_SELECTION') {
        return;
      }
      updateIsSelectedTextNode(pluginMessage.isSelectedTextNode);
    },
    [updateIsSelectedTextNode],
  );

  useMessageEventListener(handleSelectionChangeEvent);
}
