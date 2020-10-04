import { merge } from "../../src/utils/merge.ts";
import { assertEquals } from "../../deps.ts";

Deno.test({
  name: "merge",
  fn() {
    const leftArray = [1, 3, 5, 7];
    const rightArray = [2, 4, 6, 8, 10];
    const actual = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    const result = merge(leftArray, rightArray);
    assertEquals(actual, result);
  },
});
