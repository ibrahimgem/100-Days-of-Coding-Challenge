// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.

let multipleParams = (...nums: number[]) => {
    return nums.reduce((total, num) => total * num, 1);
}
console.log(multipleParams(2, 4, 5, 2));