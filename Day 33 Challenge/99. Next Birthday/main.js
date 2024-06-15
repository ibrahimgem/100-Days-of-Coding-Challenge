"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
let today = new Date();
let nextBirthday = new Date(today.getFullYear(), 4, 24);
let nextBirthdayYear = nextBirthday.getFullYear();
if (nextBirthday < today) {
    nextBirthdayYear = nextBirthdayYear + 1;
    nextBirthday.setFullYear(nextBirthdayYear);
}
console.log(`Your next birthday is ${nextBirthday}`);
