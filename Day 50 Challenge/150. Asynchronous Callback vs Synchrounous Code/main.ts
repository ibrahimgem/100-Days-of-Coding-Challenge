// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.


console.log('Start');

// Synchronous task
for (let i = 0; i < 1000000000; i++) {} // Simulates a long-running task
console.log('Synchronous task finished');

// Asynchronous task
setTimeout(() => {
  console.log('Asynchronous callback');
}, 1000);

console.log('End');
