"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let guestList = ["Akmal", "Amjad", "Irfan", "Rehan", "Ejaz"];
let exGuest = guestList[2];
let newGuest = "Ibrar";
if (~guestList) {
    guestList[2] = newGuest;
}
;
console.log("Hello all, we have found a bigger dinner table");
let addGuest1 = guestList.unshift("Arham");
let addGuest2 = guestList.splice(3, 0, "Rayyan");
let addGuest3 = guestList.push("Ayan");
guestList.forEach((guest) => { console.log(`Hello Mr.${guest}, I would like to invite you on dinner today at 08:00 PM.`); });
