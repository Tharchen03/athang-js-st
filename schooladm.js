
const prompt = require('prompt-sync')();

let Grade, name, age, CID, eng, dzo, math, fees;

console.log("School Admission\n")
Grade = prompt('Enter Your Grade: <1 -3>  ');
name = prompt('Enter your fullname: ');
age = parseInt(prompt('Enter your age: '));
CID = parseInt(prompt('Enter your CID: '));
eng = parseInt(prompt('Enter your eng marks: '));
dzo = parseInt(prompt('Enter your dzo marks: '));
math = parseInt(prompt('Enter your math marks: '));
fees = parseInt(prompt('Enter your fees : '));

let per = (eng + dzo + math) / 3;

if (Grade == 'Grade 1') {
    if (per >= 60 && fees == 25000) {
        console.log("Admission successfull! Name:  " + name + "  percentage: " + per)
        console.log("Age: " + age + " Cid: " + CID + "percentage: " + per);

    } else (
        console.log("Admission Failed! ")

    )


} else if (Grade == 'Grade 2') {
    if (per >= 40 && fees == 30000) {
        console.log("Admission successfull! Name:  " + name + "  percentage: " + per)
        console.log("Age: " + age + " Cid: " + CID + "percentage: " + per);

    } else (
        console.log("Admission Failed! ")

    )


} else if (Grade == 'Grade 3') {
    sci = parseInt(prompt('Enter your  sci: '));
    per1 = (eng + dzo + math + sci) / 4;
    if (per1 >= 50 && fees == 45000) {
        console.log("Admission successfull! Name:  " + name + "  percentage: " + per1)
        console.log("Age: " + age + " Cid: " + CID + "percentage: " + per1);

    } else (
        console.log("Admission Failed! ")

    )


}
else (
    console.log("Admission Failed! ")
)