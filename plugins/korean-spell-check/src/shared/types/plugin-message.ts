import type { ContentType } from './content-type';
import type { SpellCheckResult } from './spell-check';

export type FigmaPluginMessageType =
  | 'SET_CHARACTERS'
  | 'RUN_SPELL_CHECK_SUCCESS'
  | 'RUN_SPELL_CHECK_FAILED';

/**
 * PluginMessage for figma(sandbox) → ui(ifra
 */
export type FigmaPluginMessage =
  | {
      type: 'SET_CHARACTERS';
      characters: string[];
    }
  | {
      type: 'RUN_SPELL_CHECK_SUCCESS';
    }
  | {
      type: 'RUN_SPELL_CHECK_FAILED';
    };

export type UIPluginMessageType = 'ON_CHANGE_CONTENT_TYPE' | 'RUN_SPELL_CHECK';

/**
 * PluginMessage for ui(iframe) → figma(sandbox)
 */
export type UIPluginMessage =
  | {
      type: 'ON_CHANGE_CONTENT_TYPE';
      contentType: ContentType;
    }
  | {
      type: 'RUN_SPELL_CHECK';
      results: SpellCheckResult[];
    };

export type UIPluginMessageEvent = MessageEvent<{
  pluginMessage: FigmaPluginMessage;
}>;
