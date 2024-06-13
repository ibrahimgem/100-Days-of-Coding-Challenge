"use strict";
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
function boolean(value, value2) {
    return value && value2;
}
console.log(boolean(true, true));