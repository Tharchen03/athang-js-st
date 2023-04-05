const prompt = require('prompt-sync')();

//empty array to store data
// let  userdata =[]  ;
// //this code stores the user data and store in array
//     for(let i = 0; i <=5 ; i++) {
//         userdata.push( prompt('enter a 5 users:  '));
//       }

// //this code retrive a data
// do {
//     let number= parseInt(prompt('Enter your user number: '))
//     console.log(userdata[number]);
//     con = prompt('wat to continue:  ')
// } while (con =='yes');


let name = ['karma', 'namgay', 'pema', 24];

for (i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (s = 9; s >= 0; s--) {//prints reverse

    console.log(names[s]);
}

// for (let s = names.length - 1; s >= 0; s--) {
//     console.log(names[s]);
//   }






// for (s=1; s < names.length; s += 2) {
//   console.log(names[s]);
// }

console.log('odds');

for (s = 0; s < 10; s++) {//prints odds

    console.log(names[s]);
    s++
}

console.log('odds reverse');
for (let s = 9; s >= 0; s--) {
    console.log(names[s]);
    s--
}


let num = [];
// parseInt(prompt('Enter  num1: '));

for (let n = 1; n <= 10; n++) {

    num.push(parseInt(prompt('Enter  num'+n+ ':' )));

    //Enter  num1 -10 is the out put
}

