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
    case 'purple_text':
      return 'AMBIGUOUS';
    case 'blue_text':
      return 'STATISTICAL_CORRECTION';
    case 'red_text':
    default:
      return 'WRONG_SPELLING';
  }
}

export function removeDuplicateResult(results: SpellCheckResult[]) {
  const set = new Set<string>();
  const removedResults: SpellCheckResult[] = [];

  for (const result of results) {
    if (!set.has(result.origin)) {
      removedResults.push(result);
      set.add(result.origin);
    }
  }

  return removedResults;
}

export function splitByLine(text: string) {
  return text.split(/(?:(?<=[.!?])\s+)|(?:[\n\r]+)/);
}

export function createQueries(lines: string[], limit: number): string[] {
  const queries: string[] = [];

  let prevQuery = '';
  for (const line of lines) {
    if (limit < line.length) {
      queries.push(...createQueries(line.split(' '), limit));
      continue;
    }
    if (prevQuery.length + line.length < limit) {
      prevQuery = prevQuery ? `${prevQuery}\n${line}` : line;
    } else {
      queries.push(prevQuery);
      prevQuery = line;
    }
  }
  if (prevQuery) {
    queries.push(prevQuery);
  }

  return queries;
}
