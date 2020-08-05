// right, down, left, up
const DELTA_COL_BY_DIR = [1, 0, -1, 0];
const DELTA_ROW_BY_DIR = [0, 1, 0, -1];
function spiral(n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let val = 0;
  let row = 0;
  let col = 0;

  dir = 0;
  limit = n * n;

  while (val++ < limit) {
    matrix[row][col] = val;

    row += DELTA_ROW_BY_DIR[dir];
    col += DELTA_COL_BY_DIR[dir];

    if (invalid(matrix, row, col)) {
      row -= DELTA_ROW_BY_DIR[dir];
      col -= DELTA_COL_BY_DIR[dir];

      dir = (dir + 1) % 4;

      row += DELTA_ROW_BY_DIR[dir];
      col += DELTA_COL_BY_DIR[dir];
    }
  }

  return matrix;
}

function invalid(matrix, row, col) {
  return (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    !!matrix[row][col]
  );
}

console.log(spiral(8));
