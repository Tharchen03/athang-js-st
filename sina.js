const prompt = require('prompt-sync')();
let num;
let num1;
let num2;
let num3;
console.log("enter number");
num1 = parseInt(prompt("enter your number1:"));
num2 = parseInt(prompt("enter your number2:"));
num3 = parseInt(prompt("enter your number3:"));

if (num1 > num2) {
    let num = num1;
    num1 = num2;
    num2 = num;
}

if (num1 > num3) {
    let num = num1;
    num1 = num3;
    num3 = num;
}

if (num2 > num3) {
    let num = num2;
    num2 = num3;
    num3 = num;
}

console.log(num1 + ", " + num2 + ", " + num3);