const characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White", age: 100},
  {name: "Ben the Baby Ninja", age: 5},
];

// Complete the for loop
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // Define the character constant
  const character = characters[i];
  
  // Print "My name is ____"
  console.log(`My name is ${character.name}`);
  
  // Print "I am ____ years old"
  console.log(`I am ${character.age} years old`);
  
}
