// Deque is a double-ended queue
// It is possible to add and remove for both sides of the queue
export class Deque {
  count: number;
  lowestCount: number;

  items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element: unknown) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element: unknown) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastItem = this.count - 1;
    const result = this.items[lastItem];

    delete this.items[lastItem];
    this.count--;

    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastItem = this.size();
    return this.items[lastItem];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    return Object.values(this.items).join(",");
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

// const deque = new Deque();
// console.log("Is deque empty? -->", deque.isEmpty());
//
// deque.addBack("John");
// deque.addBack("Jack");
// console.log("Show me deque -->", deque.toString());
//
// deque.addBack("Camila");
// console.log("Show me deque -->", deque.toString());
//
// // deque.removeFront();
// // console.log("Show me deque -->", deque.toString());
//
// deque.removeBack();
// console.log("Show me deque -->", deque.toString());
//
// deque.addFront("Pedro");
// console.log("Show me deque -->", deque.toString());
