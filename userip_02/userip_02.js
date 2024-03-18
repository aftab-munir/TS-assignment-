// Simple Grade , User Input, nested IF
// Muhammad Aftab Munir
//9th-Mar-2023
//var Prompt = require("prompt-sync")();; /*installed prompt package npm install prompt-sync*/
//let Num1 =parseInt(prompt("Please Enter your Cisco Marks"));
//let Num2 =parseInt(PMPT("Please Enter your Math Marks"));
//let Num3 =parseInt(PMPT("Please Enter your TS Marks"));
//let Num4 =parseInt(PMPT("Please Enter your Network Analysis Marks"));
//let per=(((Num1+Num2+Num3+Num4)*100)/400);
//console.log("Your Percentage is =",(per),"%");//
//console.log("Your Percentage is =", per.toFixed(2), "%");
//let readline =require('readline');
//let userInput = readline.createInterface
//({
//input:process.stdin,
//output:process.stdin
//})
//userInput.question("your percentage is =",(per: string) => {
//if (per >= '90') 
//{
//    console.log("YOU SECURE A++");
// }
// else if (per >= "80") 
// {
//     console.log("YOU SECURE A");
// }
// else if (per >= "70")
// {
//console.log(" YOU SECURE B");
//  }
/*  else if (per >= "60") {
      console.log("you SECURE C");
  }
  else {
      console.log("Fail");
  }
})*/
//
var Prompt = require("prompt-sync")(); // Installed prompt package: npm install prompt-sync
var Num1 = parseInt(Prompt("Please Enter your Cisco Marks: "));
var Num2 = parseInt(Prompt("Please Enter your Math Marks: "));
var Num3 = parseInt(Prompt("Please Enter your TS Marks: "));
var Num4 = parseInt(Prompt("Please Enter your Network Analysis Marks: "));
var per = ((Num1 + Num2 + Num3 + Num4) * 100) / 400;
console.log("Your Percentage is =", per.toFixed(2), "%");
// Using readline for additional input
var readline = require('readline');
var userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//userInput.question("Your percentage is = ", (per: String) => {
// Parse the entered percentage to a number
//const percentage = per;
if (per >= 90) {
    console.log("YOU SECURE A++");
}
else if (per >= 80) {
    console.log("YOU SECURE A");
}
else if (per >= 70) {
    console.log("YOU SECURE B");
}
else if (per >= 60) {
    console.log("YOU SECURE C");
}
else if (per < 60) {
    console.log("Fail");
}
else {
    console.log("Invalid input. Please enter a valid percentage.");
}
// Close the interface
userInput.close();
