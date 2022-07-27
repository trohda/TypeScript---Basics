"use strict";
//return number
function add(n1, n2) {
    return n1 + n2;
}
// void
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult;  !!!ERROR!!!
// combineValues = 5;  !!!ERROR!!!
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
