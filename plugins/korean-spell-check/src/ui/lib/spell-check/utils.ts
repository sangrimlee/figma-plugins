import type { SpellCheckReason, SpellCheckResult } from '@/shared/types';

const ORIGIN_REGEX = /<span (?:[^<>/]+)>(?<origin>[^<>/]+)<\/span>/g;
const CORRECT_REGEX =
  /<em class='(?<reason>[^<>/]+)'>(?<correct>[^<>/]+)<\/em>/g;

export function getSpellCheckeResult(
  originHtml: string,
  correctHtml: string,
): SpellCheckResult[] {
  const origins = [...originHtml.matchAll(ORIGIN_REGEX)];
  const corrects = [...correctHtml.matchAll(CORRECT_REGEX)];

  const results: SpellCheckResult[] = [];
  const errorCount = Math.min(origins.length, corrects.length);
  for (let i = 0; i < errorCount; i++) {
    const origin = origins[i][1];
    const reason = getSpellCheckReason(corrects[i][1]);
    const correct = corrects[i][2];
    results.push({
      origin,
      reason,
      correct,
    });
  }
  return results;
}

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
