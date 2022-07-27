let userInput: unknown;
let userIdName: string;

userInput = 5;
userInput = "Tomek";

// userName = userInput !!!ERROR!!!

if (typeof userInput === "string") {
  userIdName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
