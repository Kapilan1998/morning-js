let arr1 = [];
let obj1 = {};

console.log(typeof obj1); //object
console.log(typeof arr1); //object
console.log(Array.isArray(arr1)); //true
console.log(Array.isArray(obj1)); //false

//  =======111111111=========
/*
function createStudent01(id,name) {
    this.id=id;
    this.name=name;

    this.display = function(){
        console.log("Student name is "+this.name+" and whose id is "+this.id);
    }
    
}
 
let student1= new createStudent01(4500,"vimalan");
console.log(student1);              //createStudent { id: 4500, name: 'vimalan', display: [Function (anonymous)]}
student1.display();                 // Student name is vimalan and whose id is 4500
*/


//  =========2=======

function createStudent02(id, name, maths, science, history) {
    let stu01 = {};
    stu01.id = id;
    stu01.name = name;
    stu01.subject = {
        maths,
        science,
        history
    }

    stu01.display = function() {
        console.log("Student name is " + name + " and whose id is " + id + ". Maths marks = " + this.subject.maths + ", Science marks= " + this.subject.science + ", History marks = " + this.subject.history);
    }
    return stu01;
}

let student2 = createStudent02(4525, "Rohan", 25, 50, 75);
console.log(student2); //{ id: 4525, name: 'Rohan', Student name is Rohan and whose id is 4525. Maths marks = 25, Science marks= 50, History marks = 75, display: [Function (anonymous)] }
student2.display(); // Student name is Rohan and whose id is 4525. Maths marks = 25, Science marks= 50, History marks = 75
console.log(student2.subject); // { maths: 25, science: 50, history: 75 }



//  =========3=======
/*
function createStudent03Array(id,name){
    let stu02=[];

    stu02.push(id);
    stu02.push(name);
  
    display= function(){
        console.log("Student name is "+name+" and whose id is "+id);
    }
    stu02.push(display);
       return stu02;
}

let student3= createStudent03Array(4547,"Priyadharsini"); 
console.log(student3[0]);           //4547
console.log(student3[1]);              //Priyadharsini
console.log(student3[2]);               // [Function: display]
console.log(student3[3]);               // undefined

student3[2]();              // Student name is Priyadharsini and whose id is 4547

*/



// =========4======
/*
function createStudent04(id,name){
    return stu04={
    id:id,
    name:name

    stu04.display= function(){
        console.log("Student name is "+name+" and whose id is "+id);
    }
}
*/


//  ========5=======
/*
function createStudent05Object(id,name){
    // let stu01={};
    this.id=id;
    this.name=name;

    stu01.display= function(){
        console.log("Student name is "+name+" and whose id is "+id+". ");
    }
    //    return stu01 ;
}
*/


let studentArray = [];
studentArray[0] = createStudent02(4600, "Tharmilan", 56, 87, 94);
studentArray[1] = createStudent02(4603, "Piraveen", 86, 49, 37);
studentArray[2] = createStudent02(4606, "Kannan", 92, 96, 76);
studentArray[3] = createStudent02(4609, "Diviya", 83, 91, 89);
studentArray[4] = createStudent02(4612, "Luxan", 73, 99, 42);
studentArray[5] = createStudent02(4615, "Vijaya", 81, 49, 86);
studentArray[6] = createStudent02(4618, "Thilakshika", 45, 32, 29);

for (let i = 0; i < studentArray.length; i++) {
    studentArray[i].display();
}
// studentArray[0].display();
// studentArray[1].display();
// studentArray[2].display();
// studentArray[3].display();
// studentArray[4].display();
// studentArray[5].display();
// studentArray[6].display();