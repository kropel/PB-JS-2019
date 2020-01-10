const axios = require("axios");

const getData = async (path) => {
  let data = await axios.get(path);
  return data;
};

(async (path) => {
  try {
    let usersIds = [2, 3, 5, 7];
    let dataAll = await Promise.all(usersIds.map((id) => getData(path + id)));
    dataAll.forEach((element) => {
      console.log(element.data.name);
    });
  } catch (error) {
    console.log(error);
  }
})("https://jsonplaceholder.typicode.com/users/");
