import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

 info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I am a ${this.breed}`);
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;