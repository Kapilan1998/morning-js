//JSON format
let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// converting JSON to java script object
const obj = JSON.parse(text);
console.log(obj);
console.log(obj.employees[0].firstName); //John
console.log(obj.employees[2].lastName); //Jones
console.log(obj.employees[5]);  //undefined

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person);    // stringify function is used to convert to json format
  console.log(myString);        // {"name":"John","age":30,"city":"New York"}
  let t1 = JSON.parse(myString);            // parse function is used to convert to javascript object
  console.log(t1);              // { name: 'John', age: 30, city: 'New York' }