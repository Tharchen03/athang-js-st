const prompt = require('prompt-sync')();

let loan, name, Ammount, Monthly, Total,wid,Withdraw_amout,Total_amout,Deposit_amount,Total_deopsit_amout ;

console.log("Bank Of Bhutan\n");

loan = prompt('Loan  ');
name = prompt('Enter your FullName: ');
Ammount = parseInt(prompt('Enter your Ammount: '));
Duration  = parseInt(prompt('Duration  in years: '));
Monthly = Ammount*0.15*Duration;
Total = Monthly+Ammount;

console.log("HI " +name+ " this is reslut ");
console.log("Monthly: " +Monthly);
console.log("Total: " +Total);

console.log("Bank Of Bhutan\n");

wid = prompt('Withdrawal or Deposit? please type and press enter  ');

if (wid == 'Withdrawal') {
    Withdraw_amout = parseInt(prompt("Enter your Withdrawal Ammount:  "));
    Total_amout = 50000;

    if (Withdraw_amout <= 50000) {
        Ramianing_amount=Total_amout-Withdraw_amout;
        console.log("Dear " +name+ " Your Ramianing Amount is:  " +Ramianing_amount);
    } 
} else if (wid == 'Deposit') {
    Deposit_amount= parseInt(prompt("Enter your Deposit  Ammount:  "));
    Total_deopsit_amout=(Deposit_amount+Total_amout);
    console.log("Dear " +name+ " Your Total Amount is:  " +Total_deopsit_amout);
} 



// } else if (Grade == 'Grade 3') {
//     sci = parseInt(prompt('Enter your  sci: '));
//     per1 = (eng + dzo + math + sci) / 4;
//     if (per1 >= 50 && fees == 45000) {
//         console.log("Admission successfull! Name:  " + name + "  percentage: " + per1)
//         console.log("Age: " + age + " Cid: " + CID + "percentage: " + per1);

//     } else (
//         console.log("Admission Failed! ")

//     )


// }
// else (
//     console.log("Admission Failed! ")
// )