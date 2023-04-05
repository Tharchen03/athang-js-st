

const prompt = require('prompt-sync')();

// let no =parseInt(prompt('Enter your first number: '));
// let no1 =parseInt(prompt('Enter your first number2: '));
// console.log(no + no1);

let num1,num2,add,sub,mul,div,calculator; 
// add= num1+num2;


console.log("CALCULATOR\n")
calculator = prompt('enter wat calculation u want to do:  ');
 num1 =parseInt(prompt('Enter your first number: '));
 num2 =parseInt(prompt('Enter your second number: '));


 if(calculator=='addition'){
    add= num1 + num2;
    console.log(add)

 }else if(calculator=='subtraction'){
    sub= num1 - num2;
    console.log(sub)

 }else if(calculator=='multiplication'){
    mul= num1 * num2;
    console.log(mul)

 }else if(calculator=='division'){
    div= num1 / num2;
    console.log(div)

 }else{
    console.log('not defiened')
 }

//  const prompt = require('prompt-sync')();

// let num1, num2, add, sub, mul, div, calculator;

// console.log("CALCULATOR\n");

// // Prompt the user for the type of calculation to perform
// calculator = prompt('Enter the operation to perform (addition, subtraction, multiplication, or division): ');

// // Prompt the user for the two numbers to calculate with
// num1 = parseInt(prompt('Enter your first number: '));
// num2 = parseInt(prompt('Enter your second number: '));

// // Perform the calculation based on the user's choice
// if (calculator === 'addition') {
//   add = num1 + num2;
//   console.log('The result is: ' + add);
// } else if (calculator === 'subtraction') {
//   sub = num1 - num2;
//   console.log('The result is: ' + sub);
// } else if (calculator === 'multiplication') {
//   mul = num1 * num2;
//   console.log('The result is: ' + mul);
// } else if (calculator === 'division') {
//   div = num1 / num2;
//   console.log('The result is: ' + div);
// } else {
//   console.log('Invalid operation. Please enter addition, subtraction, multiplication, or division.');
// }
