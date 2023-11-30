import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { GenerateFormState } from '@/shared/types';
import { postUIPluginMessage } from './utils/plugin-message';

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
  resetForm: (formState?: GenerateFormState) => void;
}

const initialState: GlobalStoreState = {
  isSelectedTextNode: false,
  formState: {
    source: 'countingStars',
    unit: 'word',
    count: 1,
    method: 'replace',
  },
};

export const useGlobalStore = create(
  subscribeWithSelector<GlobalStoreState & GlobalStoreAction>((set) => ({
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
    resetForm: (formState) => {
      set(() => ({
        formState: {
          ...initialState.formState,
          ...formState,
        },
      }));
    },
  })),
);

useGlobalStore.subscribe(
  (state) => state.formState,
  (formState) => {
    postUIPluginMessage({
      type: 'ON_CHANGE_FORM_STATE',
      formState,
    });
  },
);
