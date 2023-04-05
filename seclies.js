const prompt = require('prompt-sync')();
let total_Beer = 0;
let beereachday = 1;

for (let day = 1; day <= 28; day++) {
  if (day > 2) {
    beereachday++;
  }
  total_Beer += beereachday;
}

console.log(`MR. might would drink a total of ${total_Beer} beer bottles in February 2024.`);

// // Initialize a variable to keep track of the total number of beer bottles
// let totalBottles = 0;

// // Loop through the days in February 2024
// for (let day = 1; day <= 28; day++) {
//   // Determine how many bottles Ap Dopay drinks on this day
//   let bottles = (day % 3) + 1;
  
//   // Add the number of bottles to the total
//   totalBottles += bottles;
// }

// // Output the total number of beer bottles
// console.log("Ap Dopay drank " + totalBottles + " bottles of beer in February 2024.");



// function minimumCoins(c, nu1, nu5, nu10) {
//     let coins = nu1 + nu5 * 5 + nu10 * 10;
//     let price = c * 8;
    
//     if (coins < price) {
//       return -1; // Not enough 
//     }
    
//     let exc = coins - price;
//     let coinsNeeded = 0;
    
//     if (exc >= 10) {
//       coinsNeeded += Math.floor(exc / 10);
//       exc %= 10;
//     }
    
//     if (exc >= 5) {
//       coinsNeeded += Math.floor(exc / 5);
//       exc %= 5;
//     }
    
//     coinsNeeded += exc; // The remaining coins
    
//     return coinsNeeded;
//   }
  
//   // Example usage:
//   console.log('the coins require la:\n' + minimumCoins(3, 10, 2, 1)); 



// function Array(array) {
//     const n = array.length;
//     const result = [];
  
//     // Calculate the product of all the elements on the left side of i
//     let product = 1;
//     for (let a = 0; a < n; a++) {
//       result[a] = product;
//       product *= array[a];
//     }
  
//     // Calculate the product of all the elements on the right side of i
//     product = 1;
//     for (let a = n - 1; a >= 0; a--) {
//       result[a] *= product;
//       product *= array[a];
//     }
  
//     return result;
//   }
  
//   // Example usage
//   const arr = [1, 2, 3, 4, 5];
//   const result = Array(arr);
//   console.log(result);



  
