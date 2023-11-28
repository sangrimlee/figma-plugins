import manifest from 'manifest.json';
import type { UIPluginMessage } from '@/shared/types';
import { messageEventHandler, selectionChangeHandler } from './handlers';

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 432,
});

figma.on('selectionchange', selectionChangeHandler);

figma.ui.onmessage = (pluginMessage: UIPluginMessage) => {
  messageEventHandler(pluginMessage).catch(() => {
    /**TODO: Add Error Handling */
  });
};
