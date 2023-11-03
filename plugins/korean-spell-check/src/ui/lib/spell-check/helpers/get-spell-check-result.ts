import type { SpellCheckResult } from '@/shared/types';
import { getSpellCheckReason } from './get-spell-check-reason';

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
