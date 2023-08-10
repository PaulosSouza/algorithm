/*
 * Queue is based of FIFO (First In First Out)
 * Or first-come first-served
 */
export class Queue {
  count: number;
  lowestCount: number;

  items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: unknown) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  // return the front element of queue
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  // clear the queue
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // return a string which each value is separated with comma
  toString() {
    if (this.isEmpty()) {
      return "";
    }

    return Object.values(this.items).join(",");
  }
}

// const queue = new Queue();
// console.log("Is queue empty? -->", queue.isEmpty());
//
// queue.enqueue("John");
// queue.enqueue("Jack");
// console.log("Show me queue elements -->", queue.toString());
//
// queue.enqueue("Camila");
// console.log("Show me queue elements -->", queue.toString());
// console.log("Queue size -->", queue.size());
// console.log("Is queue empty? -->", queue.isEmpty());
//
// queue.dequeue();
// queue.dequeue();
//
// console.log("Show me queue elements -->", queue.toString());
