// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// function selfProfileSetup (username: string, age: number) {
//     return console.log(`Username: ${username}, Age: ${age} years old.`)
// }
// selfProfileSetup("Ibrahim", 27);
var userProfile = (function () {
    // The user's details are kept inside
    var name = "John";
    var age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); //
