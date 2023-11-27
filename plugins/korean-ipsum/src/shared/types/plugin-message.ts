export type FigmaPluginMessageType = 'ON_CHANGE_SELECTION';

/**
 * PluginMessage for figma(sandbox) → ui(ifra
 */
export interface FigmaPluginMessage {
  type: 'ON_CHANGE_SELECTION';
  isSelectedTextNode: boolean;
}
