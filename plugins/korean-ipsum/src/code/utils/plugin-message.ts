import type { FigmaPluginMessage } from '@/shared/types';

export function postFigmaPluginMessage(message: FigmaPluginMessage) {
  figma.ui.postMessage(message);
}
