// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person: string = "Muhammad Ibrahim";
let lowerCase = person.toLowerCase();
let upperCase = person.toUpperCase();
let titleCase = person.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);