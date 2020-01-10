const util = require("util");
const fs = require("fs");

/**
 * Wraps the "readFile" function of the "fs" module in Promise
 * @param {string} filePath The path of file to read.
 * @return {Promise} The Promise of readFile function from the fs module
 */
const read = (filePath) => util.promisify(fs.readFile)(filePath, "utf8"); //zwraca opakowana funkcje readFile z fs

/**
 * Wraps the "writeFile" function of the "fs" module in Promise
 * @param {any} data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param {string} filePath The path of file to write.
 * @return {Promise} The Promise of writeFile function from the fs module
 */
const write = (data, filePath) => util.promisify(fs.writeFile)(filePath, data); //zwraca opakowana funkcje writeFile z fs
/**
 * Generate pseudo random number.
 * @param {number} max Maximum number range
 * @param {number} min Minimum number range
 * @return {number} Return the pseudo random number,  from (max - min) to max;
 */
const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min); //zwraca psudolosowa liczbe z przedialu <0, max)

/**
 * Shows quote in console.log
 * @param {Object}
 */
const showQuote = ({ id, quote, author, genre = [], occurrence = 0 }) => {
  //funkcja wyswietlajaca cytat
  console.log(
    `id: ${id}\n\tquote: \x1b[34m${quote}\x1b[0m\n\tauthor: ${author}\n\tgenre: ${genre.join(
      ", "
    )}\n\toccurrence: ${occurrence}`
  );
};

module.exports = {
  random,
  showQuote,
  read,
  write
};
