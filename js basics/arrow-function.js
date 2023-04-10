/*
function sumNumber() {
    return 10;
}
console.log(sumNumber());
*/


/*
let sum01 = function() {
    return 10;
};
console.log(sum01());
*/

/*
let sum2 = () => 15.26;
console.log(sum2());

function sum(a) {
    return a * 3.2;
}
console.log(sum(10));
*/

/*
let sum1 = function (a) {
    return a * 2;
};
console.log(sum1(30));
*/

/*
let sum2sum = (a) => a * 2;
console.log(sum2sum(40));
*/

/*
let sum_1 = function(a) {
    return a * 2;
};
console.log(sum_1(30));
*/

/*
let sum2New = (a) => a * 2;
console.log(sum2New(40));
let sum3 = a => a * 2;
console.log(sum3(40));
let sum4 = a => { return a * 2; }
console.log(sum4(40));
*/

/*
function sum(a,b){
    return a+b;
    }
    console.log(sum(10,20));
    function sum2(...a){
    let total=0;
    for (const i of a) {
    total+=i;
    }
    return total;
    }
    console.log(sum2(10,20,30,4,25));
*/
let x = (...a) => {
    let sum = 0;
    for (let y of a) {
        sum = sum + y;
    }
    return sum;
}
console.log(x(5, 6, -9, 1.5, -5, 10));