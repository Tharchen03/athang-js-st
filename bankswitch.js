const prompt = require("prompt-sync")();
let loop;
do{

    console.log("Bank Of Bhutan\n\n");

    let opt = parseInt(prompt("Enter Your choice(1.Loan ,2. Withdrawal & Deposit  3.My Net Profit ): "));

    switch (opt) {
        case 1:
            console.log("\n1.Loan");
            console.log("Enter Your Details");

            let name = prompt('Enter your FullName: ');
            let Ammount = parseInt(prompt('Enter your Ammount: '));
            let Duration = parseInt(prompt('Duration  in years: '));
            let Monthly = Ammount * 0.15 * Duration;
            let Total = Monthly + Ammount;

            console.log("HI " + name + " this is reslut ");
            console.log("Monthly: " + Monthly);
            console.log("Total: " + Total);
            break;

        case 2:
            console.log("Withdrawal & Deposit");
            let wid = prompt('Withdrawal or Deposit? please type and press enter  ');

            if (wid == 'Withdrawal') {
                let Withdraw_amout = parseInt(prompt("Enter your Withdrawal Ammount:  "));
                let Total_amout = 50000;

                if (Withdraw_amout <= 50000) {
                    let Ramianing_amount = Total_amout - Withdraw_amout;
                    console.log("Dear coustmer Your Ramianing Amount is:  " + Ramianing_amount);
                } else {
                    console.log("you Dont have this much ammount");
                }
            } else if (wid == 'Deposit') {
                let Deposit_amount = parseInt(prompt("Enter your Deposit  Ammount:  "));
                let Total_amout = 50000;
                let Total_deopsit_amout = Deposit_amount + Total_amout;
                console.log("Dear Coustmer Your Total Amount is:  " + Total_deopsit_amout);
            } else {
                console.log(" Failed!!");
            }
            break;

        case 3:
            console.log("3.My Net Profit");
            console.log("Enter Your Details");

            let Total_amout = parseInt(prompt("Enter ur Total Amount: "));
            let Duration1 = parseInt(prompt("Enter ur Duration : "));
            let Total_profit = Total_amout * 0.05 * Duration1;
            let Total1 = Total_profit + Total_amout;

            console.log("YOUR NET PROFIT IS:  " + Total_profit);
            console.log("YOUR NET Total:  " + Total1);
            break;

        default:
            console.log("Wrong Input!!! \nEnter option from 1-3");
            break;
    }
loop = prompt("Do You want to the service again ");
}
while(loop == 'yes' || loop == 'Yes')

console.log("Thanks for using our service. Goodbye!");
