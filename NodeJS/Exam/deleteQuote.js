const { showQuote, read, write } = require("./myUtility");

const deleteQuoteHandler = (args) => {
  read(args.filePath)
    .then((data) => {
      let quotes = JSON.parse(data);
      let indexQuote = quotes.findIndex(({ id }) => id === args.id);
      if (indexQuote < 0) {
        throw 'Sorry, can\'t find quote id. Please try again or use "list" parameter to find quote id.';
      } else {
        let deleteQuote = quotes.splice(indexQuote, 1)[0];
        return { quotes, deleteQuote };
      }
    })
    .then(({ quotes, deleteQuote }) => {
      write(JSON.stringify(quotes), args.filePath);
      return deleteQuote;
    })
    .then((quote) => {
      console.log(`Deleted quote:`);
      showQuote(quote);
    })
    .catch((error) => console.log(error));
};

module.exports = {
  command: "del <id>",
  desc: "Delete quote with given id",
  handler: deleteQuoteHandler
};
