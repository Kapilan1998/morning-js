/*
function getName(name, callback) {
    console.log('your name is ' + name);
    callback();
}

function callMe() {
    console.log('i am callback function .callMe');
}

function getAge() {
    console.log('my age is ' + 30);
}
getName('seelan', callMe);
getName('seelan', getAge);
 */


function getName() {
    console.log('your name is Kapilan');
}

function getAge() {
    console.log('ny age is ' + 30);
}
setTimeout(getName, 2000); // used for display messages after a certain time of delay

setTimeout(function() {
    console.log('your name is seelan');
}, 5000);
/*
setTimeout(()=>{
console.log('your name is seelan');
},2960);
*/


/*

setTimeout(()=>console.log('your name is seelan'),2000);
getAgeO;
let arr=[10,20,30,40];
function loop(item,index,array){
// console.1og(item+" "+index);
console.log(`${item} is at index ${index}`);
}
arr.forEach(loop);
arr.forEach(function(item,index,array){
// console log(item+" "+index);
console.log(` ${item} is at index ${index}`);
});
arr.forEach((item,index,array)=>{
// console.log(item+" "+index);
console.log(`${item} is at index ${index}`);
});
arr.forEach((item,index,array)=>
console.log(` ${item} is at index ${index}`)
);I
    
*/