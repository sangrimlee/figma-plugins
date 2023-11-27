import manifest from 'manifest.json';
import { postFigmaPluginMessage } from './utils/plugin-message';
import { isTextNode } from './utils/check-node';

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 432,
});

figma.on('selectionchange', () => {
  postFigmaPluginMessage({
    type: 'ON_CHANGE_SELECTION',
    isSelectedTextNode: figma.currentPage.selection.some(isTextNode),
  });
});
