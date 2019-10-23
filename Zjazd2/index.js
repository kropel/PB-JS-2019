let tab = [1,6,23,8,4,8,3,7];

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// 1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sum(tab));


// 2) Create a function that returns sum of first and last elements of given array.

// function sumFirstLat(tab){
//     return tab[0]+tab[tab.length-1];
// }

// console.log(sumFirstLat(tab));


// 3) Create a function that takes a number and return factorial of that number.

// function factorial(num){
//     if(num <= 1){
//         return 1;
//     }
//     return num*factorial(num-1);
// }
// console.log(factorial(13));


// 4) Create a function that returns given array in reverse order. 

// function reverseArr(arr){
//     let revArr = [],
//         length = arr.length-1,
//         i = 0;

//         while(length >= 0){
//             revArr[i++]=arr[length--];
//         }

//     return revArr;
// }

// console.log(reverseArr(tab));


// 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// function sumPair(arr){
//     let sumPairArr = [],
//     length = arr.length;
//     for(let i = 0; i < length-2; i+=2){
//         if(i <= length - 2){
//             sumPairArr.push(arr[i]+arr[i+1]);
//         }
//     }
//     return sumPairArr;
// }
// console.log(sumPair(tab));


// 6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// let sumPair2 = function(arr){
//     let sumPairArr = [],
//         length = arr.length-1;

//         if(length % 2 === 0){
//             for(let i = 0; i < length-1; i+=2){
//                 sumPairArr.push(arr[i] + arr[i+1]);
//             }
//             sumPairArr.push(arr[length]*2);
//         }
//     return sumPairArr;
// }

// console.log(sumPair2([1,6,23,8,4,8,3,7,9]));



// 7) Create a function the return one random element from given array. // use random function

// function getRandomElem(arr){
//     return arr[getRandom(0,arr.length-1)];
// }

// // console.log(getRandomElem(tab));


// // 8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

// function getRandomLowestElem(arr, rep){
//     let repArr = [],        
//         lowest = Number.MAX_SAFE_INTEGER;

//         rep = rep || 1;

//     while(rep > 0){
//         repArr.push(getRandomElem(arr)); //use getRandomElem(arr) from task #7
//         rep--;
//     }

//     for(let i = 0; i < repArr.length; i++){
//         if(lowest > repArr[i]){
//             lowest = repArr[i];
//         }
//     }

//     return lowest;
// }

// console.log(getRandomLowestElem(tab,4));


// 9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.

// function randomArr(arr){
//     let ranArr = [],
//         temp;
//     while(arr.length>0){
//         temp = arr.splice( getRandom(0,arr.length-1), 1);
//         ranArr.push( temp[0] );
//     }
//     return ranArr;
// }
// console.log(randomArr(tab));


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


// 11) Create a function that will return the current day name in Polish.

// function getPolishNameDay(){
//     let days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
//         currentDay = new Date().getDay();
//     return days[currentDay];
// }

// console.log(getPolishNameDay());


// 12) Create a function that tells us how many days till Friday 

// function daysToFriday(){
//     let currentDay = new Date().getDay();
//         return (currentDay <= 5 ? 5-currentDay : 6);     
// }

// console.log(daysToFriday());


// 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

// function basicArithmeticObj(a,b){
//     if(typeof a != "number" || typeof b != "number"){
//         return null;
//     }
//     return {
//         sum: a+b,
//         sub: a-b,
//         multi: a*b,
//         divi: a/b,
//     };
// }
// console.log(basicArithmeticObj(8,4));