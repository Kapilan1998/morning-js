let marks=[65,65,30,19,7,16,82,95,71,41,63,46,27];

console.log(marks);

marks.sort();
console.log(marks);

// function compareNumber(a,b){
//     if(a>b){
//         return 1;
//     }else if(a==b){
//         return 0;
//     }else if(a<b){
//         return -1;
//     }
// }

// marks.sort(compareNumber);
// // console.log(marks);

// marks.sort(function compareNumber(a,b){
//     if(a>b){
//         return 1;
//     }else if(a==b){
//         return 0;
//     }else if(a<b){
//         return -1;
//     }
// }); 
// console.log(marks);

// marks.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }else if(a==b){
//         return 0;
//     }else if(a<b){
//         return -1;
//     }
// }); 
// console.log(marks);

marks.sort(function compareNumber(a,b){
    return b-a;
}); 
console.log(marks);
//string values comparison sorting
let subjects =["maths","tamil","english","ICT","chemistry"];
// subjects.sort();
subjects.reverse();
// console.log(subjects); //['ICT', 'chemistry', 'english', 'maths', 'tamil' ]

// subjects.sort((a,b)=>(a>b)?1:-1); //[ 'chemistry', 'english', 'maths', 'tamil' ]
// subjects.sort((a,b)=>a.localeCompare(b));//[ 'chemistry', 'english', 'ICT', 'maths', 'tamil' ]
console.log(subjects);