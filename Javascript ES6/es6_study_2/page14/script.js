const characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White", age: 100},
  {name: "Ben the Baby Ninja", age: 5},
  // Add an element here
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`My name is ${character.name}`);
  console.log(`I am ${character.age} years old`);
}
