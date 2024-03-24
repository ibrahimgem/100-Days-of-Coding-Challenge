"use strict";
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let user = ["Admin", "user1", "user2", "user3"];
user.forEach(username => {
    if (username === "Admin") {
        console.log(`Welcome Admin, You can access the admin panel.`);
    }
    else {
        console.log(`Welcome ${username}, you are welcome.`);
    }
});
