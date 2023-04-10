require ('./first');
// require('./first.js);
let showResult = require('./function');
showResult.productFind(5.3,10);
showResult.printdetails("Mayuran","Mullaitivu",21);
showResult.printdetails("Amuku");
console.log(showResult.printSalary(50000));
showResult.printGender("female");   // it will display female 
showResult.printGender();   // if argument is not passed then default value male is printed