const request = require("request");

function makeUserFun(callback) {
  const getUser = (id = 2) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    let name, lat, lng;

    request(url, (error, resonse, body) => {
      if (resonse.statusCode != 200) {
        console.log(error);
      } else {
        ({
          name,
          address: {
            city,
            geo: { lat, lng }
          }
        } = JSON.parse(body));
        callback({ name, lat, lng, city });
      }
    });
  };
  return getUser;
}

exports.makeUserFun = makeUserFun;
