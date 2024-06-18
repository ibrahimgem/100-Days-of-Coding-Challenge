// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.

async function fetchData() {
    try {
        let dataFetch = await fetch('https://api.example.com/data');
        let data = await dataFetch.json();
        console.log(data);            
    } catch (error) {
        console.error('There is something wrong', error)
    }
}