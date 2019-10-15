
// ## 1 ##

// From years in array check for leap years [1974, 1900, 1985, 2000]

// let tab = [1974, 1900, 1985, 2000],
//     leapYears =[],
//     length = tab.length,
//     i = 0;
//     while(i < length){
//         if( (tab[i] % 4 === 0 && tab[i] % 100 != 0) || tab[i] % 400 === 0 ){
//             leapYears.push(tab[i]);
//         }
//         i++;
//     }
//     console.log(`Leap yers: ${leapYears.map( x => " "+x)}.`);


// ## 2 ##

// Calculate factorial of 7

// let x = 7,
//     fac = 1;
//     while(x > 0){
//         fac = fac * x--;
//     }
//     console.log(fac);


// ## 3 ##

// Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

// let tab3 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     sum = 0,
//     counter  = tab3.length - 1;
//     while(counter >= 0){
//         if(tab3[counter] % 2 != 0){
//             sum += tab3[counter];
//         }
//         counter--;
//     }
//     console.log(sum);


// ## 4 ##
 
// Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

// let tab4 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     length = tab4.length,
//     i = 0,
//     occurrencMin = 0,
//     occurrencMax = 0,
//     min = Number.MAX_SAFE_INTEGER,
//     max = Number.MIN_SAFE_INTEGER;

//     while( i < length){
//         if(min > tab4[i]){
//             min = tab4[i];
//             occurrencMin = 1;
//         }else if( min === tab4[i] ){
//             occurrencMin++;
//         }

//         if(max < tab4[i]){
//             max = tab4[i];
//             occurrencMax = 1;
//         }else if( max === tab4[i]){
//             occurrencMax++;
//         }
       
//         i++;
//     }
// console.log(`Min value: "${min}" found: ${occurrencMin} times`);
// console.log(`Max value: "${max}" found: ${occurrencMax} times`);


// ** 5 **

// Choose longest string from the array. ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'].

// let tab5 = ['Karol','Politechnika', 'Adam','Rogowski','Politechnika','Super','Weekend'],
//     index = [],
//     tabLength  = tab5.length - 1,
//     wordLengt = 0,
//     tempLength = 0;
// while(tabLength >= 0){  
//     tempLength = tab5[tabLength].length;  
//     if(wordLengt < tempLength){
//         index = [];
//         index.push(tabLength);
//         wordLengt = tempLength;
//     }else if(wordLengt === tempLength){
//         index.push(tabLength);
//     }
//     tabLength--;
// }
// console.log(`Longest string:${index.map( x => " " + tab5[x])}`);


// ** 6 **

// Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

// let tab6 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     indexes = [],
//     length = tab6.length - 1,
//     maxValue = Number.MIN_SAFE_INTEGER;
//     while(length >= 0 ){
//         if(maxValue < tab6[length]){
//             indexes = [];
//             indexes.push(length);
//             maxValue = tab6[length];
//         } else if(maxValue === tab6[length]){
//             indexes.push(length);
//         }
//         length--;        
//     }
//     console.log('Indexes of value: "'+tab6[indexes[0]] +'" => '+ indexes.sort((a,b) => a-b));


// ** 7 **

// Calculate sum value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

// let tab7 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     sum = 0,
//     counter = 0,
//     length = tab7.length - 1;
//     while(length >= 0){
//         if(tab7[length] % 2 === 0){
//             sum += tab7[length];
//             counter++;
//         }
//         length--;
//     }
//     console.log(`Average: ${sum} / ${counter} = ${sum/counter}`);


// ** 8 **

// Calculate sum value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

// let tab8 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     sum = 0,
//     counter = 0,
//     length = tab8.length - 1;

// while(length >= 0){
//     if(length % 2 === 0 && length != 0){
//         sum += tab8[length];
//         counter++;
//     }
//     length--;
// }

// console.log(`Average: ${sum} / ${counter} = ${sum/counter}`);


// ** 9 **

// With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// let tab9 = [1,6,23,8,4,98,3,7,3,98,4,98],
//     result = 0,
//     length = tab9.length - 1;
// while(length >= 0){
//     if(tab9[length] % 2 === 0){
//         result += tab9[length];
//     } else {
//         result -= tab9[length];
//     }
//     length--;
// }
// console.log("Result: " + result);