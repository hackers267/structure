function getBase<T>(result: T[], start: number, end: number) {
  const baseIndex = Math.floor(Math.random() * (end - start) + start);
  return result[baseIndex];
}

function split<T>(result: T[], base: T) {
  const small = [];
  const large = [];
  for (const t of result) {
    if (t < base) {
      small.push(t);
    }
    if (t > base) {
      large.push(t);
    }
  }
  return { small, large };
}

export function quickSort<T>(
  data: T[],
  start: number = 0,
  end: number = data.length,
): T[] {
  if (data.length <= 1) {
    return data;
  }
  const result = data.slice();
  const base = getBase(result, start, end);
  const { small, large } = split(result, base);
  const left = quickSort(small);
  const right = quickSort(large);
  return [...left, base, ...right];
}
