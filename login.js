const prompt = require('prompt-sync')();

let loop;
let user1;
let mainpassword;
do {


    // let acc, username,password,cpassword;

    console.log("You wanna Sign-Up or Login?");

    let acc = prompt('Enter  1.If You wanna Sign-Up  2.If You wanna Login');

    if (acc == 1) {
        console.log("Create a Account");
        let username = prompt('Set your username:  ');
        let password = parseInt(prompt('Set your password: '));
        let cpassword = parseInt(prompt('Confirm your password:  '));

        if (password == cpassword) {
            console.log('Dear ' + username + ' Your Account Creation Was Successful la');
            user1 = username;
            mainpassword = password;

        } else {
            console.log('Your password Did Not Match. Sorry ' + username + 'try again');
        }
    } else if (acc == 2) {
        console.log("Login to Account");
        let username = prompt(' Enter Your username:  ');
        let password = parseInt(prompt('Enter your password: '));

        if ( username==user1 && password == mainpassword ) {
            console.log('Welcome ' + username + ' To Your Account la');
        } 
        else {
            console.log('Your password Did Not Match. Sorry  ' + username + ' try again la');
        }




    } else {
        console.log('Please Enter a Valid Number');
    }

    loop = prompt('If You wanna Sign-Up or Login? Again:  Than enter yes  ');

} while (loop == 'yes' || loop == 'Yes')

console.log("Thanks for using our service. Goodbye!");