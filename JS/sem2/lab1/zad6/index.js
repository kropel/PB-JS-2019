function isUpercase(char) {
  if (!isNaN(char * 1)) {
    return false;
  }
  if (char === char.toUpperCase()) {
    return true;
  }
  return false;
}

function rotate(word) {
  word = [...word];
  let firstChar = word.shift();
  word[0] = isUpercase(firstChar) ? word[0].toUpperCase() : word[0];
  word.push(firstChar.toLowerCase());
  return word.join("");
}

function translate(text) {
  let words = text.split(" ");
  words = words.reduce((previous, current) => {
    previous.push(`${rotate(current)}ay`);
    return previous;
  }, []);
  return words.join(" ");
}

console.log(translate("The quick brown fox"));
