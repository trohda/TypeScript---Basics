//return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;  !!!ERROR!!!
// combineValues = 5;  !!!ERROR!!!

console.log(combineValues(8, 8));
