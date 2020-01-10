const addQuote = require("./addQuote");
const listQuotes = require("./listQuotes");
const deleteQuote = require("./deleteQuote");
const randomQuote = require("./randomQuote");
const remoteQuote = require("./remoteQuote");

require("yargs")
  .command(addQuote)
  .command(listQuotes)
  .command(deleteQuote)
  .command(randomQuote)
  .command(remoteQuote)
  .config({
    filePath: "quotes.txt",
    linkPath:
      "http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php"
  })
  .demandCommand()
  .help().argv;
