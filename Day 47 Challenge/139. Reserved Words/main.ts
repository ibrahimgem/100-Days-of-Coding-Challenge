// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.


// These are three reseverd words in JavaScript.
//1. function

function sum(num1:number, num2:number) {
    return num1 + num2;
}
console.log(sum(5,2));

//2. if

function ageValidation(age: number) {
    if (age >= 18) {
        console.log(`You are an adult.`);
    } else {
        console.log(`You are underage.`);
    }
}

(ageValidation(19));

//3. return

function hello(person:string) {
    return `Hello ${person}, Welcome.`
}

console.log(hello("Ibrahim"));
