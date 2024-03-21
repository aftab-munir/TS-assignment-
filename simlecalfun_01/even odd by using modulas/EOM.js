// even odd by using modulas 
// Muhammad Aftab Munir 
//21ST march 2024
var PMPT = require("prompt-sync")();
var n1 = parseInt(PMPT("Please enter any Number: ")); // user input any number what ever it is even or odd
function numeric(n1) {
    if (n1 % 2 === 0) // using modulas
     {
        return console.log("number is Even"); // after modular caluclation applied 
    }
    else {
        return console.log("number is odd");
    }
}
numeric(n1);
