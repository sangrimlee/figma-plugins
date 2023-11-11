import { createStore } from 'zustand/vanilla';
import type { ContentType } from '@/shared/types';
import { findAllTextNode } from './utils/find-node';
import { postFigmaPluginMessage } from './utils/plugin-message';

interface FigmaStoreState {
  contentType: ContentType;
  textNodes: TextNode[];
}

interface FigmaStoreAction {
  setContentType: (contentType: ContentType) => void;
  setTextNodes: () => void;
}

export const figmaStore = createStore<FigmaStoreState & FigmaStoreAction>(
  (set, get) => ({
    contentType: 'layer',
    textNodes: [],
    setContentType: (contentType) => {
      set(() => ({ contentType }));
    },
    setTextNodes: () => {
      const { contentType } = get();
      if (contentType === 'result') {
        return;
      }
      const nodes =
        contentType === 'page'
          ? figma.currentPage.children
          : figma.currentPage.selection;
      const textNodes = findAllTextNode(nodes);
      set(() => ({ textNodes }));
      postFigmaPluginMessage({
        type: 'SET_CHARACTERS',
        characters: textNodes.map((textNode) => textNode.characters),
      });
    },
  }),
);

figmaStore.subscribe((state, prevState) => {
  if (state.contentType === prevState.contentType) {
    return;
  }
  state.setTextNodes();
});
