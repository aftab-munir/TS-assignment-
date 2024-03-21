// Even Odd by using modulas 
// Muhammad Aftab Munir 
//21ST march 2024

var PMPT = require("prompt-sync")();
let n1 =parseInt(PMPT("Please enter any Number: "));// user input any number what ever it is even or odd

function numeric (n1 :number) // using function 
{
    if (n1 % 2===0)  // using modulas

{
    return console.log ("number is Even"); // after modular caluclation result is showed on CMD what ever it is Even or Odd
}
else{
    return console.log("number is odd"); // after modular caluclation result is showed on CMD what ever it is Even or Odd
}
}
numeric(n1); // Dynamic value in the function