/*
let stuArr=[];
let stuObj={};

console.log(typeof stuArr);     //object
console.log(typeof stuObj);     //object

stuArr[0]="University"; 
stuObj.name="kapilan";
stuObj.age=23;
stuArr[1]=" of ";
stuArr[2]={location:"badulla"};

console.log(stuArr);    // [ 'University', ' of ', { location: 'badulla' } ]
console.log(stuObj);    // { name: 'kapilan', age: 23 }

console.log(typeof stuArr[0]);  //string
console.log(typeof stuArr[1]);  //string
console.log(typeof stuArr[2]);  //object

console.log("=======================================");

let country= new Array("India","srilanka","bangladesh");
console.log(country);       //[ 'India', 'srilanka', 'bangladesh' ]
country.push("china");
console.log(country);       // [ 'India', 'srilanka', 'bangladesh','china ]
country.pop();
console.log(country);       // [ 'India', 'srilanka', 'bangladesh' ]
country.unshift("Australia");
console.log(country);       // [ 'Australia', 'India', 'srilanka', 'bangladesh' ]
country.shift();
console.log(country);       // [ 'India', 'srilanka', 'bangladesh' ]
console.log(country.length);    //3

country[3]=function add(){
    return 15;
}
console.log(country);       //  [ 'India', 'srilanka', 'bangladesh', [Function: add] ]
console.log(country[3]);    //[Function: add]
console.log(country[3]());  //15

for(let key in country){
    console.log(country[key]);      //India srilanka bangladesh  [Function: add]
}

for(let key1 of country){
    console.log(key1);                //India srilanka bangladesh  [Function: add]
}

for(let i=0;i<country.length;i++){
    console.log(country[i]);        //India srilanka bangladesh  [Function: add]
}
*/

let room=[
    {id:1,price:15000,isAC:false},
    {id:2,price:35000,isAC:true}
]

for(let key2 of room){
    for(let key3 in key2){
    console.log(key2[key3]);        
}
}

// output for above program
/*
1
15000
false
2
35000
true
*/