// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function calculateRectangle (length: number, width: number) {
    return console.log(length * width);
  };
  
  let calculateRectangleArrow = (length: number, width: number) => {
    return console.log(length * width);
  };
  
  calculateRectangle(40, 50)
  calculateRectangleArrow(60, 80)