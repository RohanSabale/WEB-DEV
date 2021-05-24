// fileSystem
let fs = require("fs");

// files->create ,read ,update , delete

//read
//let buffer  = fs.readFileSync("abc.js");
//console.log("bin data "+buffer);

// create
//fs.openSync("abc.txt","w");

// no file-> create and file exist ->content replace
//fs.writeFileSync("abc.txt","hello world");  // 

//update
//fs.appendFileSync("abc.txt","hello javascript");


// folder
//create
//fs.mkdirSync("my directory");

//fs.writeFileSync("my directory/mine.txt", "namaste");

// let content = fs.readdirSync("my directory");
// console.log(content);
// for(let i = 0;i<content.length;i++)
// {
//     console.log("file" , content[i] ,"is removed");
//     fs.unlinkSync("my directory/" + content[i]);
// }

// remove folder
// fs.rmdirSync("my directory");

//fs.existsSync   -> if a file exist at a pth  - > true/false
//fs.lstatSync   --> given path is of file or directory



