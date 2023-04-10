// const fs= require('fs');        //fs is package name(global module) , variable name also fs  (better to have variable name & package name as same)
// console.log("Welcome to node");
// fs.writeFileSync("first.txt","You are learning node js right now.");

const fs= require('fs').writeFileSync;        //fs is file system module
fs("second.txt","You are learning php & js right now.");
