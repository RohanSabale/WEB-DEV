let inputArr = process.argv.slice(2);
let fs = require("fs")
let path = require("path");
//console.log(inputArr);

// node main.js tree "directoryPath"
//node main.js organize "directoryPath"
// node main.js help

let command = inputArr[0];
switch(command)
{
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]) ;
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("please use 🙏 input right commad");
        break;
}

function treeFn(dirPath)
{
    console.log("tree comaand implemented for  " , dirPath);
}

function organizeFn(dirPath)
{
    //console.log("organize comaand implemented for  " , dirPath);
    //1. input- > directory path given
    let destPath;
    if(dirPath == undefined)
    {
        console.log("kindly enter the path");
        return;
    } else
    {
        let doesExist  = fs.existsSync(dirPath);
        if(doesExist)
        {
            //2. create - > organized_files ->directory
             destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath) ==false)
            {
                fs.mkdirSync(destPath);
            }

        }
        else
        {
            console.log("kindly enter the path");
            return;
        }
    }
    
}

//organizeHelper(dirPath , destPath);
    //4. copy/cut files to that organized directory inside of any of category folder

function organizeHelper(src,dest)
{
    //3. identify category of all the files present in that input dirctory->
    let childName = fs.readdirSync(src);
    for(let i =0;i<childName.length;i++)
    {
        let childAddress = path.join(src , childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
    }

}


function helpFn()
{
    console.log(`
    List of all the commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help
    `);
}