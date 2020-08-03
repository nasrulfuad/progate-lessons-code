class Animal {
  constructor() {
      this.name = 'Leo';
      this.age = 3;
  }
}

const animal = new Animal();

// Output 「Name: ____」
console.log(`Name: ${animal.name}`);

// Output 「Age: __」
console.log(`Age: ${animal.age}`);
