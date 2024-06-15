"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
function arrayOfGreaterThan10(nums) {
    return nums.filter(nums => nums > 10);
}
let nums = [10, 22, 5, 7, 24, 11, 39];
console.log(arrayOfGreaterThan10(nums));
