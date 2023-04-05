const prompt = require('prompt-sync')();

let user1, user2, user3;
let mainpassword, mainpassword1, mainpassword2;
let count = 1;
let loop;

do {
    console.log("Do you want to sign up or log in?");

    let acc = prompt('Enter \n1. If you want to sign up\n2. If you want to log in\n');

    if (acc == 1) {
        console.log("Create an account");
        let username = prompt('Set your username: ');
        let password = prompt('Set your password: ');
        let cpassword = prompt('Confirm your password: ');

        if (password === cpassword && count==1) {
    
            user1 = username;
            mainpassword = password;

            count++

            console.log('Dear ' + username + ', your account creation was successful');

        } else if (password === cpassword  &&  count==2) {

            user2 = username;
            mainpassword1 = password;

            count++
            
            console.log('Dear ' + username + ', your account creation was successful');
        } else if (password === cpassword  &&  count==3) {

            user3 = username;
            mainpassword2 = password;

            count++
            
            console.log('Dear ' + username + ', your account creation was successful');

        }
        else {
            console.log('Your password did not match. Sorry, ' + username + ', please try again.');

        }
    } else if (acc == 2) {

        console.log("Log in to your account");
        let username = prompt('Enter your username: ');
        let password = prompt('Enter your password: ');

        if ((username === user1 && password === mainpassword) || (username === user2 && password === mainpassword1) || (username === user3 && password === mainpassword2)) {
            console.log('Welcome ' + username + ' to your account');
        } else {
            console.log('Your password did not match. Sorry, ' + username + ', please try again.');
        }
    } else {
        console.log('Please enter a valid number');
    }

    loop = prompt('Do you want to sign up or log in again? If yes, enter "yes".\n');

} while (loop === 'yes' || loop === 'Yes');

console.log("Thanks for using our service. Goodbye!");
