const prompt = require('prompt-sync')();

let loop;
do {
    let Grade_A = 'A';
    let Grade_B = 'B';
    let Grade_C = 'C';
    let Grade_D = 'D';
    let Grade_E = 'E';
    let Grade_F = 'F';
    let grade = parseInt(prompt('Enter your marks: '));

    switch (true) {
        case (grade >= 90 && grade <= 100):
            console.log('Your grade is: \n' + Grade_A);
            break;
        case (grade >= 60 && grade <= 89):
            console.log('Your grade is:\n' + Grade_B);
            break;
        case (grade >= 30 && grade <= 59):
            console.log('Your grade is:\n' + Grade_C);
            break;
        case (grade >= 10 && grade <= 29):
            console.log('Your grade is:\n' + Grade_D);
            break;
        case (grade >= 1 && grade <= 10):
            console.log('Your grade is:\n' + Grade_E);
            break;
        case (grade === 0):
            console.log('Your grade is:\n' + Grade_F);
            break;
        default:
            console.log('Invalid marks entered!');
            break;


            
    }
    loop = prompt(' Do want to do again enter yes:   ');
}while(loop=="yes" || loop=="yes")

