import { useCallback, useState } from 'react';
import type { GenerateFormState, GenerateSource } from '@/shared/types';
import { postUIPluginMessage } from '../utils/plugin-message';
import {
  useMessageEventListener
  
} from './use-message-event-listner';
import type {PluginMessageEventHandler} from './use-message-event-listner';

export function useGenerateContentEvent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generate = useCallback((formState: GenerateFormState) => {
    setIsLoading(true);
    postUIPluginMessage({
      type: 'GENERATE_CONTENT',
      formState,
    });
  }, []);

  const autoGenerate = useCallback((source: GenerateSource) => {
    setIsLoading(true);
    postUIPluginMessage({
      type: 'AUTO_GENERATE_CONTENT',
      source,
    });
  }, []);

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

  return { isLoading, generate, autoGenerate };
}
