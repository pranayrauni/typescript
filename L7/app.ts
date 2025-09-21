console.log("Type Guards")

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable){
    // type guard
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add(4, 5))   // 9
console.log(add("4", 5)) // 45


type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1 : ElevatedEmployee = {
    name:  "Pranay",
    privileges: ['create'],
    startDate: new Date(),
}

function printEmpInfo(emp: UnknownEmployee){
    console.log("Name: ", emp.name);

    // console.log("Privilages", emp.privileges)     // error bcoz it does not know whether unknown employee is Admin or Employee

    if("privileges" in emp){
        console.log(emp.privileges)
    }

    if("startDate" in emp){
        console.log(emp.startDate)
    }
}

printEmpInfo(emp1)
printEmpInfo({name: "Aman", startDate: new Date()});



// Type Guard in class

class Car {
    drive(){
        console.log("driving a car....")
    }
}

class Truck {
    drive(){
        console.log("driving a truck....")
    }

    loadCargo(amount: number){
        console.log("Loading cargo ", amount)
    }
}

type Vechile = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechile(vechile: Vechile){
    vechile.drive();

    if('loadCargo' in vechile){
        vechile.loadCargo(500)
    }

    if(vechile instanceof Truck){         // another way
        vechile.loadCargo(1000)
    }

}

useVechile(v1)
useVechile(v2)