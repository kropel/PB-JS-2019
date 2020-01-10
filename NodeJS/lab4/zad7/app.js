const request = require("request");
const fs = require("fs");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);
        resolve(user);
      } else {
        reject("User not found");
      }
    });
  });
};

const getWeather = (user) => {
  let {
    address: {
      geo: { lat, lng }
    }
  } = user;
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const weather = JSON.parse(body);
        resolve({ user, weather });
      } else {
        reject("Weather not found");
      }
    });
  });
};

const save = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("data.txt", data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getUser(2)
  .then((user) => {
    // console.log(user);
    return getWeather(user);
  })
  .then(({ user, weather }) => {
    console.log(weather.main.temp, user.name);
    return save(`${weather.main.temp}  ${user.name}`);
  })
  .then((data) => console.log(`${data} zapisano pomyslnie`))
  .catch((error) => {
    console.log(error);
  });
