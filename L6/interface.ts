console.log("this Interfaces")

// we write representation of objects inside interfaces. Interface does not have initializer like class. Use type instead of interface when there is more than one type.
// Prefer      interface when representing object

interface Person {
    name: string;
    age: number;
    greet(text: string) : void;
}

let user : Person;

user = {
    name: "Pranay",
    age: 21,
    greet(text) :void {
        console.log(`${text} ${this.name}`)
    },
}

console.log(user);
user.greet("Hi, I am ")



// we can acces interface from class

interface Greetable {
    name: string;
    greet(text: string) : void
}

class Person implements Greetable {
    name: string;
    constructor(n: string){
        this.name = n;
    }
    greet(text: string): void {
        console.log(`${text} ${this.name}`)
    }
}

const p1 = new Person("Aman");
p1.greet("Good morning ")



// readonly

interface Greetable1 {
    readonly name: string;
    greet(text: string) : void
}

class Person1 implements Greetable1 {
    name: string;
    constructor(n: string){
        this.name = n;
    }
    greet(text: string): void {
        console.log(`${text} ${this.name}`)
    }
}

let user1 : Greetable1;
user1 = new Person("singh");

// user1.name = "hello"   // can not be assigned due to read only




// Extending interface

interface Named {
    readonly name: string
}

interface Greetable2 extends Named {
    greet(text: string) : void
}

class Person2 implements Greetable2 {
    name: string;
    constructor(n: string){
        this.name = n;
    }

    greet(text: string): void {
        console.log(`${text}, ${this.name}`)
    }
}

let user2 : Greetable2;
user2 = new Person2("Patlu")
console.log(user2)



interface addFunc{
    (a: number, b: number) : number;
}

let add : addFunc;
add = (n1: number, n2: number) => {
    return n1 + n2
}

console.log(add(1, 2))



// optional(?)
interface Named1 {
    name: string;
    outputName ?: string;
}

class Person3 implements Named1 {
    name: string;
    constructor(n :string){
        this.name = n;
    }
}
