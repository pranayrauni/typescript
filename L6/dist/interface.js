console.log("this Interfaces");
let user;
user = {
    name: "Pranay",
    age: 21,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
console.log(user);
user.greet("Hi, I am ");
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} ${this.name}`);
    }
}
const p1 = new Person("Aman");
p1.greet("Good morning ");
class Person1 {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} ${this.name}`);
    }
}
let user1;
user1 = new Person("singh");
class Person2 {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text}, ${this.name}`);
    }
}
let user2;
user2 = new Person2("Patlu");
console.log(user2);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(1, 2));
class Person3 {
    constructor(n) {
        this.name = n;
    }
}
export {};
