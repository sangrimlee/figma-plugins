import { useEffect } from 'react';
import type { FigmaPluginMessage } from '@/shared/types';

export type PluginMessageEvent = MessageEvent<{
  pluginMessage: FigmaPluginMessage;
}>;

export type PluginMessageEventHandler = (event: PluginMessageEvent) => void;

export function useMessageEventListener(handler: PluginMessageEventHandler) {
  useEffect(() => {
    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [handler]);
}
