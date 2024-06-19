"use strict";
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.
function greet(callback) {
    const str1 = "Hello";
    const str2 = "World";
    callback(str1, str2);
}
function myCall(txt1, txt2) {
    console.log(txt1 + " " + txt2);
}
greet(myCall);
