"use strict";
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
function daysLeftInNewYear() {
    let currentDate = new Date();
    let endOfYear = new Date(currentDate.getFullYear(), 11, 31);
    let oneDay = 24 * 60 * 60 * 1000;
    let daysLeft = Math.ceil((endOfYear - currentDate) / oneDay);
    return daysLeft;
}
console.log(daysLeftInNewYear());
