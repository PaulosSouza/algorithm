/* eslint-disable @typescript-eslint/no-explicit-any */

const _items: unique symbol = Symbol("newItems");

class SymbolStack {
  public [_items]: any[];

  constructor() {
    this[_items] = [];
  }

  push(item: any) {
    this[_items].push(item);
  }
}

// const symbolStack = new SymbolStack();
//
// symbolStack.push(3);
// symbolStack.push(8);
//
// const objectSymbols = Object.getOwnPropertySymbols(symbolStack);
//
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
