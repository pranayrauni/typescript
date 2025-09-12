// data types: number, string, boolean
function add(num1, num2, printRes, text) {
    if (printRes) {
        return num1 + num2;
    }
    else {
        console.log("printRes false");
        console.log("Some of", "".concat(text, " ").concat(num1 + num2));
    }
}
var printRes = true;
var text = "two numbers is ";
console.log(add(5, 5, printRes, text));
