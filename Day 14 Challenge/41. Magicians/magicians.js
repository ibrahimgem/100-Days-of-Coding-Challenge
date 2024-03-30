//Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_names = ["Harry Houdini", "David Blaine", "Penney Wilson"];
let show_magicians = () => {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(`Magician: ${magician_names[i]}`);
    }
};
show_magicians();
export {};
