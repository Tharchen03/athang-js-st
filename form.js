const prompt = require('prompt-sync')();
// let name = [];
// let age = [];
// let hobby = [];

function form(name,age,hobby) {

    console.log('\nnam:' + name + '\nAge:' + age + '\nhobby:' + hobby);
    // console.log(name);
}

function form1(name,age,hobby) {

    console.log('\nhis fullname is: ' + name + ' his Age is:' + age + ' and his hobbys are: ' + hobby);
    // console.log(name);
}


let name = prompt('Enter your name:  ');
let age = parseInt(prompt('Enter your age:  '));
let hobby = [prompt('Enter your hobby:  ')];

form(name, age, hobby);
form1(name, age, hobby);
