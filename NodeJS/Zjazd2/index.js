const utils = require("./utils");
const _ = require("lodash");
const argv = require("yargs").argv;
const fs = require("fs");

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];
// const funcResult = utils.uniq(someArray);

// console.log(funcResult);

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));

// console.log(_.difference(tabA, tabB));
// console.log(_.difference(tabB, tabA));

// const tabC = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
// console.log(`Max: ${_.max(tabC)} min: ${_.min(tabC)}`);

let { a, b, operator } = argv;

const add = (a, b) => a + b,
  sub = (a, b) => a - b,
  multi = (a, b) => a * b,
  divid = (a, b) => a / b,
  showMessage = (e) =>
    !!e
      ? console.log(e.toString())
      : console.log('Zapisano wynik do pliku "wynik.txt"'),
  show = (elem) => {
    console.log(elem);
    fs.appendFile("wynik.txt", "\n" + elem, (err) => showMessage(err));
  },
  makeOperation = (a, b, operation, showFunction) => {
    let result = operation(a, b);
    showFunction(result);
  };
switch (operator) {
  case "+":
    makeOperation(a, b, add, show);
    break;
  case "-":
    makeOperation(a, b, sub, show);
    break;
  case "*":
    makeOperation(a, b, multi, show);
    break;
  case "/":
    makeOperation(a, b, divid, show);
    break;
}
