// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

let map = new Map();
map.set('Pakistan', 'Karachi');
map.set('India', 'New Delhi');
map.set('USA', 'New York');

console.log(map);
