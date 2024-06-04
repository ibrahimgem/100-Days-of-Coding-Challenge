function adder(num) {
    return function (num2) {
        return num + num2;
    };
}
var addSeven = adder(7);
console.log(addSeven(9));
