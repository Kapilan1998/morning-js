import { name, age, isMarried, weight } from "./person.js"; // Import from named exports
import {displayNewPrice, printColor,printWarrantyYears} from "./car.js";

import message from "./message.js"; // Import from default exports
import Car from "./car.js";
import Animal from "./animal.js";

import * as allAnimal from "./animal.js";  //import all 

let text = "My name is "+ name+". I am "+age+" years old. I am "+weight+ " kg.";
document.getElementById("demo").innerHTML= text;
console.log(text);

console.log(message());

//creating object for car to acces its property
console.log("object inside car class is as follows");
let objcar = new Car("Toyato","Red",400000,3);
console.log(Car); 
console.log(objcar);
printColor(objcar);
printWarrantyYears(objcar);
displayNewPrice(objcar,25000);

//creating animal object for access animal object
let animal1 = new Animal("parrot","female",1.25,150);
console.log( "           ");
console.log("object inside animal class is as follows");
console.log(animal1);
allAnimal.displayGender(animal1);
allAnimal.displaySpecies(animal1);
allAnimal.displayWeight(animal1);

