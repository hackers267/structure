export class Queue<T> {
  private data: T[] = [];
  public head: T;
  public size: number = 0;
  constructor(data: T[]) {
    this.data = data.slice();
    this.head = data.slice()[0];
    this.updateSize();
  }
  private updateHead() {
    this.head = this.data.slice()[0];
  }
  private updateSize() {
    this.size = this.data.length;
  }
  public dequeue(): T {
    if (this.isEmpty()) {
      throw new RangeError(`The Queue is Empty!`);
    }
    const result = this.head;
    this.data.shift();
    this.updateSize();
    this.updateHead();
    return result;
  }
  public enqueue(item: T) {
    this.data.push(item);
    this.updateSize();
  }

  public isEmpty() {
    return this.size === 0;
  }
}
