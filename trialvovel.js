const prompt = require("prompt-sync")();

let word;
console.log('checking alphabets');
word = prompt('Enter a word: \n');

let vowelCount = 0;
let consonantCount = 0;

for(let i = 0; i < word.length; i++) {
  let letter = word[i].toLowerCase();
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vowelCount++;
      break;
    case ' ':
      break;
    default:
      consonantCount++;
      break;
  }
}

console.log('Number of vowels entered: ' + vowelCount);
console.log('Number of consonants entered: ' + consonantCount);
