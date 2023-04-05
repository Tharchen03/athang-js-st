let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
// setting new arrays
condiments = ['Mayo'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// setting new arrays after 3
utensils[3] = ('Spoon')
console.log(utensils)
// condiments[0] ='Mayo';

console.log(condiments)
console.log(condiments)


// it returns the number of items in the array. We access the .length property just like we do with strings.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length)


// ARRAYS
const chores = ['wash dishes', 'do laundry', 'take out trash'];
// .push() changes, or mutates, the existing array
chores.push('thars','chens');
console.log(chores)


const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// .pop(), removes the last item of an array.
 chores1.pop();

 console.log(chores1);



 const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// removes fist arry
groceryList.shift();
// adds fist arry
groceryList.unshift('popcorn');


//  arry in between
console.log(groceryList.slice(1,4));

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

console.log(groceryList);


//nested arrays
let numberClusters =[ [1,2], [3,4],[5,6] ];

const target = numberClusters[2][1];
console.log(target);
