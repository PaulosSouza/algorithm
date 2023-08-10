import { defaultEquals } from "../../utils/defaultEquals";
import { LinkedList } from "./linkedList-use";
import { Node } from "./models";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element: unknown, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      let current = this.head;

      if (index === 0) {
        if (!this.head) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;

          if (current) {
            current.next = this.head;
          }
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous?.next;

        if (previous) {
          previous.next = node;
        }
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head?.next;

          if (current) {
            current.next = this.head;
            current = removed;
          }
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous?.next;

        if (previous) {
          previous.next = current?.next;
        }
      }

      this.count--;
      return current?.element;
    }

    return undefined;
  }
}
