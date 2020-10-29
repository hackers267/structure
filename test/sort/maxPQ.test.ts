import { assertEquals } from "../test.deps.ts";
import { MaxPQ } from "../../src/sort/maxPQ.ts";

function assertMaxAndSize(
  maxPQ: MaxPQ<number>,
  expect: { size: number; max: number },
) {
  const max = maxPQ.max();
  assertEquals(maxPQ.size(), expect.size);
  assertEquals(max, expect.max);
}

Deno.test({
  name: "maxPQ",
  fn() {
    const maxPQ = new MaxPQ<number>([1, 2, 3, 4, 5, 6, 7]);
    assertMaxAndSize(maxPQ, { size: 7, max: 7 });
    maxPQ.insert(8);
    assertMaxAndSize(maxPQ, { size: 8, max: 8 });
    maxPQ.insert(6);
    assertMaxAndSize(maxPQ, { size: 9, max: 8 });
    const max = maxPQ.delMax();
    assertEquals(max, 8);
    assertMaxAndSize(maxPQ, { size: 8, max: 7 });
  },
});
