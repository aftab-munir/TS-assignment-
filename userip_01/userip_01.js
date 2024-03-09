// Simple Calculator , User Input, nested IF
// Muhammad Aftab Munir
//9th-Mar-2023
var PMPT = require("prompt-sync")(); /*installed prompt package npm install prompt-sync*/
var n1 = parseInt(PMPT("Please enter you First Number: ")); /* Enter Your First Numeric value*/
var n2 = parseInt(PMPT("Please enter you Second Number:")); /* Enter Your Second Numeric value*/
var OP = PMPT("please enter your Operator (+,-,*,/):");
/* Nested IF use*/
if (OP == '+') {
    console.log("your Answer =", (n1 + n2)); /*Print Addition Results given by the User*/
}
else if (OP == '-') {
    console.log("your Answer =", (n1 - n2)); /*Print Sub Results given by the User*/
}
else if (OP == '*') {
    console.log("your Answer =", (n1 * n2)); /*Print Multiplication Results given by the User*/
}
else if (OP == '/') {
    console.log("your Answer =", (n1 / n2)); /*Print Division Results given by the User*/
}
else {
    console.log("Please enter the correct operator");
}
