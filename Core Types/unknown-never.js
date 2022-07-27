"use strict";
let userInput;
let userIdName;
userInput = 5;
userInput = "Tomek";
// userName = userInput !!!ERROR!!!
if (typeof userInput === "string") {
    userIdName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
