"use strict";
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
let map = new Map();
map.set('Pakistan', 'Karachi');
map.set('Canada', 'Ottawa');
map.set('USA', 'New York');
if (map.has('Canada')) {
    console.log(`The Capital of Canada is ${map.get('Canada')}.`);
}
