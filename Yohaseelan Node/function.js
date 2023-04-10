function multiply(num1, num2){
    console.log(`Multiplication is ${num1*num2}`);
}
// multiply(12.56,9.65);

function displayInfo(name="Kapilan",location="Vavuniya",age=20){
    console.log(`My name is ${name}. I am from ${location}. i am ${age} years old.`);
}

function displaySalary(salary){
    return `My salary is ${salary}`;
}

function displayGender(gender="male"){
    console.log(`I am ${gender}.`);
}

module.exports.productFind = multiply;
module.exports.printdetails = displayInfo;
module.exports.printSalary = displaySalary;
module.exports.printGender=displayGender;

