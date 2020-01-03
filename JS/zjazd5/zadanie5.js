const getRandom = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);
let group = [...new Array(getRandom(20, 8))].map((value, index) => index + 1);
let index = 0;
console.log(group);
while (group.length > 1) {
  let killMarker = index + 1 > group.length - 1 ? 0 : index + 1;
  console.log(`${group[index]} kills ${group.splice(killMarker, 1)}`);
  index++;
  if (index >= group.length) index = 0;
}

console.log(`${group[0]} Remains alive`);
