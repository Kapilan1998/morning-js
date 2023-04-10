/*
// printing sucess message using resolve
let p1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("It is success")
    },1500);
})
p1.then(console.log)

//printing failure message using reject
let p2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        reject("Sorry, it is failure")
    },3000)
})
p2.then(console.log).catch(console.log)     // for failure message we need to catch error and then only we can display

*/

/*
//call back function
let f1 =(val,callback) => {
    return callback(val + 15)
}
let otherFunction = (msg) => {
    return msg +10;
}
console.log(f1(2,otherFunction));
*/

/*
let c1 = val => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(val +10)
    },1000)
})
c1(3).then(x => x+20).then(console.log);
*/

let myPromise = new Promise((success,failure) => {
    // success();          // it will display the code written inside the then block
    // failure();          // it will display the code written inside the catch block
    setTimeout(() => {      // delaying function
        success(" Completed");          //  it will display the code written inside the then block after 2.5 seconds
    },2500)
})
myPromise.then((message) => {          // then is used to show success message of promise object
    console.log(message +". It shows that arrival is success");
}).catch((message) => {                // catch is used to show failure message of promise object
    console.log(message +". It shows that arrival is failure");
})

