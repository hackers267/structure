import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { bubbleSort } from "../../src/sort/bubble.ts";
import { insertSort } from "../../src/sort/insert.ts";

function init() {
  const array: number[] = [2, 12, 19, 8, 4];
  const result = array.slice().sort((a, b) => a > b ? 1 : -1);
  return { array, actual: result };
}

Deno.test({
  name: "Bubble Sort",
  fn: () => {
    const { array, actual } = init();
    const result = bubbleSort(array);
    assertEquals(result, actual);
  },
});
Deno.test({
  name: "Insert Sort",
  fn: () => {
    const { array, actual } = init();
    const result = insertSort(array);
    assertEquals(result, actual);
  },
});
