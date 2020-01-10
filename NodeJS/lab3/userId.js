const request = require("request");
const argv = require("yargs").argv;
let path = `https://jsonplaceholder.typicode.com/users/`;
(function({ id = 2 }) {
  path += id;
})(argv);

request(path, (err, response, body) => {
  if (response.statusCode != 200) {
    if (response.statusCode == 404) {
      console.log("Brak użytkownika w bazie");
    } else {
      console.log(response.statusCode, err);
    }
  } else {
    body = JSON.parse(body);
    let {
      name,
      address: {
        city,
        geo: { lat, lng }
      }
    } = body;
    weather({ name, city, lat, lng });
  }
});
function weather({ name, city, lat, lng }) {
  let path = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  request(path, (err, response, body) => {
    if (response.statusCode != 200) {
      console.log(response.statusCode, err);
    } else {
      body = JSON.parse(body);
      let {
        main: { temp }
      } = body;
      console.log(
        `Name: ${name}\ncity: ${city}\nlat: ${lat}\nlng: ${lng}\ntemp: ${(
          temp - 273.15
        ).toFixed(2)} \u2103`
      );
    }
  });
}
