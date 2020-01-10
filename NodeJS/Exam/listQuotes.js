const { showQuote, read } = require("./myUtility");

const listQuotesHandler = (args) => {
  read(args.filePath)
    .then((data) => {
      // console.log(args);
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
          categories = Array.isArray(args[parameter])
            ? args[parameter]
            : [args[parameter]];
        }

        if (categories.length > 1) {
          if (typeof categories[0] === "number") {
            categories.sort((a, b) => a - b);
          } else if (typeof categories[0] === "string") {
            categories.sort((a, b) => a.localeCompare(b));
          }
        }
        console.log(
          `Listing quotes for ${
            filterCategory.hasOwnProperty(parameter)
              ? filterCategory[parameter]
              : ""
          } ${categories.join(", ")}:`
        );
        categories.forEach((category) => {
          //iteruje po wszystkich parametrach kategorii
          console.log(
            `\n\x1b[35m${filterCategory[parameter] + ": " + category}\x1b[0m\n`
          );
          quotes //filtruje i wyswietlam tablice tablice cytatow
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
    "Show list of quotes.\nHas optional additional parameters: \n-a [author]\t- filtered author list\n-g [genre]\t- filtered genre list\n-i [id]\t- filtered id list\n-o [occurrence]\t- filtered occurrence list",
  handler: listQuotesHandler,
  builder: {
    a: {
      desc:
        "Show quotes from the list by author.\nAccepts an additional and optional parameter [author]\nExample:\t list -a [author]\n"
    },
    g: {
      desc:
        "Show quotes from the list by genre.\nAccepts an additional and optional parameter [genre]\nExample:\t list -g [genre]\n"
    },
    i: {
      desc:
        "Show quotes from the list by id.\nAccepts an additional and optional parameter [id]\nExample:\t list -i [id]\n"
    },
    o: {
      desc:
        "Show quotes from the list by occurrence.\nAccepts an additional and optional parameter [occurrence]\nExample:\t list -o [occurrence]\n"
    }
  }
};
