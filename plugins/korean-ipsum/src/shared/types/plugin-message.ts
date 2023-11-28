import type { GenerateFormState } from './generate-form';

export type FigmaPluginMessageType = 'ON_INIT' | 'ON_CHANGE_SELECTION';

/**
 * PluginMessage for figma(sandbox) → ui(ifra
 */
export type FigmaPluginMessage =
  | {
      type: 'ON_INIT';
      isSelectedTextNode: boolean;
      formState: GenerateFormState;
    }
  | {
      type: 'ON_CHANGE_SELECTION';
      isSelectedTextNode: boolean;
    };

export type UIPluginMessageType = 'INIT' | 'ON_CHANGE_FORM_STATE';

export type UIPluginMessage =
  | { type: 'INIT' }
  | {
      type: 'ON_CHANGE_FORM_STATE';
      formState: GenerateFormState;
    };
