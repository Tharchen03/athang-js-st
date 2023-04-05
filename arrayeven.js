const prompt = require('prompt-sync')();

let number = [1,2,3,4,5,6,7,8,9,10];
 
// for(let i = 0; i < number.length ; i++) {
//     if(number[i] % 2 === 0) {
//       console.log(number[i]);
//     }
//   }


// for(let i = 0; i < number.length ; i++) {
//     let num = number[i];
//     while(num >= 2) {
//       num -= 2;
//     }
//     if(num === 0) {
//       console.log(number[i]);
//     }
//   }

//   for(let i = 0; i < number.length ; i++) {
//     let num = number[i];
//     while(num >= 2) {
//       num -= 2;
//     }
//     if(num === 1) {
//       console.log(number[i]);
//     }
//   }

//   for(i=1; i<=10; i++){
//     i++
//     console.log(number[i])
//   }

//   for(i=1; i<=10; i--){
//     i--
//     console.log(number[i])
//   }

function cal(a=10,b=10){//deafult variables

    let sum = a+b; //local variables

    return sum;//will return the the walue of sum && execuation of the code


}
console.log(cal());
console.log(cal(50,50));//assining varables using paramater




for(let i=0; i<5; i++){

console.log('hello');
    for(let j=0; j<5; j++){
        console.log('hi');
    }
} 
// this is nested for loop


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }

  let size = 5; // change this value to adjust the size of the square

for (let i = 1; i <= size; i++) {
  let line = "";
  for (let j = 1; j <= size; j++) {
    if (i === 1 || i === size || j === 1 || j === size) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}

