const prompt = require('prompt-sync')();

let a=1;
let b=2;
let c=3;
let d=4;

if(a<b){
    console.log("exc a");
    if(c<a){
        console.log("exc c");
    }else{
        console.log("exc d");
    }

}else{
    console.log('exc b');
}
