console.log("hello from classes");
/* Use --watch for auto-compilation.

   tsc classes.ts --watch

*/
/* For compiling more than one file at the same time tsconfig.json is required.
    tsc --init    creates tsconfig.json.
    tsc --watch   all ts files in that folder wll be on watch mode.


    crete exclude or include for specific file in tsconfig.josn

    "include": ["abc.xyz", "b.xyz"]
    "exclude": ["def.xyz", "file.xyz", "node_modules"]

    To exclude all files with same extension
    "exclude": ["**.abc"]
*/
// classes
// class Department {
//     name: string;
//     constructor(n: string){
//         this.name = n;
//     }
//     describe(){
//         console.log("Department: ", this.name);
//     }
// }
// const accounting = new Department("accounting");
// accounting.describe(); 
// const accountingCopy = {
//     name: "Computer science",
//     describe: accounting.describe
// }
// accountingCopy.describe()
// access modifiers
// class Department {
//     name: string;
//     private employees: string[];
//     constructor(n: string){
//         this.name = n;
//         this.employees = [];
//     }
//     describe(){
//         console.log("Department: ", this.name);
//     }
//     addEmployee(emp: string){
//         this.employees.push(emp);
//     }
//     printEmpInfo(){
//         console.log("Number of employee: ", this.employees.length);
//         console.log(this.employees)
//     }
// }
// const accounting = new Department("accounting");
// accounting.describe(); 
// accounting.addEmployee("pranay");
// accounting.printEmpInfo()
// accounting.employees = ['xyz']   // employees not accessible due to private
// readonly access modifier
// class Department {
//     name: string;
//     private employees: string[];
//     private readonly id: string;
//     constructor(n: string){
//         this.name = n;
//         this.id = "d1";           // only initialized once
//         this.employees = [];
//     }
//     describe(){
//         console.log("Department: ", this.name);
//         // this.id = "d2";         // can not be intialized mpre than once
//     }
//     addEmployee(emp: string){
//         this.employees.push(emp);
//     }
//     printEmpInfo(){
//         console.log("Number of employee: ", this.employees.length);
//         console.log(this.employees)
//     }
// }
// Inheritance
class Department {
    constructor(id, n) {
        this.name = n;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log("Department: ", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmpInfo() {
        console.log("Number of employee: ", this.employees.length);
        console.log(this.employees);
    }
}
class electrical extends Department {
    constructor(id, reports) {
        super(id, "Electrical report");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
    addEmployee(emp) {
        if (emp === "pranay") {
            return;
        }
        this.employees.push(emp);
    }
    get getReport() {
        if (this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Reports not found");
    }
    set setReport(value) {
        if (!value) {
            throw new Error("Please pass valid value");
        }
        this.reports.push(value);
    }
}
const elect = new electrical("d1", []);
elect.describe();
elect.addReport("line fault");
elect.printReport();
elect.addEmployee("pranay");
elect.addEmployee("motu");
elect.printEmpInfo();
console.log("getter ", elect.getReport);
elect.setReport = "this is report setter";
console.log("getter after setter ", elect.getReport);
// static method
class Department2 {
    constructor(id, n) {
        this.name = n;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log("Department: ", this.name);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmpInfo() {
        console.log("Number of employee: ", this.employees.length);
        console.log(this.employees);
    }
    static getSalary() {
        return { salary: 500000 };
    }
}
const salary = Department2.getSalary();
console.log(salary);
// abstract class
class Department3 {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
}
class Subclass extends Department3 {
    constructor(id, reports) {
        super(id, "mechanical");
        this.reports = reports;
    }
    describe() {
        console.log("Department ", this.id);
    }
    displayName() {
        console.log(this.name);
    }
}
const subclass = new Subclass("mechanical", []);
subclass.describe();
export {};
