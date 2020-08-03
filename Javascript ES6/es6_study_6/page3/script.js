const numbers = [1, 3, 5, 7, 9];

// Find the multiples of 3 from the numbers array by using the find method, and assign them to the foundNumber constant
const foundNumber = numbers.find((number) => {
  return number % 3 === 0;
});

// Print foundNumber
console.log(foundNumber);


const characters = [
  {id: 1, name: "Ken the Ninja", age: 6},
  {id: 2, name: "Ben the Baby Ninja", age: 2},
  {id: 3, name: "Master White", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Find the object which id is 3 from the characters constant, and assign it to the foundCharacter constant
const foundCharacter = characters.find((character) => {
  return character.id === 3;
});

// Output foundCharacter
console.log(foundCharacter);
