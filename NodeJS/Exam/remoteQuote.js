const axios = require("axios");
const { showQuote } = require("./myUtility");

const showRemoteQuoteHandler = (args) => {
  axios
    .get(args.linkPath)
    .then(({ data }) => {
      showQuote(data);
    })
    .catch((error) =>
      console.log(
        "There was an error while downloading the quote.\nPlease check the server address for correctness or contact the software developer.\n" +
          error.message
      )
    );
};

module.exports = {
  command: "remote",
  desc: "Show random quote from an external server",
  handler: showRemoteQuoteHandler
};
