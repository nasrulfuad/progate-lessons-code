// Import the chalk package
import chalk from 'chalk';

import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    const humanAge = this.getHumanAge();
    
    this.greet();
    // Rewrite the content of console.log using chalk
    console.log(chalk.yellow(`My name is ${this.name}`));
    
    // Rewrite the content of console.log using chalk
    console.log(chalk.bgCyan(`I am a ${this.breed}`));
    
    console.log(`I'm ${this.age} years old`);
     console.log(`I am ${humanAge} years old in human years`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;