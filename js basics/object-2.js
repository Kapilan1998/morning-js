/*
let employee = {};
employee.name = "niro";
console.log(employee.name); //niro
let key = "first name";
employee[key] = "mathi";
console.log(employee[key]); //mathi
console.log(employee["first name"]); //mathi

let key1 = "age";
employee[key1] = 20;
console.log(employee[key1]); //20
let key2 = "mobile number";
employee[key2] = "0774565231";
console.log(employee[key2]); //0774565231
console.log(employee["age"]); //20
console.log(employee.age); //20
console.log(employee.key1); //undefined (because the key "key1" is not defined above)
// console.log(employee[]);

console.log("name" in employee); //true
console.log(key in employee); //true
console.log("age" in employee); //true

for (newKey in employee) {
    console.log(newKey + " = " + employee[key]);
} 
*/

/*
let employee={};
Object.assign(employee,{"id":25},{"lastname":"kumar"});
console.log(employee);                      // { id: 25, lastname: 'kumar' }
let employee3 =Object.assign({},employee);          // it will put the object with key & values inside employee into the employee3
console.log(employee3);                     // { id: 25, lastname: 'kumar' }
employee3.id=100;
console.log();
console.log(employee);                      // { id: 25, lastname: 'kumar' }
console.log(employee3);                     // { id: 100, lastname: 'kumar' }
console.log();

let employee2={};
for(key01 in employee){
    employee2[key01] = employee[key01];
}
console.log(employee2);                         // { id: 25, lastname: 'kumar' }
employee2.age=55; 
console.log(employee2);                         // { id: 25, lastname: 'kumar', age: 55 }
console.log(employee);                          // { id: 25, lastname: 'kumar' }
console.log("finished");

*/