"use strict";
// Question 104: Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.
function getRandomHexColor() {
    let randomInt = () => Math.floor(Math.random() * 256);
    let toHex = (int) => int.toString(16).padStart(2, '0');
    let red = toHex(randomInt());
    let green = toHex(randomInt());
    let blue = toHex(randomInt());
    return `#${red}${green}${blue}`;
}
console.log(getRandomHexColor());
