const request = require("request");
const makeWeatherFun = callback => {
  const weather = ({ lat, lng, name, city }) => {
    let path = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(path, (error, response, body) => {
      if (response.statusCode != 200) {
        console.log(error);
      } else {
        let {
          main: { temp }
        } = JSON.parse(body);
        callback({ name, temp, city });
      }
    });
  };
  return weather;
};

exports.makeWeatherFun = makeWeatherFun;
