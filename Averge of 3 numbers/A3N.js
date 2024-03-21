// Average of three numbers
// Muhammad Aftab Munir 
//21ST march 2024
var PMPT = require("prompt-sync")();
var n1 = parseInt(PMPT("Please enter you First Number: "));
var n2 = parseInt(PMPT("Please enter you Second Number:"));
var n3 = parseInt(PMPT("Please enter you Third Number:"));
var n4 = parseInt(PMPT("Please enter Divent Number:"));
function ACal(n1, n2, n3) {
    return console.log("your Answer is =", (n1 + n2 + n3) / n4);
}
ACal(n1, n2, n3);
