// function

// function return type
function add(n1: number, n2: number) : number {
    return n1 + n2;
}
console.log(add(3,4));

function greet(name: string) : void {      // return type void if it does not return anything
    console.log(`Hi, ${name}`)
}



let takeFunction: Function;     // not good practice bcoz no mention of parameters so many function can be assigned of various return types
// takeFunction = 5  //invalid
takeFunction = add;
takeFunction = greet;


let goodFunction: (a: number, b: number) => number;
// goodFunction = greet   // invalid
goodFunction = add 
console.log(goodFunction(6,7))


// Function types and call backs
function addHandle(num1: number, num2: number, cb: (n: number) => void){
    const result = num1 + num2;
    cb(result);
}
addHandle(2,3, (result: number) => {
    console.log(result);
})