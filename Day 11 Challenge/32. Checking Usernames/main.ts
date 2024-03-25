// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = ["Imran", "anees", "riaz", "Shahmeer"];
let new_users: string[] = ["shahmeer", "riaz", "rehman", "mumraiz"];

new_users.forEach(newUsers => {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers} has to enter new username.`);
    } else {
        console.log(`${newUsers} is available`);
    }
})