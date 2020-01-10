const { id = 1 } = require("yargs").argv;
const fs = require("fs");
const { makeUserFun } = require("./user");
const { makeWeatherFun } = require("./weather");
const path = "weather.txt";

const zapisz = data => {
  fs.readFile(path, "utf8", (error, body) => {
    let weatherData;
    if (!!error) {
      weatherData = [];
    } else {
      weatherData = JSON.parse(body);
    }
    weatherData.push(data);
    fs.writeFile(path, JSON.stringify(weatherData), () =>
      console.log("Zapisano z powodzeniem.")
    );
  });
};

let weather = makeWeatherFun(zapisz);
let getUser = makeUserFun(weather);
getUser(id);
