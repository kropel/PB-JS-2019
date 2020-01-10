const { showQuote, read } = require("./myUtility");

const listQuotesHandler = (args) => {
  read(args.filePath)
    .then((data) => {
      let filterCategory = {
        //tworze mape dla dodatkowych parametrow potrzebna do filtrowania listy
        a: "author",
        g: "genre",
        o: "occurrence",
        i: "id"
      };
      let parameter = Object.keys(args)[1];
      //przypisuje dodatkowy parametr
      let quotes = JSON.parse(data);
      let categories = [];

      if (filterCategory.hasOwnProperty(parameter)) {
        //sprawdzam czy przekazany został dodatowy parametr -a, -g, -o, -i
        if (typeof args[parameter] === "boolean") {
          //sprawdzam czy przekazano parametr kategorii np. -a [author]
          categories = quotes.reduce(
            //gdzy opcjonalny parametr jest boolean, czyli nie ma parametru kategorii
            (
              acumulator,
              current //tworze tablice ze wszyskimi wartosciami danego prametru
            ) =>
              Array.from(
                new Set(acumulator.concat(current[filterCategory[parameter]])) //dzieki Set elementy tablicy nie powtarzaja sie
              ),
            []
          );
        } else {
          //jesli zostal podany parametr kategorii tworze tablice z parametrem
          categories = [args[parameter]];
        }
        if (categories.length > 1) {
          if (typeof categories[0] === "number") {
            categories.sort((a, b) => a - b);
          } else if (typeof categories[0] === "string") {
            categories.sort((a, b) => a.localeCompare(b));
          }
        }

        categories.forEach((category) => {
          //iteruje po wszystkich parametrach kategorii
          console.log(`\n\x1b[35mCategory: ${category}\x1b[0m\n`);
          quotes //tworze przefiltrowana tablice
            .filter((quote) =>
              typeof quote[filterCategory[parameter]] === "number"
                ? quote[filterCategory[parameter]] === category
                : quote[filterCategory[parameter]].indexOf(category) >= 0
            )
            .forEach((quote) => showQuote(quote));
        });
      } else {
        //kiedy nie zostal przekazany zaden parametr wyswietlam cala liste
        for (let quote of quotes) {
          showQuote(quote);
        }
      }
    })
    .catch((error) => {
      console.log(
        'There was an error loading the list of quotes.\nUse the "add" function first or contact the software developer.\n\x1b[31mNote the "add" function may delete the quotes you have previously.\x1b[0m\n' +
          error.name +
          " " +
          error.message
      );
    });
};

module.exports = {
  command: "list",
  desc:
    "Show list of quotes.\nHas optional additional parameters: \n\t-a (filtered author list)\n\t-g (filtered genre list)\n\t-i (filtered id list)\n\t-o (filtered occurrence list)",
  handler: listQuotesHandler,
  builder: {
    a: {
      desc:
        "Show quotes from the list by author.\nAccepts an additional parameter [author]\nExample:\t-a [author]"
    },
    g: {
      desc:
        "Show quotes from the list by genre.\nAccepts an additional parameter [genre]\nExample:\t-g [genre]"
    },
    i: {
      desc:
        "Show quotes from the list by id.\nAccepts an additional parameter [id]\nExample:\t-i [id]"
    },
    o: {
      desc:
        "Show quotes from the list by occurrence.\nAccepts an additional parameter [occurrence]\nExample:\t-o [occurrence]"
    }
  }
};
