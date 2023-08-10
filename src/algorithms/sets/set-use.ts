import { log } from "console";

interface IITem {
  [key: string]: any;
}

export class Set {
  items: IITem;

  constructor() {
    this.items = {};
  }

  add(element: any) {
    if (this.has(element)) {
      return false;
    }

    this.items[element] = element;
    return true;
  }

  delete(element: any) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  has(element: any) {
    return element in this.items;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet: Set) {
    const unionSet = new Set();

    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet: Set) {
    const intersectionSet = new Set();
    const thisItemsValues = this.values();

    for (let i = 0; i < thisItemsValues.length; i++) {
      const currentValue = thisItemsValues[i];
      if (otherSet.has(currentValue)) {
        intersectionSet.add(currentValue);
      }
    }

    return intersectionSet;
  }

  peformedIntersection(otherSet: Set) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
  }

  difference(otherSet: Set) {
    const differenceSet = new Set();

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet: Set) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;

    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });

    return isSubset;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }
}

/* Subset of Set */
// const setA = new Set();
// const setB = new Set();
// const setC = new Set();
//
// [1, 2].forEach((value) => setA.add(value));
// [1, 2, 3].forEach((value) => setB.add(value));
// [2, 3, 4].forEach((value) => setC.add(value));
//
// log(setA.isSubsetOf(setB));
// log(setA.isSubsetOf(setC));
// log(setB.isSubsetOf(setC));

/* Difference Set */
// const setA = new Set();
// const setB = new Set();
//
// [1, 2, 3, 10].forEach((value) => setA.add(value));
// [2, 3, 4, 5, 6].forEach((value) => setB.add(value));
//
// const differenceAB = setA.difference(setB);
// log(differenceAB.values());

/* Intersection Set */
// const setA = new Set();
// const setB = new Set();
//
// [1, 2, 3].forEach((value) => setA.add(value));
// [2, 3, 4, 5, 6].forEach((value) => setB.add(value));
//
// const intersectionAB = setA.intersection(setB);
// log(intersectionAB.values());

/* Union Set */
// const setA = new Set();
// const setB = new Set();
//
// [1, 2, 3].forEach((value) => setA.add(value));
// [3, 4, 5, 6].forEach((value) => setB.add(value));
//
// const unionAB = setA.union(setB);
// log(unionAB.values());
