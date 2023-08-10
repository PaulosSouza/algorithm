import { defaultEquals } from "../../utils/defaultEquals";
import { Node } from "./models";

export class LinkedList {
  count: number;
  head: Node | undefined;
  equalsFn: typeof defaultEquals;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: unknown) {
    const node = new Node(element);

    if (this.head === undefined) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next !== undefined) {
      current = current.next;
    }

    current.next = node;

    this.count++;
  }

  removeAt(index: number) {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current?.next;

      return current;
    }

    const previous = this.getElementAt(index - 1);
    current = previous?.next;

    if (previous) {
      previous.next = current?.next;
    }

    this.count--;

    return current?.element;
  }

  getElementAt(position: number) {
    if (position < 0 || position > this.count) {
      return undefined;
    }

    let node = this.head;

    for (let index = 0; index < position && node !== undefined; index++) {
      node = node?.next;
    }

    return node;
  }

  insert(element: unknown, index: number) {
    if (index < 0 && index > this.count) {
      return false;
    }

    const node = new Node(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1) as Node;
      const current = previous.next;

      node.next = current;
      previous.next = node;
    }

    this.count++;

    return true;
  }

  indexOf(element: unknown) {
    let current = this.head;

    for (
      let index = 0;
      (index < this.count && current !== null) || current !== undefined;
      index++
    ) {
      if (this.equalsFn(element, current?.element)) {
        return index;
      }

      current = current?.next;
    }

    return -1;
  }

  remove(element: unknown) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.count = 0;
    this.head = undefined;
  }

  toString() {
    if (!this.head) {
      return "";
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (
      let index = 1;
      (index < this.size() && current !== null) || current !== undefined;
      index++
    ) {
      objString = `${objString},${current?.element}`;
      current = current?.next;
    }

    return objString;
  }
}

// const linkedList = new LinkedList();
// linkedList.push(15);
// linkedList.push(10);
// linkedList.push(8);
// linkedList.push(1);
//
// linkedList.removeAt(3);
