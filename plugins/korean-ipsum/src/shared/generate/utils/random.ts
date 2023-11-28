export function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

export function randomItem<T>(arr: T[]) {
  return arr[randomIndex(arr.length)];
}
