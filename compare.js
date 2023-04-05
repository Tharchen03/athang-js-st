const prompt = require('prompt-sync')();
let loop;

do {

  let num1, num2, num3;

  console.log("Enter three numbers:");
  num1 = parseInt(prompt('Enter your first number: '));
  num2 = parseInt(prompt('Enter your second number: '));
  num3 = parseInt(prompt('Enter your third number: '));

  let smallest, middle, largest;

  // Find the smallest number
  if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
    if (num2 <= num3) {
      middle = num2;
      largest = num3;
    } else {
      middle = num3;
      largest = num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
    if (num1 <= num3) {
      middle = num1;
      largest = num3;
    } else {
      middle = num3;
      largest = num1;
    }
  } else {
    smallest = num3;
    if (num1 <= num2) {
      middle = num1;
      largest = num2;
    } else {
      middle = num2;
      largest = num1;
    }

  }

  console.log("The numbers in ascending order:", smallest, middle, largest);


  loop = prompt(' Do want to do again enter yes:   ');
} while (loop == "yes" || loop == "yes")

