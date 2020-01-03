// Create a solution that will tell us what poker set we have. The solution is to deal us 5 Cards from the standard 52 Card deck. After that the solution is to tell us what is the best poker set.

// w-wino, c-czerwień, z-żołądź, d-dzwonek
// 11-walet, 12-dama, 13-krol, 14-as
function game() {
  const colors = ["w", "c", "z", "d"];
  const colorsName = {
    w: "Wino",
    c: "Czerwień",
    z: "Żołądź",
    d: "Dzwonek"
  };
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const valuesName = {
    11: "Walet",
    12: "Dama",
    13: "Król",
    14: "As"
  };

  class Card {
    constructor(color, value) {
      this.color = color;
      this.value = value;
    }
    getName() {
      let valName;
      this.value > 10
        ? (valName = valuesName[this.value])
        : (valName = this.value);
      return `${valName} ${colorsName[this.color]}`;
    }
  }

  let deck = colors
    .map((color) => values.map((value) => new Card(color, value)))
    .reduce((previouse, current) => previouse.concat(current));

  let hend = [];

  function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < 5; i++) {
    hend.push(deck.splice(getRandom(deck.length), 1)[0]);
  }

  let byColors = hend.reduce((acumulator, current) => {
    acumulator[current.color] = acumulator[current.color] || [];
    acumulator[current.color].push(current);
    return acumulator;
  }, {});

  let byValues = hend.reduce((acumulator, current) => {
    acumulator[current.value] = acumulator[current.value] || [];
    acumulator[current.value].push(current);
    return acumulator;
  }, {});

  let keysColors = Object.keys(byColors);
  let keysValues = Object.keys(byValues);
  keysValues = keysValues.map((key) => Number(key));
  let sortedKeysValues = keysValues.sort((a, b) => b - a); //posortwoane od najwiekszej
  let uniqueValue = [...new Set(sortedKeysValues)]; //unikalne wartosci

  // Poker
  if (
    keysColors.length === 1 && //Jeden kolor
    uniqueValue.length === 5 && // 5 unikatowych kart
    uniqueValue[0] - uniqueValue[uniqueValue.length - 1] === 4 // 5 kart po kolei
  ) {
    if (uniqueValue[0] === 14) {
      return ["Poker królewski", byValues[uniqueValue[0]][0].getName()];
    } else {
      return ["Poker", byValues[uniqueValue[0]][0].getName()];
    }
  }
  //Kareta || Ful
  if (keysValues.length === 2) {
    let nameScheme = "";
    let largestCard = "";
    if (
      byValues[keysValues[0]].length === 4 ||
      byValues[keysValues[1]].length === 4
    ) {
      nameScheme = "Kareta";
    } else if (
      byValues[keysValues[0]].length === 3 ||
      byValues[keysValues[1]].length === 3
    ) {
      nameScheme = "Full";
    }
    largestCard =
      byValues[keysValues[0]].length > byValues[keysValues[1]].length
        ? byValues[keysValues[0]][0].getName()
        : byValues[keysValues[1]][0].getName();
    return [nameScheme, largestCard];
  }
  //Kolor
  if (keysColors.length === 1) {
    return ["Kolor", byValues[uniqueValue[0]][0].getName()];
  }
  // Strit
  if (keysColors.length > 1 && uniqueValue.length === 5) {
    if (uniqueValue[0] - uniqueValue[uniqueValue.length - 1] === 4) {
      return ["Strit", byValues[uniqueValue[0]][0].getName()];
    } else if (uniqueValue[0] === 14 && uniqueValue[4] === 2) {
      // dla "AS'a" i "2", as przyjmuje najniższą wartość w tym wypadku 1
      if (uniqueValue[1] - 1 === 4) {
        return ["Strit", byValues[uniqueValue[1]][0].getName()];
      }
    }
  }
  //Trójka || dwie pary
  if (keysValues.length === 3) {
    let namesCards = "";
    for (let key in byValues) {
      if (byValues[key].length === 3) {
        return ["Trójka", byValues[key][0].getName()];
      } else if (
        byValues[key].length === 2 &&
        byValues[key][0].getName() != namesCards
      ) {
        namesCards += byValues[key][0].getName() + ", ";
      }
    }
    return ["Dwie pary", namesCards.slice(0, -2)];
  }
  //Para
  if (keysValues.length === 4) {
    for (let key in byValues) {
      if (byValues[key].length === 2) {
        return ["Para", byValues[key][0].getName()];
      }
    }
  }
  //Najwyższa karta
  return ["Najwyższa karta", byValues[uniqueValue[0]][0].getName()];
}

console.log(game());
