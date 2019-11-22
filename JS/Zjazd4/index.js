// 1) Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

// function reverse(){
//     // let reversedString = '',
//     //     length = this.length -1;
//     // while(length >= 0){
//     //     reversedString += this[length--];
//     // }
//     // return reversedString;
//     return [...this].reverse().join('');
// }

// String.prototype.reverse = reverse;
// console.log("Jakis text, a moze cos jeszcze :)".reverse());

// 2) Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.

// function reverse(){
//     // let ret = this.toString(10);
//     // ret = [...ret];
//     // ret = ret.reverse().join("");
//     // ret = parseInt(ret, 10);
//     return parseInt( [...this.toString()].reverse().join('') , 10);
// }

// Number.prototype.reverse = reverse;

// console.log((1234).reverse());

// 3) Based on included JSON file. 
// ## a. Create a function that will return Json from the file. a
// ## b. Create a structures to hold data from the file. b
// ## c. Map data from function a to structure from b.
// ## d. Create object that will give us data about:
//     ## I. How much money was spend in 2014
//     ## II. What company was earning how much
//     ## III. What type on transaction was having what spending’s.
//     ## IV. Values of the spending in each month
//     ## V. Values of the spending in each day of the week

let Data = require('./Data.json');

const getJSON = (Data) => JSON.stringify(Data);

let objJSON = JSON.parse(getJSON(Data));

function DetailsOfPayent(type, company, date){
    this.type = type;
    this.company = company;
    this.date = new Date(date.split('-').reverse());
}
function Transaction(index, _id, cost, Type, company, date){
    this.index = index;
    this._id = _id;
    this.cost = Number.parseFloat(cost);
    this.detailsOfPayent = new DetailsOfPayent(Type, company, date);
}

let transactionStructure = objJSON.map((obj) => {
    let {index, _id, cost, detailsOfPayent: {Type, company, date}} = obj;
    return new Transaction(index, _id, cost, Type, company, date);
});

console.table(transactionStructure);
