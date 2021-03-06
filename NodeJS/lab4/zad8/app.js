const axios = require("axios");
const fs = require("fs");

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getWeather = (user) => {
  let {
    address: {
      geo: { lat, lng }
    }
  } = user;
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  return axios.get(url);
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

const getData = (userId) => {
  let user = getUser(userId);
  let weather = user.then(({ data }) => getWeather(data));

  Promise.all([user, weather])
    .then(([user, weather]) => {
      let name = user.data.name;
      let weat = weather.data.main.temp;
      console.log(name, weat);
      return { name, weat };
    })
    .then(({ name, weat }) => save(`${name} ${weat}`));
};

getData(2);
