// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.

interface Person {
    name: string,
    age: number,
    message: () => string
}

let person: Person = {
    name: "Ibrahim",
    age: 27,
    message: function() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    }
}

console.log(person.message())