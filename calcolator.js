const prompt = require('prompt-sync')();

// let no =parseInt(prompt('Enter your first number: '));
// let no1 =parseInt(prompt('Enter your first number2: '));
// console.log(no + no1);

let calculator1;
do{
   let num1,num2,add,sub,mul,div,calculator; 
   // add= num1+num2;
   
   
   console.log("CALCULATOR\n")
   
   calculator = prompt('enter wat calculation u want to do:  ');
    num1 =parseInt(prompt('Enter your first number: '));
    num2 =parseInt(prompt('Enter your second number: '));
   
   
    if(calculator=='addition'){
       add= num1 + num2;
       console.log(add)
   
    }else if(calculator=='subtraction'){
       sub= num1 - num2;
       console.log(sub)
   
    }else if(calculator=='multiplication'){
       mul= num1 * num2;
       console.log(mul)
   
    }else if(calculator=='division'){
       div= num1 / num2;
       console.log(div)
   
    }else{
       console.log('not defiened')
    }
    calculator1 = prompt(' u want to do again:  ');
}
while(calculator1=="yes" )

