"use strict";
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
function replaceFruits(favFruits) {
    let index = favFruits.indexOf("Banana");
    if (index !== -1)
        favFruits[index] = "Mango";
}
let favFruits = ["Banana", "Watermelon", "Grapes"];
replaceFruits(favFruits);
console.log(favFruits);
