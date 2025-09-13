// function
// function return type
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(3, 4));
function greet(name) {
    console.log("Hi, ".concat(name));
}
var takeFunction; // not good practice bcoz no mention of parameters so many function can be assigned of various return types
// takeFunction = 5  //invalid
takeFunction = add;
takeFunction = greet;
var goodFunction;
// goodFunction = greet   // invalid
goodFunction = add;
console.log(goodFunction(6, 7));
// Function types and call backs
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(2, 3, function (result) {
    console.log(result);
});
