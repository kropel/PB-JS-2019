// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck. After that the solution is to tell us what is the best poker set.

// w-window, c-czerwień, z-żołądź, d-dzwonek
// 11-walet, 12-dama, 13-krol, 14-as

let colors = ["w", "c", "z", "d"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function card(color, value) {
  this.color = color;
  this.value = value;
}

let deck = colors
  .map((color) => values.map((value) => new card(color, value)))
  .reduce((previouse, current) => previouse.concat(current));

let hend = [];

function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 5; i++) {
  hend.push(deck.splice(getRandom(deck.length), 1)[0]);
}
console.log(hend);
