const returnNumbers = (something) =>
  [...something.toString()]
    .map((element) => parseInt(element, 10))
    .filter((ellem) => Number.isInteger(ellem));
console.log(returnNumbers("wsb2672jheutn5u4"));
