"use strict";
// Question 137 Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
function testFunction() {
    if (Math.random() > 0.5) {
        throw new Error("An error occurred.");
    }
    else {
        return "Success";
    }
}
try {
    let result = testFunction();
    console.log(result);
}
catch (error) {
    console.error("There is an error.");
}
finally {
    console.log("This code is runs regardless error occurred or not.");
}
