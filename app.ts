let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Tomek";

// userName = userInput !!!ERROR!!!

if (typeof userInput === "string") {
  userName = userInput;
}
