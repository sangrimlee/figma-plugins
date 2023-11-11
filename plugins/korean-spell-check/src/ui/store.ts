import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { ContentType, SpellCheckResult } from '@/shared/types';
import { postUIPluginMessage } from './utils/plugin-message';

export interface GlobalStoreState {
  contentType: ContentType;
  characters: string[];
  spellCheckResults: SpellCheckResult[];
}

export interface GlobalStoreAction {
  changeContentType: (contentType: ContentType) => void;
  setCharacters: (characters: string[]) => void;
  setSpellCheckResults: (spellCheckResults: SpellCheckResult[]) => void;
  removeSpellCheckResult: (origin: string) => void;
  reset: () => void;
}

const initialState: GlobalStoreState = {
  contentType: 'page',
  characters: [],
  spellCheckResults: [],
};

export const useGlobalStore = create(
  subscribeWithSelector<GlobalStoreState & GlobalStoreAction>((set) => ({
    ...initialState,
    changeContentType: (contentType) => {
      set(() => ({ contentType }));
    },
    setCharacters: (characters) => {
      set(() => ({ characters }));
    },
    setSpellCheckResults: (spellCheckResults) => {
      set(() => ({
        contentType: 'result',
        spellCheckResults,
      }));
    },
    removeSpellCheckResult: (origin) => {
      set(({ spellCheckResults }) => ({
        spellCheckResults: spellCheckResults.filter(
          (result) => result.origin !== origin,
        ),
      }));
    },
    reset: () => {
      set(() => initialState);
    },
  })),
);

useGlobalStore.subscribe(
  (state) => state.contentType,
  (contentType) => {
    postUIPluginMessage({
      type: 'ON_CHANGE_CONTENT_TYPE',
      contentType,
    });
  },
  {
    fireImmediately: true,
  },
);
