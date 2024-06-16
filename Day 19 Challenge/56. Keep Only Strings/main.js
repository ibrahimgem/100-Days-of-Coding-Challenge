"use strict";
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mix = [2, "Hello", true, 4, "World", "New", 3, false];
let words = mix.filter(item => typeof item === "string");
console.log(words);
