// Average of three numbers
// Muhammad Aftab Munir 
//21ST march 2024

var PMPT = require("prompt-sync")();
let n1 =parseInt(PMPT("Please enter you First Number: "));
let n2 =parseInt(PMPT("Please enter you Second Number:"));
let n3 =parseInt(PMPT("Please enter you Third Number:"));
let n4 =parseInt(PMPT("Please enter Divent Number:"));
function ACal (n1:number,n2:number,n3: number)
{
    return console.log("your Answer is =",(n1+n2+n3)/n4);
}
ACal(n1,n2,n3);