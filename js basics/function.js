// function producter(){
//     let x=10;
//     let y=15;

//     console.log(x*y);
// }
//  producter()

// let sum=function (){
//     let x=17.754;
//     let y=52.56;

//     console.log(x*y);
// };
// sum();

// function sum2(){
//     let x=10;
//     let y=5;
// return x+y;

// }

// let sum2=function(){
//     let x=10;
//     let y=5;
// return x+y;

// }
// let amount =sum2();
// console.log(amount);
// console.log(sum2());

// let sum3 =function(x,y){
//     return x+y;
// };

// console.log(typeof sum3);

// let amount1=sum3(20,30);
// console.log(amount1);
// console.log(sum3(50,60));

/*
function a(){

    function b(){
        return 140;
    }
    return b;
}

let b1=a();
console.log(b1());
console.log(a()());
console.log(a());
*/

function multiple(x) {
    function fn(y) {
        return x - y;
    }
    return fn;
}

let a = multiple(10);
let b = a(2);
console.log(b); // method 1

console.log(multiple(15)(3)); // method 2 
console.log(typeof b);