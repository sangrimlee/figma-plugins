import { useCallback, useState } from 'react';
import type { GenerateFormState } from '@/shared/types';
import { postUIPluginMessage } from '../utils/plugin-message';
import {
  useMessageEventListener,
  type PluginMessageEventHandler,
} from './use-message-event-listner';

export function useGenerateContentEvent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postGenerateContentEvent = useCallback(
    (formState: GenerateFormState) => {
      setIsLoading(true);
      postUIPluginMessage({
        type: 'GENERATE_CONTENT',
        formState,
      });
    },
    [],
  );

  const handleGenerateContentEvent = useCallback<PluginMessageEventHandler>(
    ({ data: { pluginMessage } }) => {
      if (pluginMessage.type !== 'GENERATE_CONTENT_FINISHED') {
        return;
      }
      setIsLoading(false);
    },
    [],
  );

  useMessageEventListener(handleGenerateContentEvent);

  return { isLoading, postGenerateContentEvent };
}
