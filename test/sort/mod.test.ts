import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { bubbleSort } from "../../src/sort/bubble.ts";

Deno.test({
  name: "Bubble Sort",
  fn: () => {
    const array: number[] = [2, 4, 8, 12, 19];
    const actual = bubbleSort(array);
    const result = array.sort((a, b) => a > b ? 1 : -1);
    console.log(result);
    assertEquals(actual, result);
  },
});
