import { assertEquals } from "../deps.ts";
import { Queue } from "../src/Queue.ts";

function init(data = [1, 2, 3, 4]): Queue<keyof typeof data> {
  return new Queue(data);
}
interface Test {
  name: string;
  fn: () => void;
}
const test: Test[] = [
  {
    name: "init queue",
    fn: () => {
      const queue = init();
      assertEquals(queue.head, 1);
      assertEquals(queue.size, 4);
    },
  },
  {
    name: "queue dequeue",
    fn() {
      const queue = init();
      queue.dequeue();
      assertEquals(queue.head, 2);
      assertEquals(queue.size, 3);
    },
  },
  {
    name: "queue enqueue",
    fn() {
      const queue = init();
      queue.enqueue(5);
      assertEquals(queue.size, 5);
    },
  },
  {
    name: "queue isEmpty",
    fn() {
      const queue = init([]);
      assertEquals(queue.isEmpty(), true);
    },
  },
];

for (const t of test) {
  Deno.test({
    name: t.name,
    fn: t.fn,
  });
}
