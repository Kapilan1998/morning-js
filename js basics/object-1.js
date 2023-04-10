/*
let Student = []; //defining empty object
console.log(typeof Student); //object
Student.id = 500; //assigning values to object
Student.name = "Kapilan";
console.log(Student); //[ id: 500, name: 'Kapilan' ]
Student.age = 23;
console.log(Student.age); //23
delete(Student.name); //delete value from object
console.log(Student);

Student["gender type"] = "male";
Student["location area"] = "jaffna";
Student["id"] = 520;
console.log(Student); // [ id: 520, age: 23, 'gender type': 'male', 'location area': 'jaffna' ]
let key = "salary";
Student[key] = 55000;
console.log(Student); // [ id: 520, age: 23, 'gender type': 'male', 'location area': 'jaffna', salary: 55000]
*/


/*
let person = new Object;  //another way of defining object
person.name="Jakath";
person.city="Jaffna";
let key ='monthly salary';
person.key = 25000;
console.log(person);        //{ name: 'Jakath', city: 'Jaffna', key: 25000 }
person[key]=50000;
console.log(person);   //{ name: 'Jakath', city: 'Jaffna', key: 25000, 'monthly salary': 50000 }
console.log(person[key]);               //50000
console.log(person['monthly salary']);  //50000
for(name in person){
    console.log(name+" = "+person[name]);
    // console.log( );
}
*/

/*
let status="married status";
let employee={
    name:"Kamal",
    ['annual salary']: 200000,
    [status]:false,
};
console.log(employee);   //{ name: 'Kamal', 'annual salary': 200000, 'married status': false }
*/

/*
function displayStudent(id,name,isalive) {
    return{
        // id:id,
        // name:name,
        // isalive:isalive
        id,
        name,
        isalive
    }    
}
let stu01 = displayStudent(104,"Haffez",true);
console.log(stu01);                             // { id: 104, name: 'Haffez', isalive: true }
let stu02 = displayStudent(107,"Umar Gul",false);
console.log(stu02);                             // { id: 107, name: 'Umar Gul', isalive: false }
// console.log(typeof displayStudent);     //function
// console.log(typeof stu01);              //object (as it returns in the format of key & values)
console.log(stu01.name);            //Haffez
console.log(typeof(stu01.id));      // number
for(id in stu01){
    console.log(id+" = "+stu01[id]);
}
*/

/*
function displayEmployee(id,name){
    let obj = {};
    obj.id=id,
    obj.name=name

    return obj;             //if not objects will not sent out,so return in necessary
}
let emp1 = displayEmployee(520,"Devan");
console.log(emp1);                      //{ id: 520, name: 'Devan' }
console.log(typeof(displayEmployee));   // function
*/


function displayEmployeeDetail(id, name) {
    this.id = id, //this is needed for assign values into object
        this.name = name
}

// the below object creation method is similar to above object creation method
/*
class displayEmployeeDetail {
    constructor(id, name) {
        this.id = id, //this is needed for assign values into object
            this.name = name;
    }
}
*/

let emp001 = new displayEmployeeDetail(412, "Warner");
console.log(emp001); //displayEmployeeDetail { id: 412, name: 'Warner' }
console.log("name" in displayEmployeeDetail); //true
console.log("Name" in displayEmployeeDetail); //false 
console.log("age" in displayEmployeeDetail); //false
console.log(typeof displayEmployeeDetail); //function
console.log(typeof(emp001)); // object