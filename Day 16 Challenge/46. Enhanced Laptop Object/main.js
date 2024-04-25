"use strict";
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties `make`, `model`, `year`, and a method `describe()` that logs a sentence about the laptop.
let laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2020,
    describe: () => {
        console.log(`I have a laptop ${laptop.make} ${laptop.model} of year ${laptop.year}`);
    }
};
laptop.describe();
