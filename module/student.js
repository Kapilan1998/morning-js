export default class Student {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

export function displayID(student) {
    console.log(`student's id is :- ${student.id}`);
}
// the above can be written as folows
/*
export function displayID(argument1){
    console.log(`student's id is :- ${argument1.id}`);
}
*/
export function displayName(student) {
    console.log(`student's name is :- ${student.name}`);
}
export function displayCity(student) {
    console.log(`student's city is :- ${student.city}`);
}

export let captainName;
captainName = "Dasun Sanaka";
// export default Student;
// export {displayID,displayName,displayCity,captainName}