const numbers = [1, 2, 3, 4];

// Get all even numbers from numbers with the filter method, and assign them to the evenNumbers constant
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// Print the value of evenNumbers
console.log(evenNumbers);


const characters = [
  {id: 1, name:"Ken the Ninja", age: 14},
  {id: 2, name:"Ben the Baby Ninja", age: 5},
  {id: 3, name:"Master White", age: 100}
];

// Get characters younger than 20, and assign them to the underTwenty constant
const underTwenty = characters.filter((character) => {
  return character.age < 20;
});

// Print the value of underTwenty
console.log(underTwenty);
