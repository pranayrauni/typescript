// uknown never any
var userInput;
var userName;
userInput = 10;
userName = "pranay";
// userName = userInput   // not assignable
userInput = userName; // valid
var myName;
myName = userInput; // valid 
userInput = myName; // valid
myName = userName; // valid
userName = myName; // valid
console.log("userInput ", userInput);
console.log("userName ", userName);
// return type never
function generateError(message, code) {
    throw { message: message, statusCode: code };
    // eske aage koi code likhne pe v nhi chalega
    console.log("first");
}
var res = generateError("Internal server error", 500);
console.log(res);
