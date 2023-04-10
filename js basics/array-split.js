let subjectNames = 'maths,tamil,science,english,history,ICT';
console.log(typeof subjectNames); // string

let subjectArr = subjectNames.split(',');
console.log(subjectArr); // [ 'maths', 'tamil', 'science', 'english', 'history', 'ICT' ]
console.log(subjectArr.length); // 6
console.log(typeof subjectArr); // object
console.log(Array.isArray(subjectArr)); //true
console.log(Array.isArray(subjectNames)); //false


let myname = "Kapilan";
let mynameArr = myname.split('');
console.log('splited');
console.log(mynameArr); // [ 'K', 'a', 'p','i', 'l', 'a','n']   // string will be converted into array
console.log('sorted');
mynameArr.sort();
console.log(mynameArr); //  [ 'K', 'a', 'a','i', 'l', 'n', 'p' ]    // first Capital letter will sorted    
console.log('joined');
let name = mynameArr.join(''); //  Kaailnp       // array will be converted as string
console.log(name);
console.log(typeof name); //string