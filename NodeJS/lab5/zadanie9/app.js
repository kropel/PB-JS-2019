const axios = require("axios");

const getData = async (path) => axios.get(path);

(async (path) => {
  try {
    let {
      data: {
        name,
        address: {
          geo: { lat, lng }
        }
      }
    } = await getData(path);
    let weatherPath = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    let weatherData = await getData(weatherPath);
    console.log(`${name} ${weatherData.data.main.temp}`);
  } catch (error) {
    console.log(error);
  }
})("https://jsonplaceholder.typicode.com/users/2");
