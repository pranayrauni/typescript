// data types: number, string, boolean

function add(num1: number, num2: number, printRes: boolean, text: string){
    if(printRes){
        return num1 + num2;
    } else {
        console.log("printRes false");
        console.log("Some of", `${text} ${num1 + num2}`)
    }
}
const printRes = false;
const text = "two numbers is "
console.log(add(5,5, printRes, text));