//with rest parameter
function sum2(...a) {
    let total = 0;
    for (let i of a) {
        total += i;
    }
    return total;
}

console.log(sum2(10, 54, 3, -54.25, 48, 531, 98.24, 47.1110));

let sum3 = (...a) => {
    let total = 0;
    for (const i of a) {
        total += i;
    }
    return total;
}
console.log(sum3(10, -41.05, 3, -54.25, 10.89, -531, 98.24, 47.1110));

function f1(...x) {
    let total = 0;
    for (let y of x) {
        total = total + y;
    }
    return total;
}
console.log(f1(12, 25, 3.45, -893.14, 63.45, 74, 54, -3.5));



// rest with function and other arguments
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');


// Without rest parameter
function fun(a, b) {
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3