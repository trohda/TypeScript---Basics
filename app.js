//return number
function add(n1, n2) {
    return n1 + n2;
}
// void
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;  !!!ERROR!!!
// combineValues = 5;  !!!ERROR!!!
console.log(combineValues(8, 8));
