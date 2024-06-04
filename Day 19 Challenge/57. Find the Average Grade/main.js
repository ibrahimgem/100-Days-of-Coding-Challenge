// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [77, 88, 67, 36, 87, 90];
var avgGrade = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(avgGrade);
