const { error, log } = require('console');
const fs = require('fs');
const path = require('path');
const color= require('colors');

let dirPathName = path.join(__dirname);
console.log(dirPathName);    // it gives directory location of current file
let filePathName = path.join(__filename);
console.log(filePathName);     // it gives file location of current file
console.log(__dirname);         // it gives directory location of current file
console.log(__filename);        // it gives file location of current file


        //creating files
let myPath = path.join(__dirname,'my Files');   //it routes inside a folder my Files in current directory
for (let i = 1; i < 5; i++) {
    fs.writeFileSync(`${myPath}/newfiles ${i}.txt`,`create new files ${i}`); 
}

        //reading file name of created files
fs.readdir(myPath,(err,file) =>{
    console.log(file);                  // give the name of files in array format
    console.log(err);                   // if error found, then it will dispaly  if not display 'null'
    file.forEach((item) =>{
        console.log(item);              // give the name of files one by one
    });
});

    // read data inside file
fs.readFile(`${myPath}/seperate/file 3.txt`,'utf-8',(error,dataAvailable) =>{
    console.log(dataAvailable);
    console.log(error);                 // if error not found return null
});

    // add further data inside a file
fs.appendFile(`${myPath}/seperate/file 2.txt`,` \n here i added extra lines for this file `,(error)=>{
    if(!error){
        console.log("ypur file updated successfully ".blue);
    } else{
        console.log("THERE IS ERROR IN UPDATING".red.bgYellow.bold);
    }
});

    // rename the file
fs.rename(`${myPath}/seperate/file 1.txt`, `${myPath}/seperate/renamed file.txt`,(error)=>{
    if(!error){
        console.log("ypur file renamed successfully ".magenta);
    } else{
        console.log("THERE IS ERROR IN RENAMING".red.bgYellow.bold.italic);
    }
});

    //delete the file
fs.unlinkSync(`${myPath}/seperate/deletefilE.txt`);






