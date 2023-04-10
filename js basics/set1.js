var set1 = new Set();
// creating set using the Set.prototype.forEach(callback[, thisargu])
set1.add({ Firstname: "Amit", Lastname: "Bandari" });
set1.add(500);
set1.add(300);
set1.add(400);
set1.add("Goku");
set1.add("BFB");
console.log("printing one");
// adding different types of elements to the set
function printOne(values) {
    console.log(values);
}
// Here we are only using one parameter value to declare a call back function so that it will ignore other two types
set1.forEach(printOne);
// It prints all elements/values of the set which are in the printOne(values)

console.log("printing two");

function printTwo(key, values) {
    console.log(key + " " + values);
}
// Here we are using two parameter values to call back a function so that it will ignore remaining last type
set1.forEach(printTwo);
// keys and values are in the same set so values will be printed twice

console.log("printing three");

function printThree(key, values, set) {
    // it will be going to print keys and values and the set object
    console.log(key + " " + values);
    console.log(set);
}
// Now we are using all the three parameter value types using call back function
set1.forEach(printThree);
// It will print keys and values of each element and the entire set object will be printed