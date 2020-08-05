function convertToZeros(matrix) {
  const colSet = new Set();
  const rowSet = new Set();

  for (const [row, rowVal] of matrix.entries()) {
    for (const [col, colVal] of rowVal.entries()) {
      if (colVal === 0) {
        colSet.add(col);
        rowSet.add(row);
      }
    }
  }

  for (const col of colSet) {
    for (const [row, rowVal] of matrix.entries()) {
      matrix[row][col] = 0;
    }
  }

  for (const row of rowSet) {
    for (const [col, colVal] of matrix[row].entries()) {
      matrix[row][col] = 0;
    }
  }

  return matrix;
}

const matrix = [
  ["A", 0, "C", "D"],
  ["E", "F", 0, "H"],
  ["I", "J", "K", "L"]
];
