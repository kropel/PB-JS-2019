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

// function reverse() {
//   // let ret = this.toString(10);
//   // ret = [...ret];
//   // ret = ret.reverse().join("");
//   // ret = parseInt(ret, 10);
//   return Number([...(this.toString())].reverse().join(""));
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


const dataArray = require("./Data.json");
const dataArrayJSON = JSON.stringify(dataArray);
// console.table(dataArrayJSON);

function DetailsOfPayent(Type, company, date) {
  this.Type = Type;
  this.company = company;
  this.date = new Date(Date.parse(date.split("-").reverse()));
}

function Payent(index, _id, cost, Type, company, date) {
  this.index = index;
  this._id = _id;
  this.cost = Number(cost);
  this.detailsOfPayent = new DetailsOfPayent(Type, company, date);
}

let payentArray = dataArray.map(element => {
  let {
    index,
    _id,
    cost,
    detailsOfPayent: { Type, company, date }
  } = element;

  return new Payent(index, _id, cost, Type, company, date);
});

Payent.prototype.getYear = function() {
  return this.detailsOfPayent.date.getFullYear();
};
Payent.prototype.getMonth = function() {
  return this.detailsOfPayent.date.getMonth();
};
Payent.prototype.getDay = function() {
  return this.detailsOfPayent.date.getDay();
};
Payent.prototype.getType = function() {
  return this.detailsOfPayent.Type;
};

let moneyIn2014 = payentArray
  .filter(payent => payent.getYear() === 2014)
  .reduce(
    (previous, current) => Number((previous + current.cost).toFixed(2)),
    0
  );

let moneyByCompany = payentArray.reduce((previous, current) => {
  if (previous.hasOwnProperty(current.detailsOfPayent.company)) {
    previous[current.detailsOfPayent.company] = Number(
      (previous[current.detailsOfPayent.company] + current.cost).toFixed(2)
    );
  } else {
    previous[current.detailsOfPayent.company] = current.cost;
  }
  return previous;
}, {});

let moneyByTransactionType = payentArray.reduce((previous, current) => {
  if (previous.hasOwnProperty(current.detailsOfPayent.Type)) {
    previous[current.detailsOfPayent.Type] = Number(
      (previous[current.detailsOfPayent.Type] + current.cost).toFixed(2)
    );
  } else {
    previous[current.detailsOfPayent.Type] = current.cost;
  }
  return previous;
}, {});

let moneyPerMonth = payentArray.reduce((previous, current) => {
  if (previous.hasOwnProperty(current.getMonth())) {
    previous[current.getMonth()] = Number(
      (previous[current.getMonth()] + current.cost).toFixed(2)
    );
  } else {
    previous[current.getMonth()] = current.cost;
  }
  return previous;
}, {});

let moneyPerDay = payentArray.reduce((previouse, current) => {
  if (previouse.hasOwnProperty(current.getDay())) {
    previouse[current.getDay()] = Number(
      (previouse[current.getDay()] + current.cost).toFixed(2)
    );
  } else {
    previouse[current.getDay()] = current.cost;
  }
  return previouse;
}, {});

console.log(moneyIn2014);
