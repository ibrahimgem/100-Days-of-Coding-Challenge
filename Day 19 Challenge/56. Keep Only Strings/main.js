// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mix = [2, "Hello", true, 4, "World", "New", 3, false];
var words = mix.filter(function (item) { return typeof item === "boolean"; });
console.log(words);
