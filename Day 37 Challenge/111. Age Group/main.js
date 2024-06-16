"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
function ageGroup(age) {
    if (age < 13) {
        console.log("You are child.");
    }
    else if (age >= 13 && age <= 19) {
        console.log("You are teenager.");
    }
    else {
        console.log("You are adult.");
    }
}
ageGroup(8);
ageGroup(22);
ageGroup(13);
