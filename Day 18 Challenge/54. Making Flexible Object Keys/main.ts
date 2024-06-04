function createObjectWithDynamicKeys (key: string, value: string) {
    let dynamicObject: {[key: string]:string} = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let result = createObjectWithDynamicKeys("sky", "blue");
console.log(result);
