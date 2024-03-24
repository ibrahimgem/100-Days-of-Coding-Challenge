"use strict";
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
let car = {
    name: "Audi",
    model: "e-tron GT",
    year: "2023",
    fuel: "Electric",
    transmission: "Automatic",
};
let conditionalTest = (car.name == "Audi" && car.model == "e-tron GT");
let conditionalTest1 = (car.name == "Honda" && car.model == "e-tron GT");
let conditionalTest2 = (car.model == "e-tron GT" || car.year == "2023");
let conditionalTest3 = (car.model == "Civic" || car.year == "2023");
let conditionalTest4 = (car.year == "2023" && car.fuel == "Automatic");
console.log(conditionalTest, conditionalTest1, conditionalTest2, conditionalTest3, conditionalTest4);
let fruits = ["Apple", "Mango", "Banana", "Strawberry"];
console.log(`Is there an 'Apple' in fruits? ${fruits.includes("Apple")}`);
console.log(`Is there a 'Watermelon' in fruits? ${fruits.includes("Watermelon")}`);
console.log(`Is not there a 'Watermelon' in fruits? ${!fruits.includes("Watermelon")}`);
console.log(5 < 0);
console.log(5 < 10);
