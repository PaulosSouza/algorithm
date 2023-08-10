interface IComparable<T> {
  compareTo(toCompare: T): number;
}

class MyObject implements IComparable<MyObject> {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  compareTo(toCompare: MyObject): number {
    if (this.age === toCompare.age) {
      return 0;
    }

    return this.age > toCompare.age ? 1 : -1;
  }
}

const obj = new MyObject(130);
const obj2 = new MyObject(140);

// console.log(obj, obj2);
