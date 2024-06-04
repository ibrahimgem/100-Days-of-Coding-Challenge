// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function avgScoreCalculator() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var avgCalculator = score.reduce(function (total, score) { return total + score; }, 0) / score.length;
    return avgCalculator;
}
console.log(avgScoreCalculator(78, 89, 99, 52, 63, 44));
