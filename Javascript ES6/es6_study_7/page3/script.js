const printKen = () => {
  console.log("Ken the Ninja");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

call(printKen);

// Declare the function in the argument and pass it
call(() => {
  console.log('Master White');
});
