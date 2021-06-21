const fs = require("fs");
// let data= fs.readFileSync("f1.txt");
// console.log("" + data);
// async function

console.log("before");
fs.readFile("f1.txt",cb);
function cb(err,data)
{
    console.log("data" + data);
}
console.log("after");
console.log("mean while");