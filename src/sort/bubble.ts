import { exchange, less } from "./utils.ts";

export function bubbleSort<T>(data: T[]): T[] {
  const array = data.slice();
  let hasChanged = true;
  const length = array.length;
  for (let i = 0; i < length && hasChanged; i++) {
    hasChanged = false;
    for (let j = 0; j < length - i; j++) {
      if (less(array, j + 1, j)) {
        exchange(array, j, j + 1);
        hasChanged = true;
      }
    }
  }
  return array;
}
