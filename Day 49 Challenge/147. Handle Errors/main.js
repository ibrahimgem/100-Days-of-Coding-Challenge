"use strict";
// Question 147: Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.
function fetchData(callback) {
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
