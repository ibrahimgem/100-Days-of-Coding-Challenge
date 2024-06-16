"use strict";
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [77, 88, 67, 36, 87, 90];
let avgGrade = grades.reduce((total, grades) => total + grades, 0) / grades.length;
console.log(avgGrade);
