/*
let price = [85, 95, 45, 78, 180, 250, 500, 325, 400, 160,100];
let newPrice = [];

for (let i = 0; i < price.length; i++) {
    newPrice[i] = price[i] + price[i] * 0.1;

}
console.log("old price details");
console.log(price);
console.log("new price dtails");
console.log(newPrice);

*/

// let price = [85, 95, 45, 78, 180, 250, 500, 325, 400, 160,100];
let subject = [{
        key: "maths",
        value: 50
    },
    {
        key: "science",
        value: 56
    },
    {
        key: "engloish",
        value: 52
    },
];
subject.forEach(function (item,index){
     console.log(`${item} is at index ${index}`);
 });

 let rearray=subject.map(function (obj){
     let newObj={};
     newObj[obj.key]=obj.value;
     return newObj;
    // console.log(newObj);
 });
 console.log('===');
 console.log(rearray);

let map1 = new Array([
    ['first_name', 'abac'],
    ['last_name', 'ghkhghkhgg'],
    ['city', 'jkjkkj'],
    ['role', 'bkjhbkbkj'],
    ['num1', 48],
    ['num2', 56],
    ['num3', 62],
    ['isAlive', true]
]);
console.log(map1);
let map2 = map1.map(obj => {
    let num = parseInt(obj);
    if (num.typeof() == number) {
        return num;
    }
});
console.log(map2);