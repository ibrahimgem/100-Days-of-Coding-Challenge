// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.

type Circle = {
    radius: number,
}

type Rectangle = {
    width: number,
    length: number
}


let circle: Circle = {
    radius: 10
}

let rectangle: Rectangle = {
    width: 3,
    length: 10
}

console.log(circle, rectangle);
