// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.

function callingObjectProperties (obj: any) {
    for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
    }
}

callingObjectProperties({make: "Audi", model: "E-tron", year: 2024});