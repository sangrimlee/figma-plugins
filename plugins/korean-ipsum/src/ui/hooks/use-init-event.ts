import { useCallback, useEffect, useState } from 'react';
import { postUIPluginMessage } from '../utils/plugin-message';
import { useGlobalStore } from '../store';
import {
  useMessageEventListener,
  type PluginMessageEventHandler,
} from './use-message-event-listner';

export function useInitEvent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const resetForm = useGlobalStore((state) => state.resetForm);
  const updateIsSelectedTextNode = useGlobalStore(
    (state) => state.updateIsSelectedTextNode,
  );

  const handleInitEvent = useCallback<PluginMessageEventHandler>(
    ({ data: { pluginMessage } }) => {
      if (pluginMessage.type !== 'ON_INIT') {
        return;
      }
      resetForm(pluginMessage.formState);
      updateIsSelectedTextNode(pluginMessage.isSelectedTextNode);
      setIsLoading(false);
    },
    [resetForm, updateIsSelectedTextNode],
  );

  useEffect(() => {
    postUIPluginMessage({
      type: 'INIT',
    });
  }, []);

  useMessageEventListener(handleInitEvent);

  return isLoading;
}
