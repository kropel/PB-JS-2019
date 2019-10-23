let tab = [1,6,23,8,4,8,3,7];

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// 10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d) 


// function randomOperation(arr){
//     let sum = arr[0];
//     for(let i = 1; i<arr.length; i++){
//         if( (getRandom(1,10) % 2) === 0 ){
//             sum += arr[i];
//         } else {
//             sum -= arr[i];
//         }
//     }
//     return sum;
// }
// console.log(randomOperation(tab));
