"use strict";
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
function toFindVowel(str) {
    let vowels = "aeiouAEIOU";
    let foundVowel = false;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            console.log(`The ${str} has vowel at index ${i}.`);
            foundVowel = true;
            break;
        }
    }
    if (!foundVowel) {
        console.log(`The ${str} has no vowel.`);
    }
}
toFindVowel("Pakistan");
