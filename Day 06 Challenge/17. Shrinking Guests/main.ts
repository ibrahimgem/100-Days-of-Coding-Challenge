/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestList: Array<string>=["Akmal", "Amjad","Irfan", "Rehan", "Ejaz"];

let exGuest: string = guestList[2];

let newGuest: string = "Ibrar"

if (~guestList) {
guestList[2] = newGuest;
};


let addGuest1 = guestList.unshift("Arham");
let addGuest2 = guestList.splice(3,0,"Rayyan");
let addGuest3 = guestList.push("Ayan");

console.log("I can invite only two people for dinner.");

let remove1 = guestList.indexOf(guestList[0]);
if (remove1 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove1, 1); 
}
let remove2 = guestList.indexOf(guestList[0]);
if (remove2 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove2, 1); 
}
let remove3 = guestList.indexOf(guestList[0]);
if (remove3 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove3, 1); 
}
let remove4 = guestList.indexOf(guestList[0]);
if (remove4 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove4, 1); 
}
let remove5 = guestList.indexOf(guestList[0]);
if (remove5 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove5, 1); 
}
let remove6 = guestList.indexOf(guestList[0]);
if (remove6 > -1) { 
    console.log(`Mr.${guestList[0]}, I'm sorry you can’t invite you to dinner`);
  guestList.splice(remove6, 1); 
}

guestList.forEach((guest) => {console.log(`Hello Mr.${guest}, I would like to inform you that you are still invited on dinner today at 08:00 PM.`)});

let remove7 = guestList.indexOf(guestList[0]);
if (remove7 > -1) { 
  guestList.splice(remove7, 1); 
}
let remove8 = guestList.indexOf(guestList[0]);
if (remove8 > -1) { 
  guestList.splice(remove8, 1);}

  console.log(guestList);