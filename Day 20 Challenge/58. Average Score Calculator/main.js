"use strict";
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function avgScoreCalculator(...score) {
    let avgCalculator = score.reduce((total, score) => total + score, 0) / score.length;
    return avgCalculator;
}
console.log(avgScoreCalculator(78, 89, 99, 52, 63, 44));
