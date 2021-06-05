// input
let inputArr = process.argv.slice(2);
console.log(inputArr);

//option
let optionArr = [];
let filesArr = [];
for(let i = 0;i<inputArr.length;i++)
{
    let firstChar  =  inputArr[i].charAt(0);
    if(firstChar == '-')
    {
        optionArr.push(inputArr[i]);
    }
    else
    {
        filesArr.push(inputArr[i]);
    }
}