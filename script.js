//Destructuring
console.log("Java Script");
let ar = ["cvr", 1111, "cvr@cvr"];

// let name = ar[0];
// let phone = ar[1]
// let email = ar[2]

let [name, phone, email] = ar;
console.log( name, phone, email)

let person = {
    "name" : "dev"
}
console.log(person.name);