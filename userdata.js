const prompt = require('prompt-sync')();
console.log(' USER DATA ');
let userdata = []
let loop;
do {
    let opt = parseInt(prompt('Enter your 1.ADD USER: y 2.REMOVE the Last user:  3.VIEW data: '));
    if (opt == 1) {
        userdata.push(prompt('1.ADD USER :  '));


    } else if (opt == 2) {
        userdata.pop();
        console.log('user REMOVED')

    } else if (opt == 3) {
        console.log(userdata);

    } else {
        console.log('INVALID NUMBER')

    }
    loop = prompt("Do You want to the service again than enter y ");

} while (loop != 'no' );

