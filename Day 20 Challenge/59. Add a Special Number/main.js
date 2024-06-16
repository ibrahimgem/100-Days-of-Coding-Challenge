"use strict";
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function adder(num) {
    return function (num2) {
        return num + num2;
    };
}
let addSeven = adder(7);
console.log(addSeven(9));
