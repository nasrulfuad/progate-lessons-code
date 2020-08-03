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

// Export the Animal class
export default Animal;