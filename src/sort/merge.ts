import { merge } from "../utils/merge.ts";

export function mergeSort<T>(
  data: T[],
  left: number = 0,
  right: number = data.length,
): T[] {
  if (right - left <= 1) {
    return data.slice(left, right);
  }
  const mid = left + Math.ceil((right - left) / 2);
  const result = data.slice();
  const leftArray = mergeSort(result, left, mid);
  const rightArray = mergeSort(result, mid, right);
  return merge(leftArray, rightArray);
}
mergeSort([2, 12, 19, 8, 4, 3]);
