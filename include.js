// let b = 'hi bithches';

// if(b.includes('hi')){
//     console.lo
// }

const prompt = require("prompt-sync")();

// let email =prompt('Enter your Email: ');
// let cemail =prompt('Enter your Email: ');

// if(email==cemail && email.includes("@gmail.com")  &&  cemail.includes("@gmail.com")){
//     console.log('Successful'); 

//     // if(email.includes("@gmail.com")){
//     //     console.log('invalid pattern');

//     // }else{

//     // }
// }else{
//     console.log('unSuccessful \n check ur email pattern \n make sure ur email; matches'); 

// }


let email = prompt('Enter your Email: ');
let cemail = prompt('Enter your Email: ');

if (email == cemail) {           
    if (email.includes("@gmail.com") && cemail.includes("@gmail.com")) {
        console.log('Successful');
       
    }else{
        console.log('invalid pattern');
    }

} else {
    console.log('unSuccessful \n check ur email pattern \n make sure ur email; matches');

}