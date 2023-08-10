import { defaultEquals } from "../../utils/defaultEquals";
import { LinkedList } from "./linkedList-use";

enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
}

function defaultCompare(positionA: number, positionB: number) {
  if (positionA === positionB) {
    return 0;
  }

  return positionA < positionB ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export class SortedLinkedList extends LinkedList {
  compareFn: typeof defaultCompare;

  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element: unknown, _index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }

    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element: unknown) {
    let current = this.head;
    let i = 0;

    for (; i < this.size() && current; i++) {
      const compared = this.compareFn(Number(element), Number(current.element));

      if (compared === Compare.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}
