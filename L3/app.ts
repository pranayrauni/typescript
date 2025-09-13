// union

function combine(num1: number | string, num2: number | string){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
        result = num1 + num2
    } else {
        result = num1.toString() + num2.toString()
    }
    return result;
}

console.log("Sum ", combine(2,3), " combined ", combine("pranay", "singh"))


// Literal type
function combine1(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string"){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
        result = +num1 + +num2
    } else {
        result = num1.toString() + num2.toString()
    }
    return result;
}

const sum1 = combine1(10, "20", "as-number")
const sum2 = combine1(4,5, "as-number")
const combinedName = combine1("pranay ", "singh", "as-string")
console.log(sum1, sum2, combinedName)




// Type alias / custome types
// jab type jyada ho jaye to usko ek naam de sakte hai
type combinable = number | string      // taken from last code example

type User = {
    name: string;
    age: number;
}

const user: User = {
    name: "Pranay",
    age: 21,
}

function greet(user: User){
    console.log(`Hi, I am ${user.name}`)
}
greet(user);