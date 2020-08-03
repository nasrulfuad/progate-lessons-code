const printKen = () => {
  console.log("Ken the Ninja");
};

const printMaster = () => {
  console.log("Master White");
};

const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};

// Rewrite the argument as printMaster and confirm the output
call(printMaster);
