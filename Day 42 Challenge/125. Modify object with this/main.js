"use strict";
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
let person = {
    name: "Ibrahim",
    age: 27,
    message: function () {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(person.message());
