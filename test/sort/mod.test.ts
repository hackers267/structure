import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { bubbleSort } from "../../src/sort/bubble.ts";
import { insertSort } from "../../src/sort/insert.ts";
import { mergeSort } from "../../src/sort/merge.ts";

function init() {
  const array: number[] = [2, 12, 19, 8, 4, 3];
  const result = array.slice().sort((a, b) => a > b ? 1 : -1);
  return { array, actual: result };
}

interface Sort<T> {
  name: string;
  fn: (data: T[]) => T[];
}

const sorts: Sort<number>[] = [
  { name: "Bubble Sort", fn: bubbleSort },
  { name: "Insert Sort", fn: insertSort },
  { name: "Merge Sort", fn: mergeSort },
];
for (const sort of sorts) {
  Deno.test({
    name: sort.name,
    fn: () => {
      const { array, actual } = init();
      const result = sort.fn(array);
      assertEquals(result, actual);
    },
  });
}
