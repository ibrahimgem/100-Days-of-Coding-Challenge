// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.

let myPromise = new Promise((resolve, reject) => {
    let sucess = true;

    if (sucess) {
        console.log("Operation is successful.");
        
    } else {
        console.log("Operation is failed.");
        
    }
} )