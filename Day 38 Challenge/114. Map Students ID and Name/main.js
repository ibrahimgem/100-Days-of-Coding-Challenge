"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
let students = new Map();
students.set("01", "Imran");
students.set("02", "Rashid");
students.set("03", "Arif");
students.set("04", "Ayaz");
for (let [studentID, studentName] of students) {
    console.log(`Student ID: ${studentID}, Name: ${studentName}`);
}
