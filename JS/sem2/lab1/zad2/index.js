function getRandom(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeGuessNuberFunction(max, min) {
  let number = getRandom(max, min);

  console.log(`Number sought is ${number}`);

  return function(guessNumber) {
    if (number < guessNumber) {
      return -1;
    } else if (number === guessNumber) {
      return 0;
    } else {
      return 1;
    }
  };
}

const counter = () => {
  let i = 1;
  return () => i++;
};

function game(max = 100, min = 1) {
  let guessNumber = makeGuessNuberFunction(max, min);
  let tryNumber = getRandom(max, min);
  let result = guessNumber(tryNumber);
  let count = counter();

  while (result != 0) {
    console.log(`${count()}. shoot => ${tryNumber}`);
    result > 0 ? (min = tryNumber + 1) : (max = tryNumber - 1);
    tryNumber = getRandom(max, min);
    result = guessNumber(tryNumber);
  }

  console.log(
    `Congratulations, you have found number >> ${tryNumber} << in ${count()} tries.`
  );
}

game();
