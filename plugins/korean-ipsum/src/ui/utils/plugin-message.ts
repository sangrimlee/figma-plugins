import type { UIPluginMessage } from '@/shared/types';

export function postUIPluginMessage(pluginMessage: UIPluginMessage) {
  parent.postMessage(
    {
      pluginMessage,
    },
    'https://www.figma.com',
  );
}
