export type SpellCheckReason =
  | 'WRONG_SPELLING'
  | 'WRONG_SPACING'
  | 'AMBIGUOUS'
  | 'STATISTICAL_CORRECTION';

export interface SpellCheckResult {
  reason: SpellCheckReason;
  origin: string;
  correct: string;
}
