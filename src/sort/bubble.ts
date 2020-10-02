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
  function exchange(array: T[], i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  function less(array: T[], i: number, j: number) {
    return array[i] < array[j];
  }
}
