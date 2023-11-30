export type GenerateSource = 'countingStars' | 'mountain' | 'shower' | 'star';
export type GenerateUnit = 'word' | 'sentence' | 'paragraph';
export type GenerateCount = number;
export type GenerateMethod = 'replace' | 'join';

export interface GenerateFormState {
  source: GenerateSource;
  unit: GenerateUnit;
  count: GenerateCount;
  method: GenerateMethod;
}
