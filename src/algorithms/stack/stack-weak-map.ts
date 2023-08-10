const items = new WeakMap();

class StackWeakMap {
  constructor() {
    items.set(this, []);
  }

  push(element: any) {
    const thisArray = items.get(this);
    thisArray.push(element);
  }

  pop() {
    const thisArray = items.get(this);
    const popedItem = thisArray.pop();

    return popedItem;
  }

  print() {
    const thisArray = items.get(this);
    return thisArray.join(",");
  }
}

const stackWeakMap = new StackWeakMap();

stackWeakMap.push(1);
stackWeakMap.push(2);

// console.log(stackWeakMap.print());
