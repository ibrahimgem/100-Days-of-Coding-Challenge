/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

let guestList: Array<string>=["Akmal", "Amjad","Irfan", "Rehan", "Ejaz"];

let exGuest = guestList[2];

console.log(`Mr.${exGuest}, is not coming for dinner.`);
let newGuest = "Ibrar"

if (~guestList) {
guestList[2] = newGuest;
};


guestList.forEach((guest) => {console.log(`Hello Mr.${guest}, I would like to invite you on dinner today at 08:00 PM.`)});