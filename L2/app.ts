// Object, Arrays, Tuple, Enum

const person : {
    firstName: string;
    age: number;
    xyz: {
        address: string;
    };
    skills: string[];
} = {
    firstName: "Pranay",
    age: 21,
    xyz: {
        address: "India"
    },
    skills: ["React", "Express", "MongoDB", "Node"]
};

console.log(person);
console.log("age: ", person.age)
console.log("address: ", person.xyz.address);
console.log("Skills: ", person.skills[2]);


let languages: string[];
languages =  ["Eng", "Hindi"];

let languages2: any[];
languages2 = ["Eng", 1, "Hindi", 2, false];



// Tuple: fixed array of types
const products: {
    product: [string, number, boolean];
} = {
    product: ["Apple", 10, false]
}
// products.product[1] = [30]   // Invalid

products.product = ["mango", 20, true]  // both items required to assign value

console.log(products.product)


// enum

enum Role {admin, moderator};

const user = {
    role: Role.admin
}
if(user.role === Role.admin){
    console.log("Admin");
} else if(user.role === Role.moderator) {
    console.log("Moderator");
}


