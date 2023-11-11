import type { UIPluginMessage } from '@/shared/types';
import manifest from 'manifest.json';
import { figmaStore } from './figma-store';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 448,
});

figma.on('selectionchange', () => {
  const { contentType, setTextNodes } = figmaStore.getState();
  if (contentType === 'layer') {
    setTextNodes();
  }
});

figma.on('currentpagechange', () => {
  const { contentType, setTextNodes } = figmaStore.getState();
  if (contentType === 'page') {
    setTextNodes();
  }
});

figma.on('documentchange', () => {
  figmaStore.getState().setTextNodes();
});

figma.ui.onmessage = (pluginMessage: UIPluginMessage) => {
  switch (pluginMessage.type) {
    case 'ON_CHANGE_CONTENT_TYPE':
      figmaStore.getState().setContentType(pluginMessage.contentType);
      break;
    default:
      break;
  }
};
