const fs = require('fs');
const path = require('path');     // const { join } = require('path');

let currentPath =(__dirname);
console.log(currentPath); 

let otherPath = path.join(currentPath,'../seperate');
for (let y = 1; y <=3; y++) {
    fs.writeFileSync(`${otherPath}/file ${y}.txt`,`Hey \n this is file number ${y}`);   
    fs.readFile(`${otherPath}/file ${y}.txt`, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })}