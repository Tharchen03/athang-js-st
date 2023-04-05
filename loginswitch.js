let acc = prompt('Enter \n 1.If You wanna Sign-Up \n 2.If You wanna Login');

let loop;
let user1;
let mainpassword;

do {


    console.log("You wanna Sign-Up or Login?");

    let acc = prompt('Enter \n 1.If You wanna Sign-Up \n 2.If You wanna Login');
let username,password,cpassword;
    switch (acc) {
        case '1':
            console.log("Create a Account");
             username = prompt('Set your username:\n  ');
             password = parseInt(prompt('Set your password:\n '));
             cpassword = parseInt(prompt('Confirm your password:\n '));

            if (password == cpassword) {
                console.log('Dear ' + username + ' Your Account Creation Was Successful la');
                user1 = username;
                mainpassword = password;


            } else {
                console.log('Your password Did Not Match. Sorry ' + username + 'try again');
            }
            break;

        case '2':
            console.log("Login to Account");
             username = prompt(' Enter Your username:\n  ');
             password = parseInt(prompt('Enter your password:\n '));

            if (username == user1 && password == mainpassword) {
                console.log('Welcome ' + username + ' To Your Account la');
            } else {
                console.log('Your password Did Not Match. Sorry  ' + username + ' try again la');
            }
            break;

        default:
            console.log('Please Enter a Valid Number');
            break;
    }

    loop = prompt('If You wanna Sign-Up or Login? Again:\nThan enter yes  ');

} while (loop == 'yes' || loop == 'Yes');
console.log("Thanks for using our service. Goodbye!");
