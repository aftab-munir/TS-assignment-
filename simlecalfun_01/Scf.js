//Simple Calculator By Using function 
//Muhammad Aftab Munir
//20TH-Mar-2024
// program Start 
var Prompt = require("prompt-sync")(); // Installed prompt package: npm install prompt-sync
var Num1 = parseInt(Prompt("Please Enter your Cisco Marks: ")); // user input marks 
var Num2 = parseInt(Prompt("Please Enter your Math Marks: ")); // user input marks 
var Num3 = parseInt(Prompt("Please Enter your TS Marks: ")); // user input marks 
var Num4 = parseInt(Prompt("Please Enter your Network Analysis Marks: ")); // user input marks 
var per = ((Num1 + Num2 + Num3 + Num4)); // Simple addition
console.log("Total marks Obtained =", per); // getting total marks 
var per1 = ((per) * 100) / 400;
console.log(" Your Percentage is =", per1, "%"); // getting percentage
function gcal(per1) {
    if (per1 >= 90) {
        console.log("You secured A Grade");
    }
    else if (per1 >= 80) {
        console.log("You secured B Grade");
    }
    else if (per1 >= 70) {
        console.log("You secured C Grade");
    }
    else if (per1 >= 60) {
        console.log("You secured D Grade");
    }
    else if (per >= 50) {
        console.log("You secured F Grade");
    }
}
gcal(per1);
