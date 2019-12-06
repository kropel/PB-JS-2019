const fs = require("fs");
const argv = require("yargs").argv;
const path = "user.txt";
let { name, lastName } = argv;

fs.readFile(path, "utf8", (err, data) => {
  let usersObj = [];
  if (err) {
    console.log(err.message);
  } else {
    usersObj = JSON.parse(data);
  }
  usersObj.push({ name: name, lastName: lastName });
  console.log(usersObj);
  zapis(usersObj);
});

function zapis(users) {
  fs.writeFile(path, JSON.stringify(users), () =>
    console.log("Zapisano z powodzeniem.")
  );
}
