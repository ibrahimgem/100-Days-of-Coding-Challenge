"use strict";
// Question 31: No Users: Ensure your user list isn’t empty.
let user = ["Admin", "user1", "user2", "user3"];
if (user.length === 0) {
    console.log(`This array is empty`);
}
else {
    console.log(`This array is not empty`);
}
user.forEach(username => {
    if (username === "Admin") {
        console.log(`Welcome Admin, You can access the admin panel.`);
    }
    else {
        console.log(`Welcome ${username}, you are welcome.`);
    }
});
