console.log("Generic")


const fruits : Array<string> = [];

fruits.push("apple");
fruits.push("mango");

console.log(fruits)


type Person = {
    name: string;
    age: number;
}

const people : Array<Person> = [{name: "Pranay", age: 21}]

console.log(people);



function merge<T, U>(obj1 : T, obj2 : U){
    return {...obj1, ...obj2}
}

const res = merge({name: "Pranay"}, {role: "software developer"})
console.log(res);



// Generic constraints

function createObject<T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V) : {key: T, value: U, isActive: V }{
    return {key, value, isActive};
}

const obj = createObject("hello", 91, true);
console.log(obj)



// Generic Interface

interface Box<T> {
    value : T
}
const numberBox : Box<number> = {value: 100};
console.log(numberBox)

const stringBox : Box<string> = {value: "Dummy"}
console.log(stringBox)



// Generic default

interface User<T = string> {                     // if not mentioned then string
    data: T,
    status: number
}

const response : User = {data: "Success", status: 200}       // default to string
console.log(response)

type Person2 = {
    name: string,
    age: number,
}

const jsonRes : User<Person2> = {data: {name: "hey", age: 21}, status: 200}   // object mentioned 

console.log(jsonRes)



// Generic with class

class Container<T> {
    private content: T;
    constructor(content: T){
        this.content = content
    }

    getContent() : T {
        return this.content
    }
}

const stringContainer = new Container<string>("Hello")
console.log(stringContainer.getContent());

const numberContainer = new Container<number>(100)
console.log(numberContainer.getContent())


// Generic with array

function getFirst<T>(arr: T[]) : T {
    return arr[0];
}

const firstNum = getFirst([1,2,3,4,5])
const firstString = getFirst(['a', 'b', 'c'])

console.log(firstNum)
console.log(firstString)



// Generic with keyof

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) : T[K]{
    return obj[key]
}

const person = {name: "Motu", age : 21};
const name1 = getProperty(person, "name")
const age = getProperty(person, "age")
console.log(name1, age)


