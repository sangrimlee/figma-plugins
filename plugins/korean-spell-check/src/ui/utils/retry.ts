import { wait } from './wait';

export function retry<Return>(
  fetchFn: () => Promise<Return>,
  retries: number,
  delayMs = 500,
): Promise<Return> {
  if (retries === 0) {
    throw new Error('RETRY_EXCEED');
  }
  return fetchFn().catch(() =>
    wait(delayMs).then(() => retry(fetchFn, retries - 1, delayMs)),
  );
}
