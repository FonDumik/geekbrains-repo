function mathOperation(arg1, arg2, operation) {
  let c;

  switch (operation) {
    case "sum":
      c = arg1 + arg2;
      break;
    case "diff":
      c = arg1 - arg2;
      break;
    case "divide":
      c = arg1 / arg2;
      break;
    case "multiply":
      c = arg1 * arg2;
      break;
  }

  return c;
}

console.log(mathOperation(4, 2, "sum"));
console.log(mathOperation(4, 2, "diff"));
console.log(mathOperation(4, 2, "divide"));
console.log(mathOperation(4, 2, "multiply"));
