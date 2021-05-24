function dectoBinary(n)
{
    let bin = new Array(32);
  

    let i = 0;
    while(n>0)
    {
        bin[i] = n%2;
        n = Math.floor(n/2);
        i++;
    }
    for(let j = i-1;j>=0;j--)
    {
        console.log(bin[j]);
    }
}

function binary_decimal(b)
{
   let num = b;
   let dec_value = 0;
   
   let base  = 1;

   let temp = num;
   while(temp)
   {
       let last_digit  =temp % 10;
       temp =Math.floor( temp / 10);

       dec_value +=last_digit *base;
       base = base *2;
   }
   return dec_value;
}

let b =10101001;
console.log(binary_decimal(b));


let n = 13;
//dectoBinary(n);


