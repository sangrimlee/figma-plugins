import type { GenerateFormState } from './generate-form';

export type FigmaPluginMessageType = 'ON_CHANGE_SELECTION';

/**
 * PluginMessage for figma(sandbox) → ui(ifra
 */
export interface FigmaPluginMessage {
  type: 'ON_CHANGE_SELECTION';
  isSelectedTextNode: boolean;
}

export type UIPluginMessageType = 'ON_CHANGE_FORM_STATE';

export interface UIPluginMessage {
  type: 'ON_CHANGE_FORM_STATE';
  formState: GenerateFormState;
}
