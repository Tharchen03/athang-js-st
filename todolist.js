const prompt = require('prompt-sync')();

let details = prompt("task: ");

switch (details) {
    case "wake up":
        console.log("10:30 am");
        break;
    case "lunch":
        console.log("1:00 pm");
        break;
    case "snacks":
        console.log("3:30pm");
        break;
    case "dinner":
        console.log("5:30 pm");
        default:
        console.log("no value");

}