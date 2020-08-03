const call = (callback) => {
  callback("Ken the Ninja", 14);
};

// Add two parameters to the callback function inside this function call
call((name, age) => {
  console.log(`${name} is ${age} years old.`);
});
