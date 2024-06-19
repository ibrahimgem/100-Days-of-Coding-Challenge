// Question 145: Create a function that accepts a callback and invokes it with some arguments.

// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.


function greet(callback: any) {
    const str1: string = "Hello";
    const str2: string = "World";
    callback(str1, str2);
}

function myCall(txt1: string, txt2: string) {
    console.log(txt1 + " " + txt2);
    
}

greet(myCall);