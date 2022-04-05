let obj = {};

obj.name = "Antonio";
obj.age = 34;

console.log(obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = {
    name: "Antonio",
    lastName: "Neves",
    age: 34,
    address: "Rua cinco"
}

console.log(person.address);
console.log(person["lastName"]);

person.mom = "Carolina";

console.log(person);
