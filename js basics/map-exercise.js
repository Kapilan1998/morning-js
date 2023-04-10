// let price =[100,300,546,42,75,85]

// let newPrice =price.map(x=>x*1.1);

// // let newPrice=price.map(function(x){
// //     return x*1.1;
// //     return x+(x*0.1);
// // })

// console.log(newPrice);
// console.log(price);

let subjectArray=[
    {key:"maths",value:50},
    {key:"science",value:91},
    {key:"Commerce",value:100},
    {key:"Tamil",value:87},
    {key:"Civis",value:73},
    {key:"Religion",value:92},
    {key:"Health",value:83},
    {key:"Geography",value:62},
    {key:"History",value:74},
    {key:"Tamil litrature",value:93},
    {key:"English litrature",value:63},
    {key:"Drama",value:57},
    {key:"Music",value:49},
    {key:"Art",value:56},
    {key:"IT",value:79},
    {key:"Dance",value:19},
    {key:"Japanese",value:46},
    {key:"Chinese",value:32},
    {key:"Sinhala",value:39}
];
console.log(subjectArray);

let reArrange=subjectArray.map(function (obj){
    let newObject={};
    newObject[obj.key]=obj.value;
    return newObject;
});
// function reArrange(obj){
//     let newObject={};
//     newObject[obj.key]=obj.value;
//     return newObject;
// };

// subjectArray.map(reArrange);

console.log(reArrange);