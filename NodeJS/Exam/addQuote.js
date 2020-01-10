const { random, showQuote, read, write } = require("./myUtility");

const generateId = (base = 0) => Number(`${base}${random(100)}`);

const addQuoteHandler = (args) => {
  read(args.filePath)
    .then((data) => JSON.parse(data))
    .catch((error) => {
      if (error.errno === -2 || error.name === "SyntaxError") {
        return [];
      } else {
        throw error;
      }
    })
    .then((data) => {
      let { quote, author, genre = "" } = args;
      let idGenerate = generateId(data.length);
      while (!!data.find(({ id }) => id === idGenerate)) {
        idGenerate = generateId(data.length);
      }
      data.push({ id: idGenerate, quote, author, genre, occurrence: 0 });
      return data;
    })
    .then((data) => {
      write(JSON.stringify(data), args.filePath);
      return data[data.length - 1];
    })
    .then((quote) => showQuote(quote))
    .catch((error) => console.log(error));
};

module.exports = {
  command: "add <quote> <author> <genre..>",
  usage: "$0 add 'quote text' 'author' 'genre'",
  desc: "Adding quote to list",
  handler: addQuoteHandler
};
