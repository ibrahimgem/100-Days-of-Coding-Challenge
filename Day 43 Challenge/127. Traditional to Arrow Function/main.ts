// Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.

function traditionalFunction (a:  number, b: number) {
    return console.log(a + b);
}
traditionalFunction(2, 5);


let arrowFunction = (a: number, b: number) => {
    return console.log(a + b);
}
arrowFunction(25, 12);