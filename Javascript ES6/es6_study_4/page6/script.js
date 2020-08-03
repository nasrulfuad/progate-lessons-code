class Animal {
  // Add the arguments 「name」and「age」
  constructor(name, age) {
    // Replace the string value "Leo" with the value of the name argument
    this.name = name;
    
    // Replace the  value 「3」 with the value of the age argument
    this.age = age;
  }
}

// Pass the arguments 「"Mocha"」 「8」
const animal = new Animal('Mocha', 8);

console.log(`Name: ${animal.name}`);
console.log(`Age: ${animal.age}`);
