import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { bubbleSort } from "../../src/sort/bubble.ts";

Deno.test({
  name: "Bubble Sort",
  fn: () => {
    const array: number[] = [2, 12, 19,8,4];
    const actual = bubbleSort(array);
    const result = array.slice().sort((a, b) => a > b ? 1 : -1);
    assertEquals(actual, result);
  },
});
