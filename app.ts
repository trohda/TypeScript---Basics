//Type Aliases custom type
type Combinable = number | string;

//Type Aliases object type
type User = { name: string; age: number };

const u1: User = { name: "Max", age: 30 };

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
  //   if (resultConversion == "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Tomek", "Gosia", "as-text");
console.log(combineNames);
