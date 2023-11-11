export function debounce(fn: () => void, delayMs: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delayMs);
  };
}
