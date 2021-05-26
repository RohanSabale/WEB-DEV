// oroginal file --> https://github.com/Jasbir96/Practical_Web_Dev/tree/main/3.%20nodejs_project
//shebang syntax

let inputArr = process.argv.slice(2);
let fs = require("fs")
let path = require("path");
//console.log(inputArr);
let command = inputArr[0];

let types = {
    media :[ "mp4" , "mkv"],
    archives: ["zip" , '7z' , 'rar' , 'tar' , 'gz' , 'ar' ,'iso' ,'xz'],
    documents:['docx' , 'doc' , 'pdf' , 'xlsx' ,'xls' , 'odt' , 'ods' , 'odp' , 'odg' ,'odf' ,'txt' , 'ps' , 'tex'],
    app:['exe' , 'dmg' , 'pkg' , 'deb']  
}

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
        destPath = process.cwd();
        //console.log("kindly enter the path");
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
    organizeHelper(dirPath , destPath);

  
}

function treeFn(dirPath)
{
    let destPath;
    if(dirPath == undefined)
    {
        //console.log("kindly enter the path");
        process.cwd();
        treeHelper(process.cwd() , " ");
        return;
    } else
    {
        let doesExist  = fs.existsSync(dirPath);
        if(doesExist)
        {
           treeHelper(dirPath, " ");
        }
        else
        {
            console.log("kindly enter the path");
            return;
        }
    }
}

function treeHelper(dirPath, indent)
{
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true)
    {
        let fileName  = path.basename(dirPath);
        console.log(indent +"---" +fileName);
    }
    else
    {
        let dirName  = path.basename(dirPath);
        console.log(indent + "----"+ dirName );
        let childrens = fs.readdirSync(dirPath);
        for(let i  =0 ;i<childrens.length;i++)
        {
            let childPath = path.join(dirPath , childrens[i]);
            treeHelper(childPath , indent + "\t" );
        }
    }
}


function organizeHelper(src,dest)
{
    //3. identify category of all the files present in that input dirctory->
    let childName = fs.readdirSync(src);
    for(let i =0;i<childName.length;i++)
    {
        let childAddress = path.join(src , childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            //console.log(childName[i]);
            let category = getCategory(childName[i]);
            console.log(childName[i] , "belongs to -->", category);
                //4. copy/cut files to that organized directory inside of any of category folder
            sendFiles(childAddress , dest , category);
        }
    }

}


function sendFiles(srcFilePath , dest , category)
{
    let categoryPath = path.join(dest , category);
    if(fs.existsSync(categoryPath) == false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath , fileName);
    fs.copyFileSync(srcFilePath , destFilePath );
    fs.unlinkSync(srcFilePath);
    console.log(fileName ,"copied to" ,category);
}

function getCategory(name)
{
    let ext = path.extname(name);
    ext = ext.slice(1);
    //console.log(ext);
    for(let type in types)
    {
        let cTypeArray= types[type];
        for(let i = 0;i<cTypeArray.length;i++)
        {
            if(ext == cTypeArray[i])
            {
                return type;
            }
        }
        return "others";
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