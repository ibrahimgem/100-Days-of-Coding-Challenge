// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

function textPresence(text:string) {
    console.log(text.includes("JavaScript"));   
}

textPresence("I love JavaScript.");