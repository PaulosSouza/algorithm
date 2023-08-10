type UndefinedNode = Node | undefined;

export class Node {
  element: unknown;

  next: Node | undefined;

  constructor(element: unknown, next: UndefinedNode = undefined) {
    this.element = element;
    this.next = next;
  }
}

export class DoublyNode extends Node {
  prev: DoublyNode | undefined;

  constructor(
    element: unknown,
    next: DoublyNode | undefined = undefined,
    prev: DoublyNode | undefined = undefined
  ) {
    super(element, next);
    this.prev = prev;
  }
}
