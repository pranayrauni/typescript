// union
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log("Sum ", combine(2, 3), " combined ", combine("pranay", "singh"));
// Literal type
function combine1(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine1(10, "20", "as-number");
var sum2 = combine1(4, 5, "as-number");
var combinedName = combine1("pranay ", "singh", "as-string");
console.log(sum1, sum2, combinedName);
var user = {
    name: "Pranay",
    age: 21,
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
