import { Queue } from "../Queue.ts";

export function merge<T>(leftArray: T[], rightArray: T[]): T[] {
  const result: T[] = [];
  const lQueue = new Queue(leftArray);
  const rQueue = new Queue(rightArray);
  const length = leftArray.length + rightArray.length;
  for (let i = 0; i < length; i++) {
    if (lQueue.isEmpty()) {
      result.push(rQueue.dequeue());
      continue;
    }
    if (rQueue.isEmpty()) {
      result.push(lQueue.dequeue());
      continue;
    }
    const lHead = lQueue.head;
    const rHead = rQueue.head;
    if (lHead < rHead) {
      result.push(lHead);
      lQueue.dequeue();
    } else {
      result.push(rHead);
      rQueue.dequeue();
    }
  }
  console.log(result);
  return result;
}
