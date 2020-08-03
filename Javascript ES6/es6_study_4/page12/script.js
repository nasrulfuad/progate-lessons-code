class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Hello");
  }
  
  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

class Dog extends Animal {
  // Add the getHumanAge method
  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("Leo", 4);
dog.info();

// Call the dog instance's getHumanAge method
const humanAge = dog.getHumanAge();

// Output 「I am __ years old in human years」
console.log(`I am ${humanAge} years old in human years`);
