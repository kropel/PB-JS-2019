function rotateArray(rotate, arr = [1, 2, 3, 4, 5, 6, 7, 8]) {
  arr = [...arr];
  for (let i = 0; i < rotate; i++) {
    arr.reduce((previouse, current, index, arr) => {
      if (index === arr.length - 1) {
        arr[0] = current;
      }
      arr[index] = previouse;
      return current;
    });
  }
  return arr;
}

console.log(rotateArray(3, [1, 2, "p", , { gr: "rt" }]));
