let arr = new Array(20).fill(1);

arr.reduce((previouse, current, index, arr) => {
  if (index < 2) {
    console.log(1);
    return current;
  }
  arr[index] = previouse + arr[index - 2];
  console.log(`${arr[index - 2]}+${previouse}=${arr[index]}`);
  return arr[index];
}, 1);
console.table(arr);
