import { exchange, less } from "./utils.ts";

export function insertSort<T>(data: T[]): T[] {
  const array = data.slice();
  const length = data.length;
  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (less(array, j + 1, j)) {
        exchange(array, j + 1, j);
      }
    }
  }
  return array;
}
