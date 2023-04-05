const prompt = require("prompt-sync")();

let word, word1;
console.log('checking similar alphabets');
word = prompt('Enter a word: \n');
word1 = prompt('Enter another word: \n');

let a = 4;
let count = 0;


for( i = 0; i <= 4; ++i) {

  if( word[i] == word1[a] || word[i] == word1[a-2] || word[i]  ==  word1[a-3]) {
    count++;

  }

 

}

console.log(`Number of similar letters: ${count}`);

