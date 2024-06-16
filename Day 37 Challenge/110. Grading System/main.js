"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
function gradingSystem(score) {
    if (score >= 80 && score <= 100) {
        console.log("Congratulations! You have secured 'A+' Grade");
    }
    else if (score >= 70 && score <= 79) {
        console.log("Congratulations! You have secured 'A' Grade");
    }
    else if (score >= 60 && score <= 69) {
        console.log("Congratulations! You have secured 'B' Grade");
    }
    else if (score >= 50 && score <= 59) {
        console.log("Good! You have secured 'C' Grade");
    }
    else if (score >= 40 && score <= 49) {
        console.log("Need Improvements, You have secured 'D' Grade");
    }
    else if (score >= 30 && score <= 39) {
        console.log("Need Improvements, You have secured 'E' Grade");
    }
    else {
        console.log("You have failed.");
    }
}
(gradingSystem(85));
(gradingSystem(73));
(gradingSystem(62));
(gradingSystem(52));
(gradingSystem(42));
(gradingSystem(32));
(gradingSystem(22));
