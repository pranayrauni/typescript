// uknown never any

let userInput: unknown;

let userName: string;

userInput = 10;
userName = "pranay"

// userName = userInput   // not assignable

userInput = userName;     // valid


let myName: any;

myName = userInput   // valid 
userInput = myName   // valid

myName = userName    // valid
userName = myName    // valid

console.log("userInput ", userInput)       // pranay
console.log("userName ", userName)         // pranay



// return type never

function generateError(message: string, code: number) : never {
    throw {message: message, statusCode: code}
    // eske aage koi code likhne pe v nhi chalega
    console.log("first")
}
const res = generateError("Internal server error", 500)
console.log(res)