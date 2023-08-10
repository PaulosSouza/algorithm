/* eslint-disable @typescript-eslint/no-explicit-any */
class Stack {
  public items: any[];

  constructor() {
    this.items = [];
  }

  push(element: any) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// const stack = new Stack();
// console.log(1, { isEmpty: stack.isEmpty() });
//
// stack.push(5);
// stack.push(8);
//
// console.log(2, { peek: stack.peek() });
//
// stack.push(11);
//
// console.log(3, { size: stack.size() });
// console.log(4, { isEmpty: stack.isEmpty() });
//
// stack.push(15);
//
// stack.pop();
// stack.pop();
//
// console.log(6, { size: stack.size() });
