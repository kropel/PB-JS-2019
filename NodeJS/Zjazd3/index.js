const fs = require("fs");
const argv = require("yargs").argv;
let path = "user.txt";
let { name, lastName } = argv;
const user = {
  name: name,
  lastName: lastName
};
console.log(user);
fs.readFile(path, "utf8", (error, data) => {
  if (!!error) {
    console.log(error);
    data = [];
  } else {
    data = JSON.parse(data);
  }
  data.push(user);
  zapis(data);
});
function zapis(userArray) {
  fs.writeFile(path, JSON.stringify(userArray), () =>
    console.log("Plik zapisano z powodzeniem.")
  );
}
