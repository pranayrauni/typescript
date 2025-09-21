console.log("Type Guards");
function add(a, b) {
    // type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(4, 5)); // 9
console.log(add("4", 5)); // 45
var emp1 = {
    name: "Pranay",
    privileges: ['create'],
    startDate: new Date(),
};
function printEmpInfo(emp) {
    console.log("Name: ", emp.name);
    // console.log("Privilages", emp.privileges)     // error bcoz it does not know whether unknown employee is Admin or Employee
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
printEmpInfo(emp1);
printEmpInfo({ name: "Aman", startDate: new Date() });
// Type Guard in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck....");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVechile(vechile) {
    vechile.drive();
    if ('loadCargo' in vechile) {
        vechile.loadCargo(500);
    }
    if (vechile instanceof Truck) { // another way
        vechile.loadCargo(1000);
    }
}
useVechile(v1);
useVechile(v2);
