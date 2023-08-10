import { defaultEquals } from "../../utils/defaultEquals";
import { LinkedList } from "./linkedList-use";
import { DoublyNode } from "./models";

export class DoublyLinkedList extends LinkedList {
  tail: DoublyNode | undefined;
  declare head: DoublyNode | undefined;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element: unknown, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head as DoublyNode | undefined;

      if (index === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head = node;

          if (current) {
            current.prev = node;
          }
        }
      } else if (index === this.count) {
        if (this.tail) {
          current = this.tail;
          current.next = node;
        }

        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous?.next as DoublyNode;

        node.next = current;

        if (previous) {
          previous.next = node;
        }

        if (current) {
          current.prev = node;
        }

        node.prev = previous as DoublyNode;
      }

      this.count++;

      return true;
    }

    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        if (current) {
          this.head = current.next as DoublyNode;
        }

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          if (this.head) {
            this.head.prev = undefined;
          }
        }
      } else if (index === this.count - 1) {
        current = this.tail;

        this.tail = current?.prev;

        if (this.tail) {
          this.tail.next = undefined;
        }
      } else {
        current = this.getElementAt(index) as DoublyNode | undefined;

        if (current) {
          const previous = current.prev;

          if (previous) {
            previous.next = current.next;
          }

          (current.next as DoublyNode).prev = previous;
        }
      }

      this.count--;
      return current?.element;
    }

    return undefined;
  }
}
