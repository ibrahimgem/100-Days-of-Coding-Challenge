"use strict";
function createObjectWithDynamicKeys(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let result = createObjectWithDynamicKeys("sky", "blue");
console.log(result);
