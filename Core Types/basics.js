"use strict";
function add1(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5; // 5.0 - the same
const number2 = 2.8;
const printResult1 = true;
const resultPhrase = "Result is: ";
add1(number1, number2, printResult1, resultPhrase);
