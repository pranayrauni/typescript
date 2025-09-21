var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Generic");
var fruits = [];
fruits.push("apple");
fruits.push("mango");
console.log(fruits);
var people = [{ name: "Pranay", age: 21 }];
console.log(people);
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var res = merge({ name: "Pranay" }, { role: "software developer" });
console.log(res);
// Generic constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("hello", 91, true);
console.log(obj);
var numberBox = { value: 100 };
console.log(numberBox);
var stringBox = { value: "Dummy" };
console.log(stringBox);
var response = { data: "Success", status: 200 }; // default to string
console.log(response);
var jsonRes = { data: { name: "hey", age: 21 }, status: 200 }; // object mentioned 
console.log(jsonRes);
// Generic with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getContent());
var numberContainer = new Container(100);
console.log(numberContainer.getContent());
// Generic with array
function getFirst(arr) {
    return arr[0];
}
var firstNum = getFirst([1, 2, 3, 4, 5]);
var firstString = getFirst(['a', 'b', 'c']);
console.log(firstNum);
console.log(firstString);
// Generic with keyof
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Motu", age: 21 };
var name1 = getProperty(person, "name");
var age = getProperty(person, "age");
console.log(name1, age);
