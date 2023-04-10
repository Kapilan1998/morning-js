let name1="Vinoth";
let name2=name1;
console.log(name1);         // Vinoth
console.log(name2);         // Vinoth
name2="Malinga"; 
console.log(name1);             // Vinoth
console.log(name2);             // Malinga


let staff1={
    id:451,
    name:"Rajan",
}
let staff2=staff1;
console.log(staff1);            // { id: 451, name: 'Rajan' }
console.log(staff2);            // { id: 451, name: 'Rajan' }
staff2.id=468;
staff2.name="Amal";
console.log(staff1);            // { id: 468, name: 'Amal' }
console.log(staff2);            // { id: 468, name: 'Amal' }
