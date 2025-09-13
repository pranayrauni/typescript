// Object, Arrays, Tuple, Enum
var person = {
    firstName: "Pranay",
    age: 21,
    xyz: {
        address: "India"
    },
    skills: ["React", "Express", "MongoDB", "Node"]
};
console.log(person);
console.log("age: ", person.age);
console.log("address: ", person.xyz.address);
console.log("Skills: ", person.skills[2]);
var languages;
languages = ["Eng", "Hindi"];
var languages2;
languages2 = ["Eng", 1, "Hindi", 2, false];
// Tuple: fixed array of types
var products = {
    product: ["Apple", 10, false]
};
// products.product[1] = [30]   // Invalid
products.product = ["mango", 20, true]; // both items required to assign value
console.log(products.product);
// enum
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["moderator"] = 1] = "moderator";
})(Role || (Role = {}));
;
var user = {
    role: Role.admin
};
if (user.role === Role.admin) {
    console.log("Admin");
}
else if (user.role === Role.moderator) {
    console.log("Moderator");
}
