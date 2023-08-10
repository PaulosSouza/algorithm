/* eslint-disable @typescript-eslint/no-explicit-any */
interface IItem {
  [key: number]: any;
}

class NewStack {
  count: number;
  items: IItem;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: any) {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const deletedItem = this.items[this.count];
    delete this.items[this.count];

    return deletedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    // let objString = `${this.items[0]}`;
    //
    // for (let index = 1; index < this.count; index++) {
    //   objString = `${objString},${this.items[index]}`;
    // }

    const objString = Object.values(this.items).join(",");

    return objString;
  }
}

// const stack = new NewStack();
//
// symbolStack.push(5);
// symbolStack.push(8);
// symbolStack.push(12);
// symbolStack.push(13);

// console.log(symbolStack.toString());

export const Stack = NewStack;
