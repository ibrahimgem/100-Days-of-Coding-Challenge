// Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ['Alice', 'David', 'Carolina'];
let magicians_original = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
};
let make_great = (magicians) => {
    let magiciansCopy = [...magicians];
    for (let i = 0; i < magiciansCopy.length; i++) {
        console.log(`The Great ${magiciansCopy[i]}`);
    }
};
magicians_original(magicians);
make_great(magicians);
export {};
