let colors = ["red", "green", "blue", "black"];
console.log(colors); //[ 'red', 'green', 'blue', 'black' ]
/*
delete(colors[2]);
console.log(colors);                        // [ 'red', 'green', <1 empty item>, 'black' ]
console.log(colors[2]);                     //undefined
*/

/*
colors.splice(1,1);                 // delete index at 1 then delete element upto size at 1
console.log(colors);                        // [ 'red', 'blue', 'black' ]
colors.splice(0,2);
console.log(colors);                            // [ 'blue', 'black' ]
*/

/*
let c1=colors.slice(0,1);           //retrive element in 0 th index  to element at length 1
console.log(c1);                                //['red']
let c2=colors.slice(1,3);
console.log(c2);                                //['green','blue']
*/

/*
console.log(colors.concat(["orange","brown"]));     // [ 'red', 'green', 'blue', 'black', 'orange', 'brown' ]
console.log(colors.concat(['cyan','magenta'],['yellow']));          //['red','green','blue', 'black','cyan', 'magenta','yellow']

colors.forEach(function(item,index,array){
// console.log(item+" "+ index+" "+ array);
console.log(`${item} is at the index of ${index}`);
                            // red is at the index of 0
                            // green is at the index of 1
                            // blue is at the index of 2
                            // black is at the index of 3
});

console.log(colors.indexOf("green"));       //1
console.log(colors.indexOf("deep blue"));   //-1

*/

let vowel = ['a', 'e', 'i', 'o', 'u', 'h'];
console.log('slice test');
let v1 = vowel.slice(3, 4);
console.log(v1); //o

console.log('splice test');
vowel.splice(3, 0);
console.log(vowel);
console.log(vowel.includes('i')); //true
console.log(vowel.includes('iou')); // false
console.log(Array.isArray(vowel)); // true