"use strict";
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [{ make: "HP", model: "ProBook 820", year: "2020" }, { make: "Dell", model: "Inspiron", year: "2022" }, { make: "Apple", model: "MacBook Pro", year: "2023" }
];
let [laptop1, laptop2] = laptops;
console.log(`There are 2 laptops in the store. The first laptop is a ${laptop1.make} ${laptop1.model} of ${laptop1.year}. The second laptop is a ${laptop2.make} ${laptop2.model} of ${laptop2.year}`);
