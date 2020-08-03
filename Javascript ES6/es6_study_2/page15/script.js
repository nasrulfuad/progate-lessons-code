const characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White", age: 100},
  {name: "Ben the Baby Ninja", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`My name is ${character.name}`);
  
  // Add an if statement below
  if(character.age === undefined) {
    console.log('My age is a secret!');
  }else{
    console.log(`I am ${character.age} years old`);
  }
  
}
