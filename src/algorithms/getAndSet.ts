class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return `Hello ${this._name}`;
  }

  set name(newValue) {
    this._name = newValue;
  }
}

const frodo = new Person("Frodo");
frodo.name = "Disney";

// console.log(frodo.name);
