// Write your code below

// this code is to push simmaliar arry from two array to a new array


const bobsFollowers = ['tharchen', 'karma', 'wangmo', 'sherab'];

let tinasFollowers = ['tharchen', 'karma','dd']

let mutualFollowers = []
for(let i=0; i < bobsFollowers.length; i++){
  for(let k=0; k < tinasFollowers.length; k++ ){
    if(bobsFollowers[i] === tinasFollowers[k]){
      mutualFollowers.push(bobsFollowers[i])


    }

  }
}
console.log(mutualFollowers)

