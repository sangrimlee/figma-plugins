import { create } from 'zustand';
import type { GenerateFormState } from '@/shared/types';

interface GlobalStoreState {
  isSelectedTextNode: boolean;
  formState: GenerateFormState;
}

interface GlobalStoreAction {
  updateIsSelectedTextNode: (isSelectedNode: boolean) => void;
  updateForm: <K extends keyof GenerateFormState>(
    key: K,
    value: GenerateFormState[K],
  ) => void;
}

const initialState: GlobalStoreState = {
  isSelectedTextNode: false,
  formState: {
    source: 'countingStars',
    unit: 'word',
    count: '1',
    method: 'replace',
  },
};

export const useGlobalStore = create<GlobalStoreState & GlobalStoreAction>(
  (set) => ({
    ...initialState,
    updateIsSelectedTextNode: (isSelectedTextNode) => {
      set(() => ({ isSelectedTextNode }));
    },
    updateForm: (key, value) => {
      set((prevState) => ({
        ...prevState,
        formState: {
          ...prevState.formState,
          [key]: value,
        },
      }));
    },
  }),
);
