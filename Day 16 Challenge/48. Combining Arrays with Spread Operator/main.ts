// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


let laptops = [{make: "HP", model: "ProBook 820", year: "2020", price: 50000}, {make: "Dell", model: "Inspiron", year: "2022", price: 44000}, {make: "Apple", model: "MacBook Pro", year: "2023", price: 60000}
];
let [laptop1, laptop2, laptop3] = laptops;

laptops.sort(
  (a, b) => {
    return a.price - b.price;
});

console.log(laptops);