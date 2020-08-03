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
  // Add the constructor
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  
  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    // Ouptut 「I am a ____」
    console.log(`I am a ${this.breed}`);
    
    
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// Pass the string "Chihuahua" as an argument
const dog = new Dog("Leo", 4, 'Chihuahua');
dog.info();
