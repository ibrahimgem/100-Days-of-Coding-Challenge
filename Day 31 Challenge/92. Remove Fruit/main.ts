// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.

function removeElement<T>(arr: T[]):T | undefined {
    return arr.pop();
}

let favFruits: string[] = ["Banana", "Mango", "Grapes"];
removeElement(favFruits);
console.log(favFruits);
