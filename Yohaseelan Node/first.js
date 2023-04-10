let x= 12;
console.log(x);
 function display(...numbers){
    let sum = 0;
        for(let a of numbers){
           sum = sum + a;
        }  
        return sum; 
    }
 console.log(display(53,-55,85,69,-45.2,90,-71.56));
 
 function add(num1=0,num2=0){
    console.log(` Summation is ${num1+num2}`);
 }
 add(56,85);
 add(20.6);
 add();

 let arr1 =[45,26,31,89,-17.5,-62.48,92,48];
 arr1.push(-54);
 arr1.unshift(-21.03);
 console.log(arr1);

 for(let a in arr1){
   console.log(arr1[a]);
 }

 let sum = 0, average =0;
 for(let a=0; a<arr1.length;a++){
  sum +=  arr1[a];
  average = sum/ arr1.length;
 }
 console.log(`sum of above elements is ${sum} and the average is ${average}`);

