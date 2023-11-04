import type { SpellCheckResult } from '@/shared/types';
import { retry } from '../../utils/retry';
import { requestPassportKey, requestSpellCheck } from './api';
import { createQueries, removeDuplicateResult, splitByLine } from './utils';

const MAX_LENGTH = 300;

export async function spellCheck(
  characters: string[],
): Promise<SpellCheckResult[]> {
  const passportKey = await requestPassportKey();

  const queries = createQueries(characters.flatMap(splitByLine), MAX_LENGTH);
  const results = await Promise.all(
    queries.map((query) =>
      retry(() => requestSpellCheck(query, passportKey), 2, 500),
    ),
  );
  return removeDuplicateResult(results.flat());
}
