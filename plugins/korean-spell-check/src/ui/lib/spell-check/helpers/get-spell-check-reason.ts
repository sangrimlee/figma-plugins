import type { SpellCheckReason } from '@/shared/types';

export function getSpellCheckReason(reason: string): SpellCheckReason {
  switch (reason) {
    case 'green_text':
      return 'WRONG_SPACING';
    case 'red_text':
      return 'WRONG_SPELLING';
    case 'purple_text':
      return 'AMBIGUOUS';
    case 'blue_text':
      return 'STATISTICAL_CORRECTION';
    default:
      throw Error('WRONG_SPELL_CHECK_REASON');
  }
}
