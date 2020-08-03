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
  // Add the info method
  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
    
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("Leo", 4);
dog.info();
