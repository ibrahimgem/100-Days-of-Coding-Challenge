"use strict";
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true; // Simulate success or failure
    if (success) {
        resolve('Operation was successful!');
    }
    else {
        reject('Operation failed.');
    }
});
myPromise
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.log(error);
});
