// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

let hobby = (...hobbies: any) => {
    for (let i = 0; i < hobbies.length; i++)
     console.log(`I enjoy ${hobbies[i]}`);
   }
   hobby("reading", "writing", "coding", "gaming");