const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

const getUser = (id) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(url);
};

const getAbums = (id) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  return axios.get(url);
};

const getPhotos = (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
  return axios.get(url);
};

const app = (id) => {
  let user = getUser(id);
  let albums = getAbums(id);
  let photos = getPhotos(id);

  Promise.all([user, albums, photos]).then(
    ([userData, albumsData, photosData]) => {
      let name = userData.data.name,
        albums = albumsData.data,
        photos = photosData.data;
      console.log(name);
    }
  );
};
