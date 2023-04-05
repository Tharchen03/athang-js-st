const prompt = require('prompt-sync')();

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
// We can use a ternary operator to perform the same functionality:

// ternary operator

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//Ternary Operator
isLocked ?   console.log('You will need a key to open the door.')
:   console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
//Ternary Operator
isCorrect ?   console.log('Correct!') :   console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

//Ternary Operator
favoritePhrase==='Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//switch case easy to understand

let randomNumber = Math.floor(Math.random()*7);

console.log(`${randomNumber}`);

let eightBall = '';
 eightBall=randomNumber;

 switch(eightBall){
   case 0:
   console.log('It is certain');
   break;
      case 2:
   console.log('It is decidedly so');
   break;
      case 3:
   console.log('Reply hazy try again');
   break;
      case 4:
   console.log('Cannot predict now');
   break;
      case 5:
   console.log('Do not count on it');
   break;
      case 6:
   console.log('My sources say no');
   break;
      case 7:
   console.log('Outlook not so good');
   break;
      case 8:
   console.log('Signs point to yes');
   break;

   default:
    console.log('default');
    break;


 }



 function cal(a=10,b=10){//deafult variables
  let sum = a+b;

  return sum;//will return the the walue of sum


}
console.log(cal());
console.log(cal(50,50));//assining varables using paramater



 
