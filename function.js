const prompt = require("prompt-sync")();

// let a,b,calculator;

// calculator = prompt('enter wat calculation u want to do:  ');
// a =parseInt(prompt('Enter your first number: '));
// b =parseInt(prompt('Enter your second number: '));



// function add() {
//     add=a+b;
//     console.log(add)

// }
// add()
// function sub() {
//     sub=a-b;
//     console.log(sub)

// }
// sub()

function return1() {
    let a = 3 + 3;
    return a;

}
let total = return1();
// console.log(total);

function plan(name, age) {
    return 'hellow ' + name + ' age ' + age;
}

let name = 'st';
let age = 25;


// console.log(plan(name,age));

let loop;

do {
    function variables() {
        a = parseInt(prompt('Enter your first number: '));
        b = parseInt(prompt('Enter your second number: '));

        calculator = prompt('enter wat calculation u want to do:  ');


        if (calculator == 'add') {
            add(a, b);
        } else if (calculator == 'sub') {
            sub(a, b);
        } else if (calculator == 'div') {
            div(a, b);

        }
        else if (calculator == 'mul') { 
            mul(a, b);

        }
        else {
            console.log('invalid');
        }
    }

    function add(a, b) {
        let sum = a + b;
        console.log(sum);

    }

    function sub(a, b) {
        let sub = a - b;
        console.log(sub);

    }
    function div(a, b) {
        let div = a / b;
        console.log(div);
    }
    function mul(a, b) {
        let mul = a * b;
        console.log(mul);
    }
    variables();
    loop = prompt('do u want to do again ');

} while (loop == 'yes' || loop == "Yes");

