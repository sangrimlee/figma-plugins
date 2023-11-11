import type { UIPluginMessage } from '@/shared/types';
import manifest from 'manifest.json';
import { figmaStore } from './figma-store';
import { debounce } from './utils/debounce';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 448,
});

figma.on('currentpagechange', () => {
  const { contentType, setTextNodes } = figmaStore.getState();
  if (contentType === 'page') {
    setTextNodes();
  }
});

figma.on(
  'selectionchange',
  debounce(() => {
    const { contentType, setTextNodes } = figmaStore.getState();
    if (contentType === 'layer') {
      setTextNodes();
    }
  }, 300),
);

figma.on(
  'documentchange',
  debounce(() => {
    figmaStore.getState().setTextNodes();
  }, 300),
);

figma.ui.onmessage = (pluginMessage: UIPluginMessage) => {
  switch (pluginMessage.type) {
    case 'ON_CHANGE_CONTENT_TYPE':
      figmaStore.getState().setContentType(pluginMessage.contentType);
      break;
    default:
      break;
  }
};
