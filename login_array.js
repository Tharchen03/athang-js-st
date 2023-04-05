const prompt = require('prompt-sync')();

let user = [];
let mainpassword = [];

let loop;

do {
    console.log("Do you want to sign up or log in?");
    console.log(" 1. If you want to sign up\n 2. If you want to log in");

    let acc = prompt('Enter 1. 0r 2. ');
    if (acc == 1) {
        console.log("Create an account");
        let username = prompt('Set your username: ');
        let password = prompt('Set your password: ');
        let cpassword = prompt('Confirm your password: ');
        if (password === cpassword) {
            user.push(username)
            mainpassword.push(password)
            console.log('Dear ' + username + ', your account creation was successful');
        }
    } else if (acc == 2) {
        console.log("Log in to your account");
        let username = prompt('Enter your username: ');
        let password = prompt('Enter your password: ');
        if ((user.includes(username) && mainpassword.includes(password))) {
            console.log('Welcome ' + username + ' to your account');
        } else {
            console.log('Your password did not match. Sorry, ' + username + ', please try again.');
        }
    } else {
        console.log('Please enter a valid number');
    }
    loop = prompt('Do you want to sign up or log in again? If yes, enter "yes".');
} while (loop != 'no');
console.log("Thanks for using our service. Goodbye!");
