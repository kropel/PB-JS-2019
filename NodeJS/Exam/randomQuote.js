const { random, showQuote, read, write } = require("./myUtility");

const randomQuoteHandler = (args) => {
  read(args.filePath)
    .then((quotes) => JSON.parse(quotes))
    .then((quotes) => {
      let randomIndex = random(quotes.length);
      console.log("Quote for today:");
      showQuote(quotes[randomIndex]);
      quotes[randomIndex].occurrence += 1;
      return quotes;
    })
    .then((quotes) => write(JSON.stringify(quotes), args.filePath))
    .catch((error) => console.log(error.message));
};

module.exports = {
  command: "random",
  desc: "Show random quote from list",
  handler: randomQuoteHandler
};
