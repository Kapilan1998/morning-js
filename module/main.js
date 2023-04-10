import student, { displayName, displayID, displayCity, captainName } from './student.js';
let stu01 = new student(100, "Vetti", "Mannar");
let stu02 = new student(105, "Maran", "Chennai");
console.log(stu01);
console.log(stu02);

displayID(stu01);
displayName(stu01);
displayCity(stu01);

console.log(" ");

displayID(stu02);
displayName(stu02);
displayCity(stu02);

console.log(captainName);