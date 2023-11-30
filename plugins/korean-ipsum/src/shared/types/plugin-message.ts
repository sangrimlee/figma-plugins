import type { GenerateFormState, GenerateSource } from './generate-form';

export type FigmaPluginMessageType =
  | 'ON_INIT'
  | 'ON_CHANGE_SELECTION'
  | 'GENERATE_CONTENT_FINISHED';

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
    }
  | {
      type: 'GENERATE_CONTENT_FINISHED';
    };

export type UIPluginMessageType =
  | 'INIT'
  | 'ON_CHANGE_FORM_STATE'
  | 'GENERATE_CONTENT'
  | 'AUTO_GENERATE_CONTENT';

export type UIPluginMessage =
  | { type: 'INIT' }
  | {
      type: 'ON_CHANGE_FORM_STATE';
      formState: GenerateFormState;
    }
  | {
      type: 'GENERATE_CONTENT';
      formState: GenerateFormState;
    }
  | {
      type: 'AUTO_GENERATE_CONTENT';
      source: GenerateSource;
    };
