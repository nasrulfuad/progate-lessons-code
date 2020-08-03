// Import readline-sync
import readlineSync from 'readline-sync';

import Dog from "../class/dog";

const dog1 = new Dog("Leo", 4, "Chihuahua");

// Rewrite using readlineSync.question
const name = readlineSync.question("Enter your name: ");

// Rewrite using readlineSync.questionInt
const age = readlineSync.questionInt("Enter your age: ");

// Rewrite using readlineSync.question
const breed = readlineSync.question("Enter your breed: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };