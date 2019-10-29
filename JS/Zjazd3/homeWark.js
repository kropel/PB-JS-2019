// *****************************************************
// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

// let iife = (function(){
//     let value;

//     function checkValue(){
//         if(value === undefined){
//             return false;
//         }else if((typeof value === 'string') && value.length === 0){
//             return false;
//         }else {
//             return true;
//         }
//     }

//     function setValue(val){
//         value = val;
//     }

//     function showValue(){
//         if(!checkValue()){
//             return 'There is nothing to show. Please use "setValeu()" method first.';
//         }
//         return value;
//     }

//     function reverseValue(){
//         if(typeof value === 'number'){
//             value *= (-1);
//         } else if(typeof value === 'string'){
//             let temp = '',
//                 i = value.length-1;
//             while(i >= 0){
//                 temp += value[i--];
//             }
//             value = temp;
//         }
//     }

//     return {
//         setValue: setValue,
//         showValue: showValue,
//         reverseValue: reverseValue,
//     };
// })();
// // console.log(iife);
// console.log(iife.showValue());
// iife.setValue(23);
// console.log(iife.showValue());
// iife.reverseValue();
// console.log(iife.showValue());
// iife.setValue("siemanko");
// console.log(iife.showValue());
// iife.reverseValue();
// console.log(iife.showValue());
// iife.setValue('');
// console.log(iife.showValue());

// *****************************************************
// 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y). Function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value. 

// function add(a, b){
//     return a+b;
// }
// function sub(a, b){
//     return a-b;
// }
// function multi(a, b){
//     return a*b;
// }
// function divis(a, b){
//     return a/b;
// }

// let calculate = (function(){
//     let x = 12,
//         y = 6;
//     function calculate(operation, show){
//         let result = operation(x, y);
//         show(result);
//         return result;
//     }
//     function showResult(elem){
//         console.log(elem);
//     }
//     function setValeu(a, b){
//         if(a && typeof a === 'number'){
//             x = a;
//         }
//         if(b && typeof b === 'number'){
//             y = b;
//         }
//     }
//     function setOperation(operation){
//         switch(operation){
//             case 'add':
//                 calculate(add, showResult);
//                 break;
//             case 'sub':
//                 calculate(sub, showResult);
//                 break;
//             case 'multi':
//                 calculate(multi, showResult);
//                 break;
//             case 'divis':
//                 calculate(divis, showResult);
//                 break;

//         }
//     }
//     return {
//         setOperation: setOperation,
//         setValeu: setValeu,
//     };
// })();

// calculate.setValeu(20);
// calculate.setOperation('add');
// calculate.setOperation('sub');
// calculate.setOperation('multi');
// calculate.setOperation('divis');

// *****************************************************
// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.X+this.y}}

