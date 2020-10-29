interface MaxPQInter<K> {
  insert: (key: K) => void;
  max: () => K;
  delMax: () => K;
  isEmpty: () => boolean;
  size: () => number;
}

export class MaxPQ<T> implements MaxPQInter<T> {
  private readonly array: T[] = [];

  constructor();
  constructor(max: number);
  constructor(array: T[]);
  constructor(args?: number | T[]) {
    if (typeof args === "number") {
      this.array = new Array(args + 1);
    } else if (args instanceof Array) {
      this.insert(args[0]);
      args.forEach(
        ((value) => {
          this.insert(value);
        }),
      );
    }
  }

  private sink(index: number) {
    let { biggerValue, biggerKey } = getBigger(this.array, index);
    let value = this.array[index];
    if (biggerValue > value) {
      this.array[biggerKey] = value;
      this.array[index] = biggerValue;
      this.sink(biggerKey);
    }

    function getBigger(array: T[], index: number) {
      const leftKey = 2 * index;
      const rightKey = 2 * index + 1;
      let leftValue = array[leftKey];
      let rightValue = array[rightKey];
      let biggerValue = leftValue > rightValue ? leftValue : rightValue;
      let biggerKey = leftValue > rightValue ? leftKey : rightKey;
      return { biggerValue, biggerKey };
    }
  }

  private swim(index: number) {
    let v = this.array[index];
    const parentKey = Math.floor(index / 2);
    let parentValue = this.array[parentKey];
    if (parentKey > 0 && v > parentValue) {
      this.array[parentKey] = v;
      this.array[index] = parentValue;
      this.swim(parentKey);
    }
  }

  insert(key: T) {
    this.array.push(key);
    const index = this.array.length - 1;
    this.swim(index);
  }

  max() {
    return this.array[1];
  }

  delMax() {
    const max = this.max();
    const last = this.array.length - 1;
    this.array[1] = this.array[last];
    this.array.length -= 1;
    this.sink(1);
    return max;
  }

  isEmpty() {
    return this.size() <= 1;
  }

  size() {
    return this.array.length - 1;
  }
}
