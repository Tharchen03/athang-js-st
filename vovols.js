const prompt = require("prompt-sync")();

let word;
console.log('checking alphabets');
word = prompt('Enter a word: \n');

let vowelCount = 0;
let consonantCount = 0;

for(let i = 0; i < word.length; i++) {
  let letter = word[i];
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    vowelCount++;
  } 
  else if (letter !== ' ') {
    consonantCount++;
  }
}

console.log('Number of vowels entered: ' + vowelCount);
console.log('Number of consonants entered: ' + consonantCount);