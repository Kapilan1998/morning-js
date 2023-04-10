const inputData = process.argv;
console.log(inputData); // it will display an array of length 2 (first is path where node.exe found, second is path where current file is found)
const fs = require('fs');

for (let i = 3; i < inputData.length; i++) {
    // console.log(inputData[i]);
    // fs.writeFileSync(`${inputData[i]}.txt`,`Hey !!! this is file number ${i}`);

    if (inputData[2] == "create") {
        fs.writeFileSync(`${inputData[i]}.txt`, `file created sucessfully \n It is file number ${i-2} \n It's index inside array is ${i}`);
    } else if (inputData[2] == "delete") {
        fs.unlinkSync(`${inputData[i]}.txt`, 'file deleted sucessfully')
    } else {
        console.log("nothing changed");
    }
}