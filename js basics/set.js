let s1 = new Set();
console.log(s1); // Set(0) {}
console.log(typeof s1); // object
s1.add('David');
s1.add('Warner');
s1.add('SRH');
console.log(s1); // Set(3) {'David', 'Warner','SRH'}
console.log("============== 1");
for (item of s1.keys()) {
    console.log(item);
}
// David
// Warner
// SRH
console.log("============== 2");

for (item of s1.values()) {
    console.log(item);
}
// David
// Warner
// SRH
console.log('=============== 3');
for (let [key, value] of s1.entries()) {
    console.log(`${key} :- ${value}`);
}


let a1 = new Array();
a1[0] = "David";
a1[1] = "Warner";
a1.push('SRH');
console.log(a1); // [ 'David', 'Warner','SRH' ]       



console.log("********************");



let country = "United States of America";
console.log(country.length); //24

let set1 = new Set(country);
console.log(set1); // Set(16) { 'U', 'n', 'i', 't', 'e', 'd', ' ','S','a','s','o','f','A','m','r','c' }
console.log(set1.size); //16
console.log(set1.has('e')); //true
console.log(set1.delete('a')); //true
set1.clear();
console.log(set1); //Set(0) {}


console.log("********************");
console.log("********************");
console.log("********************");


let subject = ['tamil', 'science', 'history', 'maths', 'english', 'tamil', 'religion', 'history'];
let set2 = new Set(subject);
console.log(set2); // Set(6) {'tamil','science','history','maths','english','religion'}
console.log(set2.size); //6
console.log(subject.length); //8

if (set2.size == subject.length) {
    console.log('It does not have duplicate data');
} else {
    console.log('It has duplicate data');
}