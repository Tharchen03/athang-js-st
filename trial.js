const prompt = require("prompt-sync")();

// let word1, word2;
// console.log('Checking for similar letters in two 4-letter words.');
// word1 = prompt('Enter the first 4-letter word: ');
// word2 = prompt('Enter the second 4-letter word: ');

// let similarCount = 0;

// for(let i = 0; i < word1.length; i++) {
//   if(word2.indexOf(word1[i]) !== -1) {
//     similarCount++;
//   }
// }

// console.log(`Number of similar letters: ${similarCount}`);



let word1, word2;
console.log('Checking for common letters in two words.');
word1 = prompt('Enter the first word: ');
word2 = prompt('Enter the second word: ');

let commonCount = 0;
let commonLetters = "";

for(let i = 0; i < word1.length; i++) {
  let letter1 = word1[i];
  if(word2==letter1 && !commonLetters==letter1) {
    commonCount++;
    commonLetters += letter1;
  }
}

console.log(`Number of common letters: ${commonCount}`);
console.log(`Common letters: ${commonLetters}`);

