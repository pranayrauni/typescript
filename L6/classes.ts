console.log("hello from classes")

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
    name: string;
    protected employees: string[];
    private readonly id: string;
    constructor(id: string, n: string){
        this.name = n;
        this.id = id;
        this.employees = [];
    }
    describe(this: Department){
        console.log("Department: ", this.name);
    }

    addEmployee(emp: string){
        this.employees.push(emp);
    }

    printEmpInfo(){
        console.log("Number of employee: ", this.employees.length);
        console.log(this.employees)
    }
}


class electrical extends Department{
    constructor(id: string, private reports: string[]){
        super(id, "Electrical report")
    }

    addReport(text: string){
        this.reports.push(text)
    }

    printReport(){
        console.log(this.reports)
    }

    addEmployee(emp: string) : void {           // override
        if(emp === "pranay"){
            return;
        }
        this.employees.push(emp);
    }
    
    get getReport(){
            if(this.reports.length > 0){
                return this.reports
            }
            throw new Error("Reports not found")
    }

    set setReport(value: string){
        if(!value){
            throw new Error("Please pass valid value")
        }
        this.reports.push(value);
    }
}

const elect = new electrical("d1", []);
elect.describe()

elect.addReport("line fault")
elect.printReport()

elect.addEmployee("pranay");
elect.addEmployee("motu")
elect.printEmpInfo()

console.log("getter ", elect.getReport)
elect.setReport = "this is report setter";
console.log("getter after setter ", elect.getReport)




// static method

class Department2 {
    name: string;
    protected employees: string[];
    private readonly id: string;
    constructor(id: string, n: string){
        this.name = n;
        this.id = id;
        this.employees = [];
    }
    describe(this: Department2){
        console.log("Department: ", this.name);
    }

    addEmployee(emp: string){
        this.employees.push(emp);
    }

    printEmpInfo(){
        console.log("Number of employee: ", this.employees.length);
        console.log(this.employees)
    }

    static getSalary(){
        return {salary: 500000}
    }
}

const salary = Department2.getSalary();
console.log(salary)


// abstract class

abstract class Department3{
    name: string;
    protected employees: string[] = [];
    protected readonly id : string;

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    abstract describe(this:Department3) : void;
    abstract displayName() : void;
}


class Subclass extends Department3 {
    constructor(id: string, private reports : string[]){
        super(id, "mechanical")
    }

    describe() : void {
        console.log("Department ", this.id)
    }

    displayName(): void {
        console.log(this.name)
    }
}

const subclass = new Subclass("mechanical", []);
subclass.describe();