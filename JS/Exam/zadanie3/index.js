let givenData = [
  [7, null, 4, 8, null, null, 3, null, 1],
  [8, 2, null, 5, null, null, null, 4, null],
  [null, null, 9, 4, 3, null, 5, null, null],
  [3, 1, null, null, null, null, 8, null, 7],
  [null, 8, null, null, null, null, null, 1, null],
  [9, null, 7, null, null, null, null, 3, 2],
  [null, null, 6, null, 1, 5, 4, null, null],
  [null, 7, null, null, null, 9, null, 6, 5],
  [5, null, 8, null, null, 2, 1, null, 3]
];

class Square {
  constructor(rowStart, rowEnd, columnStrat, columnEnd) {
    this.foundNumbers = [];
    this.searchNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.range = {
      rowStart,
      rowEnd,
      columnStrat,
      columnEnd
    };
  }
  isCellInRange(rowIndex, columnIndex) {
    return (
      rowIndex >= this.range.rowStart &&
      rowIndex <= this.range.rowEnd &&
      columnIndex >= this.range.columnStrat &&
      columnIndex <= this.range.columnEnd
    );
  }
  addCell(rowIndex, columnIndex, cell) {
    if (!this.isCellInRange(rowIndex, columnIndex)) {
      return false;
    } else {
      let cellIndex = this.searchNumbers.indexOf(cell);
      if (cellIndex >= 0) {
        this.searchNumbers.splice(cellIndex, 1);
        this.foundNumbers.push(cell);
      }
      return true;
    }
  }
}

let bord = [],
  rows = [...new Array(9)].map(() => []),
  columns = [...new Array(9)].map(() => []),
  row = 0,
  column = 0;

for (let i = 0; i < 3; i++) {
  column = 0;
  for (let j = 0; j < 3; j++) {
    bord.push(new Square(row, row + 2, column, column + 2));
    column += 3;
  }
  row += 3;
}

givenData.forEach((row, rowIndex) => {
  row.forEach((cell, columnIndex) => {
    for (let i = 0; i < bord.length; i++) {
      if (bord[i].addCell(rowIndex, columnIndex, cell)) break;
    }
    if (!!givenData[rowIndex][columnIndex]) {
      rows[rowIndex].push(cell);
      columns[columnIndex].push(cell);
    }
  });
});

let searching = true;
while (searching) {
  searching = false;
  givenData.forEach((row, rowIndex) =>
    row.forEach((cell, columnIndex) => {
      if (cell === null) {
        searching = true;
        let square = bord.find((square) =>
          square.isCellInRange(rowIndex, columnIndex)
        );
        let tempNumbers = [];
        for (let number of square.searchNumbers) {
          if (
            rows[rowIndex].indexOf(number) < 0 &&
            columns[columnIndex].indexOf(number) < 0
          ) {
            tempNumbers.push(number);
          }
        }
        if (tempNumbers.length === 1) {
          givenData[rowIndex][columnIndex] = tempNumbers[0];
          square.foundNumbers.push(tempNumbers[0]);
          square.searchNumbers.splice(
            square.searchNumbers.indexOf(tempNumbers[0]),
            1
          );
          rows[rowIndex].push(tempNumbers[0]);
          columns[columnIndex].push(tempNumbers[0]);
          console.log(
            "cell: ",
            tempNumbers[0],
            " rowIndex: ",
            rowIndex,
            " columnIndex: ",
            columnIndex
          );
          givenData.forEach((row, rowIndex) => console.log(row));
          console.log("");
        }
      }
    })
  );
}
