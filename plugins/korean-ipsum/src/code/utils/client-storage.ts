const STORAGE_KEYS = {
  FORM_STATE: 'korean-ipsum_form-state',
} as const;

type StorageKey = keyof typeof STORAGE_KEYS;

export async function getClientStorage<T>(key: StorageKey, defaultValue: T) {
  const value = (await figma.clientStorage.getAsync(STORAGE_KEYS[key])) as
    | T
    | undefined;
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}

export function setClientStorage(key: StorageKey, value: unknown) {
  return figma.clientStorage.setAsync(STORAGE_KEYS[key], value);
}
