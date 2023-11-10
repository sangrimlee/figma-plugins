import { create } from 'zustand';
import type { ContentType, SpellCheckResult } from '@/shared/types';

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

export const useGlobalStore = create<GlobalStoreState & GlobalStoreAction>(
  (set) => ({
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
  }),
);
