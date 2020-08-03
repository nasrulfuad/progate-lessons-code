const check = (number) => {
  // Check whether or not number is a multiple of 3 and return the result
  return number % 3 === 0;
};

// Call the check function in the condition of the if statement
if ( check(123) ) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}
